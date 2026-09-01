'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const phoneNumber = '+243966344357'
  const message = encodeURIComponent('Hello! I would like to inquire about Huanqiu Precious Metal.')
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 w-64 animate-fadeIn">
            <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 shadow-lg relative">
              <p className="font-medium">Chat with us on WhatsApp!</p>
              <p className="text-xs text-gray-300 mt-1">Click to start a conversation</p>
              {/* Arrow */}
              <div className="absolute -bottom-2 right-4 w-3 h-3 bg-gray-900 transform rotate-45"></div>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center justify-center group"
        >
          <div className="relative">
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            
            {/* Main Button */}
            <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110">
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>
        </a>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-1 shadow-md transition-all duration-200"
          aria-label="Close WhatsApp button"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </>
  )
}