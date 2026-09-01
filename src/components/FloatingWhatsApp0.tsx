'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [message, setMessage] = useState('')

  const phoneNumber = '+243966344357'
  const defaultMessage = encodeURIComponent('Hello! I would like to inquire about gold assay services.')

  const sendWhatsApp = () => {
    const customMessage = message ? encodeURIComponent(message) : defaultMessage
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${customMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Auto-hide after user scrolls down
  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 w-64 animate-fadeIn">
            <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 shadow-lg relative">
              <p className="font-medium">💬 Chat with us on WhatsApp!</p>
              <p className="text-xs text-gray-300 mt-1">Click to start a conversation</p>
              {/* Arrow */}
              <div className="absolute -bottom-2 right-4 w-3 h-3 bg-gray-900 transform rotate-45"></div>
            </div>
          </div>
        )}

        {/* Expanded Chat Box */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 mb-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <MessageCircle className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp Support</h3>
                    <p className="text-xs text-green-100">Usually replies within minutes</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-green-600 rounded-full p-1 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 Hello! Welcome to Huanqiu Precious Metal. How can we help you today?
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">Online</span>
                </div>
              </div>

              {/* Quick Replies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Gold Assay Pricing', 'Turnaround Time', 'Export Certification', 'Sample Submission'].map((reply) => (
                  <button
                    key={reply}
                    onClick={() => setMessage(`I'm interested in: ${reply}`)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  onKeyPress={(e) => e.key === 'Enter' && sendWhatsApp()}
                />
                <button
                  onClick={sendWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 transition"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    <span>info@huanqiupreciousmetal.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(false)}
          className="flex items-center justify-center group"
        >
          <div className="relative">
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            
            {/* Main Button */}
            <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6" />
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Add styles for animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}