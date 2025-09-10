import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface DocMetadata {
  title: string
  description?: string
  date?: string
  author?: string
  difficulty?: string
  [key: string]: string | undefined
}

export interface DocContent {
  metadata: DocMetadata
  content: string
  slug: string
  filePath: string
}

export interface DocStructure {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: DocStructure[]
}

const DOCS_DIRECTORY = path.join(process.cwd(), 'docs')

export function getDocBySlug(slug: string[]): DocContent | null {
  try {
    const fileName = slug[slug.length - 1]
    const filePath = path.join(DOCS_DIRECTORY, ...slug.slice(0, -1), `${fileName}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      metadata: data as DocMetadata,
      content,
      slug: slug.join('/'),
      filePath: filePath.replace(DOCS_DIRECTORY, '').replace(/^\//, '')
    }
  } catch (error) {
    console.error('Error reading doc:', error)
    return null
  }
}

export function getAllDocs(): DocContent[] {
  const docs: DocContent[] = []
  
  function readDirectory(dirPath: string, currentSlug: string[] = []): void {
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true })
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          readDirectory(
            path.join(dirPath, entry.name),
            [...currentSlug, entry.name]
          )
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
          const fileName = entry.name.replace('.md', '')
          const fullPath = path.join(dirPath, entry.name)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)
          
          docs.push({
            metadata: data as DocMetadata,
            content,
            slug: [...currentSlug, fileName].join('/'),
            filePath: fullPath.replace(DOCS_DIRECTORY, '').replace(/^\//, '')
          })
        }
      }
    } catch (error) {
      console.error('Error reading directory:', dirPath, error)
    }
  }
  
  readDirectory(DOCS_DIRECTORY)
  return docs
}

export function getDocStructure(): DocStructure[] {
  function buildStructure(dirPath: string, basePath: string[] = []): DocStructure[] {
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true })
      const structure: DocStructure[] = []
      
      for (const entry of entries) {
        const entryPath = [...basePath, entry.name].join('/')
        
        if (entry.isDirectory()) {
          structure.push({
            name: entry.name,
            path: entryPath,
            type: 'directory',
            children: buildStructure(path.join(dirPath, entry.name), [...basePath, entry.name])
          })
        } else if (entry.name.endsWith('.md')) {
          const fileName = entry.name.replace('.md', '')
          structure.push({
            name: fileName,
            path: [...basePath, fileName].join('/'),
            type: 'file'
          })
        }
      }
      
      // Sort: directories first, then files
      return structure.sort((a, b) => {
        if (a.type === 'directory' && b.type === 'file') return -1
        if (a.type === 'file' && b.type === 'directory') return 1
        return a.name.localeCompare(b.name)
      })
    } catch (error) {
      console.error('Error building structure:', error)
      return []
    }
  }
  
  return buildStructure(DOCS_DIRECTORY)
}

export function getDocNavigation(currentSlug: string): { prev: DocContent | null, next: DocContent | null } {
  const allDocs = getAllDocs()
  const currentIndex = allDocs.findIndex(doc => doc.slug === currentSlug)
  
  return {
    prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null
  }
}

export function searchDocs(query: string): DocContent[] {
  const allDocs = getAllDocs()
  const lowercaseQuery = query.toLowerCase()
  
  return allDocs.filter(doc => {
    const searchableText = [
      doc.metadata.title,
      doc.metadata.description,
      doc.content
    ].join(' ').toLowerCase()
    
    return searchableText.includes(lowercaseQuery)
  })
}