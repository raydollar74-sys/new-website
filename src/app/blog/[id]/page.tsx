import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'
// import ShareButtons from '@/components/ShareButtons'

interface Post {
  kind: string
  id: string
  blog: {
    id: string
  }
  published: string
  updated: string
  url: string
  selfLink: string
  title: string
  content: string
  author: {
    id: string
    displayName: string
    url: string
    image: {
      url: string
    }
  }
  replies: {
    totalItems: string
    selfLink: string
  }
  etag: string
}

interface BloggerPostsResponse {
  kind: string
  items: Post[]
  etag: string
}

async function getPost(id: string): Promise<Post | null> {
  const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/4135913305621527920/posts/${id}?key=AIzaSyDDVgqvEE4QSXyqd5Sn_Sl3pOjVn1JXlhA`
  
  try {
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } })
    
    if (!res.ok) {
      if (res.status === 404) return null
      console.error('Failed to fetch post:', res.status, res.statusText)
      return null
    }
    
    const data: Post = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

async function getAllPostIds(): Promise<string[]> {
  const apiUrl = "https://www.googleapis.com/blogger/v3/blogs/4135913305621527920/posts?key=AIzaSyDDVgqvEE4QSXyqd5Sn_Sl3pOjVn1JXlhA"
  
  try {
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } })
    
    if (!res.ok) {
      console.error('Failed to fetch posts:', res.status, res.statusText)
      return []
    }
    
    const data: BloggerPostsResponse = await res.json()
    return data.items?.map((post: Post) => post.id) || []
  } catch (error) {
    console.error('Error fetching post IDs:', error)
    return []
  }
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    return 'Date unavailable'
  }
}

function calculateReadTime(content: string): number {
  const plainText = content.replace(/<[^>]*>/g, '')
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const ids = await getAllPostIds()
  return ids.map((id: string) => ({
    id: id,
  }))
}

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = await getPost(id)
  
  if (!post) {
    notFound()
  }

  const readTime = calculateReadTime(post.content)

  // Clean up content - remove script tags and handle images properly
  const cleanContent = post.content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, (match, src) => {
      if (src.startsWith('http')) {
        return match
      }
      return match
    })

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.published)}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author.displayName}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image Placeholder - You can replace with actual image from post if available */}
            <div className="relative h-64 md:h-96 bg-gradient-to-r from-yellow-500 to-amber-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">✨</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 lg:p-10">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:underline prose-ul:text-gray-700 prose-li:text-gray-700 prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />
              
              {/* Share Section - Using Client Component */}
              <ShareButtons title={post.title} url={post.url || ''} />
              
              {/* Contact Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  Contact Our Team
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </article>
          
          {/* Navigation Between Posts */}
          <div className="mt-8 flex justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <p className="text-center text-gray-500">
            Stay tuned for more insights from the world of precious metals.
          </p>
        </div>
      </section>
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = await getPost(id)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }
  
  const plainText = post.content.replace(/<[^>]*>/g, '').substring(0, 160)
  
  return {
    title: `${post.title} | Huanqiu Precious Metal Blog`,
    description: plainText,
    openGraph: {
      title: post.title,
      description: plainText,
      type: 'article',
      publishedTime: post.published,
      authors: [post.author.displayName],
    },
  }
}