'use client'

import { useState } from 'react'
import { Share2, Printer, CheckCircle } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : url
    
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: shareUrl
        })
      } catch (error) {
        // User cancelled share or share failed
        console.log('Share cancelled or failed')
      }
    } else if (typeof navigator !== 'undefined') {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        alert('Unable to copy link. Please copy manually.')
      }
    }
  }

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-600 font-medium">Share this article:</span>
          <button
            onClick={handleShare}
            className="p-2 bg-gray-100 rounded-full hover:bg-yellow-100 transition-colors relative group"
            aria-label="Share article"
          >
            {copied ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <Share2 className="w-5 h-5 text-gray-600" />
            )}
            {copied && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Link copied!
              </span>
            )}
          </button>
          <button
            onClick={handlePrint}
            className="p-2 bg-gray-100 rounded-full hover:bg-yellow-100 transition-colors"
            aria-label="Print article"
          >
            <Printer className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}