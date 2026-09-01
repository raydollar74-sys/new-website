'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  AlertCircle,
  Globe,
  Building2,
  Users,
  Shield,
  X
} from 'lucide-react'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS configuration
  const emailjsConfig = {
    serviceId: "service_fcgw92b",
    templateId: "template_ptn31nq",
    publicKey: "84ih5THokCK_-adoF"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formRef.current) return
    
    setIsSubmitting(true)
    setError(false)
    setSubmitted(false)

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setSubmitted(true)
          setError(false)
          formRef.current?.reset() // Clear form after success
          setIsSubmitting(false)
          
          // Auto-hide success message after 5 seconds
          setTimeout(() => setSubmitted(false), 5000)
        },
        (error) => {
          console.error("EmailJS Error:", error.text)
          setError(true)
          setSubmitted(false)
          setIsSubmitting(false)
          
          // Auto-hide error message after 5 seconds
          setTimeout(() => setError(false), 5000)
        }
      )
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: [
        'Luthuli Avenue, Kololo',
        'Kampala, Uganda',
        'P.O Box 7361'
      ],
      action: {
        text: 'Get Directions',
        href: 'https://maps.google.com/?q=Kololo+Kampala+Uganda'
      }
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      details: [
        '++243 966 344357',
      ],
      action: {
        text: 'Message on WhatsApp',
        href: 'https://wa.me/+243966344357'
      }
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@huanqiupreciousmetal.com',
      ],
      action: {
        text: 'Send Email',
        href: 'mailto:info@huanqiupreciousmetal.com'
      }
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday – Friday: 8:00am – 6:00pm',
        'Saturday: 9:00am – 2:00pm',
        'Sunday: Closed'
      ],
      action: {
        text: 'Emergency Support',
        href: 'https://wa.me/+243966344357'
      }
    }
  ]

  const departments = [
    {
      name: 'Gold Trading & Sales',
      email: 'info@huanqiupreciousmetal.com',
      phone: '+243 966 344357',
      description: 'For inquiries about purchasing gold or precious metals'
    },
    {
      name: 'Miners & Sourcing',
      email: 'info@huanqiupreciousmetal.com',
      description: 'For miners looking to sell gold or partner with us'
    },
    {
      name: 'Customer Support',
      email: 'info@huanqiupreciousmetal.com',
      phone: '+243 966 344357',
      description: 'For assistance with existing transactions or inquiries'
    },
    {
      name: 'Media & Partnerships',
      email: 'info@huanqiupreciousmetal.com',
      phone: '+243 966 344357',
      description: 'For media inquiries, partnerships, and collaborations'
    }
  ]

  const faqs = [
    {
      question: 'How do I sell my gold to Huanqiu?',
      answer: 'Simply contact us via phone, WhatsApp, or email to schedule an appointment. Bring your gold to our office in Kololo, Kampala for testing and valuation. We provide immediate payment upon confirmation.'
    },
    {
      question: 'What documentation do I need to sell gold?',
      answer: 'You need a valid ID (passport or national ID), proof of address, and any documentation proving the source of the gold. We can guide you through the process.'
    },
    {
      question: 'Do you buy gold from individual miners?',
      answer: 'Yes! We work directly with individual artisanal miners, small-scale operations, and mining cooperatives across Uganda, DRC, Tanzania, and other East African countries.'
    },
    {
      question: 'How do you determine the price of gold?',
      answer: 'We use real-time international gold market rates, verified through professional testing of your gold\'s purity. Our pricing is transparent and fair.'
    },
    {
      question: 'Do you offer refining services?',
      answer: 'Yes, we provide professional gold refining services to achieve 99.99% purity, making your gold ready for international markets and investment.'
    },
    {
      question: 'How long does payment take?',
      answer: 'Payment is processed immediately after testing and valuation. You can receive payment via mobile money, bank transfer, or cash on the same day.'
    }
  ]

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
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for inquiries about gold trading, partnerships, or any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <a
                  href={info.action.href}
                  target={info.action.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-yellow-600 text-sm font-medium hover:text-yellow-700 transition-colors inline-flex items-center gap-1"
                >
                  {info.action.text}
                  <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Send Us a <span className="text-yellow-500">Message</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions about our services, pricing, or partnership opportunities? Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 text-black">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="user_phone"
                      name="user_phone"
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="Gold Trading">Gold Trading Inquiry</option>
                    <option value="Selling Gold">Selling Gold</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Refining">Refining Services</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
                
                {/* Success Message */}
                {submitted && !isSubmitting && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-700 text-sm">Thank you! Your message has been sent. We'll respond within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="ml-auto">
                      <X className="w-4 h-4 text-green-500" />
                    </button>
                  </div>
                )}
                
                {/* Error Message */}
                {error && !isSubmitting && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-sm">Failed to send message. Please try again or contact us directly via phone/WhatsApp.</p>
                    <button onClick={() => setError(false)} className="ml-auto">
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
            
            {/* Map & Location */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Visit Our <span className="text-yellow-500">Office</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Located in the heart of Kampala's business district, we welcome you to visit our office for in-person consultations.
              </p>
              
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748710891849!2d32.588058!3d0.331144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6d9a4e1b6b%3A0x8b5c2a6b8b2c8b2c!2sKololo%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Huanqiu Precious Metal Location"
                />
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-gray-800 font-medium">Luthuli Avenue, Kololo</p>
                    <p className="text-gray-600 text-sm">Kampala, Uganda</p>
                    <p className="text-gray-600 text-sm">P.O Box 7361</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/243966344357?text=Hello!%20I%20would%20like%20to%20inquire%20about%20gold%20trading%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110">
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>
        </a>
      </div>

      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Contact Our <span className="text-yellow-500">Departments</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out directly to the department that best fits your inquiry for faster service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{dept.description}</p>
                <div className="space-y-1">
                  <a href={`mailto:${dept.email}`} className="text-yellow-600 text-sm hover:underline block">
                    {dept.email}
                  </a>
                  {dept.phone && (
                    <a href={`tel:${dept.phone}`} className="text-gray-600 text-sm hover:text-yellow-600 block">
                      {dept.phone}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Trust Signals */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400 mb-2">Connect With Us</p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="text-center">
                <Shield className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Licensed & Regulated</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                <p className="text-xs text-gray-400">500+ Families Supported</p>
              </div>
              <div className="text-center">
                <Globe className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                <p className="text-xs text-gray-400">10+ Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}