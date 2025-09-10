import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Book, FolderOpen, FileText, Search, Clock } from 'lucide-react'
import { getAllDocs, getDocStructure, DocContent, DocStructure } from '../../lib/docs'
import DarkModeToggle from '../../components/DarkModeToggle'

interface DocsIndexProps {
  allDocs: DocContent[]
  docStructure: DocStructure[]
}

const formatTitle = (title: string) => {
  return title
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const DocTree: React.FC<{ structure: DocStructure[]; level?: number }> = ({ 
  structure, 
  level = 0 
}) => {
  return (
    <div className={level > 0 ? 'ml-4 border-l border-gray-200 dark:border-gray-700 pl-4' : ''}>
      {structure.map((item) => (
        <div key={item.path} className="mb-2">
          {item.type === 'directory' ? (
            <div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
                <FolderOpen className="w-4 h-4 text-blue-500" />
                <span>{formatTitle(item.name)}</span>
              </div>
              {item.children && <DocTree structure={item.children} level={level + 1} />}
            </div>
          ) : (
            <Link href={`/docs/${item.path}`}>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-hc-red dark:hover:text-hc-red transition-colors cursor-pointer group">
                <FileText className="w-4 h-4 group-hover:text-hc-red transition-colors" />
                <span>{formatTitle(item.name)}</span>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

const RecentDocs: React.FC<{ docs: DocContent[] }> = ({ docs }) => {
  const recentDocs = docs
    .filter(doc => doc.metadata.date)
    .sort((a, b) => new Date(b.metadata.date!).getTime() - new Date(a.metadata.date!).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-4">
      {recentDocs.map((doc) => (
        <Link key={doc.slug} href={`/docs/${doc.slug}`}>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-hc-red dark:hover:border-hc-red">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              {doc.metadata.title}
            </h3>
            {doc.metadata.description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {doc.metadata.description}
              </p>
            )}
            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
              {doc.metadata.date && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{new Date(doc.metadata.date).toLocaleDateString()}</span>
                </div>
              )}
              {doc.metadata.difficulty && (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  doc.metadata.difficulty === 'Beginner' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : doc.metadata.difficulty === 'Intermediate'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {doc.metadata.difficulty}
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function DocsIndex({ allDocs, docStructure }: DocsIndexProps) {
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
              <Link href="/docs" className="text-hc-red font-medium">
                Documentation
              </Link>
              <DarkModeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hc-snow via-white to-hc-smoke dark:from-hc-darkless dark:via-hc-dark dark:to-hc-darker py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-hc-black dark:text-white mb-6">
              Documentation
              <span className="block gradient-text">& Learning Resources</span>
            </h1>
            <p className="text-xl text-hc-slate dark:text-hc-muted mb-8 max-w-2xl mx-auto">
              Everything you need to know about coding, our club, and the amazing tools we use.
            </p>
            
            {/* Search Bar Placeholder */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-hc-darkless text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-hc-red focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Quick Start */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Start
              </h2>
              <div className="space-y-4">
                <Link href="/docs/introduction">
                  <div className="bg-gradient-to-r from-hc-red to-hc-orange p-6 rounded-xl text-white cursor-pointer hover:shadow-lg transition-all duration-200">
                    <h3 className="font-bold text-lg mb-2">📚 Introduction</h3>
                    <p className="text-white/90 text-sm">Start here to learn about our club and community</p>
                  </div>
                </Link>
                
                <Link href="/docs/getting-started/welcome">
                  <div className="bg-white dark:bg-hc-darkless border border-gray-200 dark:border-gray-700 p-6 rounded-xl cursor-pointer hover:shadow-lg hover:border-hc-red dark:hover:border-hc-red transition-all duration-200">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">🚀 Getting Started</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">New member? This guide will get you up and running</p>
                  </div>
                </Link>
                
                <Link href="/docs/tutorials/web-development/first-website">
                  <div className="bg-white dark:bg-hc-darkless border border-gray-200 dark:border-gray-700 p-6 rounded-xl cursor-pointer hover:shadow-lg hover:border-hc-red dark:hover:border-hc-red transition-all duration-200">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">💻 First Tutorial</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Build your first website with our guided tutorial</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* All Documentation */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                All Documentation
              </h2>
              <div className="bg-white dark:bg-hc-darkless border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <DocTree structure={docStructure} />
              </div>
            </div>

            {/* Recent Updates */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Recent Updates
              </h2>
              <RecentDocs docs={allDocs} />
            </div>

          </div>
        </div>
      </section>

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

export const getStaticProps: GetStaticProps = async () => {
  const allDocs = getAllDocs()
  const docStructure = getDocStructure()

  return {
    props: {
      allDocs,
      docStructure,
    },
  }
}