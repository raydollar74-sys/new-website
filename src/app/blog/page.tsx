import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'

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

interface BloggerApiResponse {
  kind: string
  items: Post[]
  etag: string
}

async function getPosts(): Promise<Post[]> {
  const apiUrl = "https://www.googleapis.com/blogger/v3/blogs/4135913305621527920/posts?key=AIzaSyAhTsBmQQ5dqZwssBPkVhciQ45T-UwBqU4"
  
  try {
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } })
    
    if (!res.ok) {
      console.error('Failed to fetch posts:', res.status, res.statusText)
      return []
    }
    
    const data: BloggerApiResponse = await res.json()
    return data.items || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

function stripHtml(html: string): string {
  // Remove HTML tags and limit to 200 characters
  const plainText = html.replace(/<[^>]*>/g, '').trim()
  if (plainText.length <= 200) return plainText
  return plainText.substring(0, 200) + '...'
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

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-yellow-500">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, updates, and expert knowledge from the world of precious metals trading and refining.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Featured Image Placeholder - You can customize this */}
                  <div className="relative h-48 bg-gradient-to-r from-yellow-500 to-amber-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">📄</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.published)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author.displayName}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {stripHtml(post.content)}
                    </p>
                    
                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on precious metals trading, market updates, and industry news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}