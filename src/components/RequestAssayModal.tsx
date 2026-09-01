'use client'

import { useState, useEffect } from 'react'
import { X, Send, Phone, Mail } from 'lucide-react'

export default function RequestAssayModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    metalType: 'gold',
    weight: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const modal = document.getElementById('request-assay-modal')
    if (modal) {
      const observer = new MutationObserver(() => {
        setIsOpen(!modal.classList.contains('hidden'))
      })
      observer.observe(modal, { attributes: true })
      return () => observer.disconnect()
    }
  }, [])

  const handleClose = () => {
    document.getElementById('request-assay-modal')?.classList.add('hidden')
    setSubmitted(false)
    setFormData({
      name: '', email: '', phone: '', metalType: 'gold', weight: '', message: ''
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - you can integrate with your backend here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div id="request-assay-modal" className="fixed inset-0 z-50 hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Request an Assay</h2>
            <button onClick={handleClose} className="p-1 hover:bg-gray-100 rounded-lg transition">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Request Sent!</h3>
                <p className="text-gray-600">We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="bg-gold-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    <Phone size={16} /> WhatsApp: +256757319091
                  </p>
                  <p className="text-sm text-gray-700 flex items-center gap-2 mt-1">
                    <Mail size={16} /> assay@huanqiupreciousmetal.com
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Metal Type</label>
                    <select
                      value={formData.metalType}
                      onChange={(e) => setFormData({...formData, metalType: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="platinum">Platinum</option>
                      <option value="other">Other Precious Metals</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Approximate Weight (kg/g)</label>
                    <input
                      type="text"
                      value={formData.weight}
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                      placeholder="e.g., 2.5 kg"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gold-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gold-400 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}