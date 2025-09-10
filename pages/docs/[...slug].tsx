import React from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Book, ChevronLeft, ChevronRight, Clock, User, BarChart3, Home } from 'lucide-react'
import { getDocBySlug, getAllDocs, getDocNavigation, DocContent } from '../../lib/docs'
import DarkModeToggle from '../../components/DarkModeToggle'

interface DocPageProps {
  doc: DocContent
  navigation: {
    prev: DocContent | null
    next: DocContent | null
  }
}

const formatTitle = (title: string) => {
  return title
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const Breadcrumbs: React.FC<{ slug: string }> = ({ slug }) => {
  const parts = slug.split('/')
  const breadcrumbs = []
  
  // Add home
  breadcrumbs.push({ name: 'Docs', href: '/docs' })
  
  // Add intermediate paths
  for (let i = 0; i < parts.length - 1; i++) {
    const name = formatTitle(parts[i])
    const href = `/docs/${parts.slice(0, i + 1).join('/')}`
    breadcrumbs.push({ name, href })
  }
  
  // Add current page
  breadcrumbs.push({ name: formatTitle(parts[parts.length - 1]), href: null })
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
      <Link href="/" className="hover:text-hc-red transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4" />
          {breadcrumb.href ? (
            <Link href={breadcrumb.href} className="hover:text-hc-red transition-colors">
              {breadcrumb.name}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-white font-medium">
              {breadcrumb.name}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

const DocMetadataDisplay: React.FC<{ metadata: DocContent['metadata'] }> = ({ metadata }) => {
  return (
    <div className="bg-gray-50 dark:bg-hc-darkless border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {metadata.date && (
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Updated {new Date(metadata.date).toLocaleDateString()}</span>
          </div>
        )}
        {metadata.author && (
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <User className="w-4 h-4" />
            <span>{metadata.author}</span>
          </div>
        )}
        {metadata.difficulty && (
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4 text-gray-500" />
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              metadata.difficulty === 'Beginner' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                : metadata.difficulty === 'Intermediate'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            }`}>
              {metadata.difficulty}
            </span>
          </div>
        )}
      </div>
      {metadata.description && (
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
          {metadata.description}
        </p>
      )}
    </div>
  )
}

const NavigationButtons: React.FC<{ navigation: DocPageProps['navigation'] }> = ({ navigation }) => {
  if (!navigation.prev && !navigation.next) return null
  
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        {navigation.prev && (
          <Link href={`/docs/${navigation.prev.slug}`}>
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </div>
              <div className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-hc-red transition-colors">
                {navigation.prev.metadata.title}
              </div>
            </div>
          </Link>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {navigation.next && (
          <Link href={`/docs/${navigation.next.slug}`}>
            <div className="group cursor-pointer">
              <div className="flex items-center justify-end space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-hc-red transition-colors">
                {navigation.next.metadata.title}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default function DocPage({ doc, navigation }: DocPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-hc-dark transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-hc-dark border-b border-gray-100 dark:border-hc-darkless sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <div className="w-8 h-8 bg-hc-red rounded-lg flex items-center justify-center">
                    <Book className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">
                    FAU Coding Club Docs
                  </span>
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-hc-red dark:hover:text-hc-red font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-hc-red dark:hover:text-hc-red font-medium transition-colors duration-200">
                Documentation
              </Link>
              <DarkModeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs slug={doc.slug} />
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {doc.metadata.title}
            </h1>
          </div>
          
          <DocMetadataDisplay metadata={doc.metadata} />
          
          {/* Markdown Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-hc-red hover:prose-a:text-hc-red/80 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-blockquote:border-hc-red prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-hc-darkless">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // Custom code block styling
                code(props) {
                  const { className, children } = props
                  const match = /language-(\w+)/.exec(className || '')
                  const lang = match ? match[1] : ''
                  const isInline = !lang
                  
                  if (!isInline && lang) {
                    return (
                      <div className="relative">
                        <div className="absolute top-0 right-0 bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-bl-md rounded-tr-md">
                          {lang}
                        </div>
                        <pre className={className}>
                          <code>{children}</code>
                        </pre>
                      </div>
                    )
                  }
                  
                  return (
                    <code className={className}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {doc.content}
            </ReactMarkdown>
          </div>
          
          <NavigationButtons navigation={navigation} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-hc-black dark:bg-hc-darker text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-hc-red rounded-full flex items-center justify-center">
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">FAU Coding Club Documentation</span>
          </div>
          <p className="text-hc-muted text-sm">
            Made with ❤️ by the FAU Coding Club community
          </p>
        </div>
      </footer>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allDocs = getAllDocs()
  
  const paths = allDocs.map((doc) => ({
    params: {
      slug: doc.slug.split('/')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[]
  
  if (!slug) {
    return {
      notFound: true
    }
  }
  
  const doc = getDocBySlug(slug)
  
  if (!doc) {
    return {
      notFound: true
    }
  }
  
  const navigation = getDocNavigation(doc.slug)

  return {
    props: {
      doc,
      navigation
    }
  }
}