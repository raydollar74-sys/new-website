'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cookie, Settings, Shield, Info, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  })

  const handlePreferenceChange = (type: string, value: boolean) => {
    setCookiePreferences(prev => ({ ...prev, [type]: value }))
  }

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
          <Cookie className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cookie <span className="text-yellow-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-300">
            Last Updated: March 31, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies to enhance your experience on our website, understand how you interact with our content, 
                and improve our services. Cookies help us:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Remember your preferences',
                  'Keep you logged in',
                  'Analyze site traffic',
                  'Improve site performance',
                  'Provide relevant content',
                  'Enable secure transactions'
                ].map((use, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Always Active</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are essential for the website to function properly. They enable basic functions like 
                    page navigation, security, and access to secure areas. The website cannot function properly without these cookies.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={cookiePreferences.functional}
                        onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences 
                    and settings. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Info className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={cookiePreferences.analytics}
                        onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. They help us improve our website performance and user experience.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={cookiePreferences.marketing}
                        onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies track your online activity to help advertisers deliver more relevant advertising or 
                    to limit how many times you see an ad. They may be set by third-party advertising partners.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Preferences */}
            <div className="mb-8 bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Manage Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-4">
                You can customize your cookie preferences using the toggles above. Please note that necessary cookies 
                cannot be disabled as they are essential for the website to function.
              </p>
              <button 
                onClick={() => {
                  setCookiePreferences({
                    necessary: true,
                    functional: true,
                    analytics: true,
                    marketing: true
                  })
                }}
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-all mr-3"
              >
                Accept All
              </button>
              <button 
                onClick={() => {
                  setCookiePreferences({
                    necessary: true,
                    functional: false,
                    analytics: false,
                    marketing: false
                  })
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-all"
              >
                Reject Non-Essential
              </button>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some cookies are placed by third-party services that appear on our pages. These include:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Google Maps:</strong> For displaying our location on interactive maps</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We do not control these third-party cookies and recommend checking their respective privacy policies.
              </p>
            </div>

            {/* How to Control Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Control Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>View cookies stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Set preferences for future cookie placement</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Please note that blocking some types of cookies may impact your experience on our website.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with 
                an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Questions About Cookies?</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> info@huanqiupreciousmetal.com</p>
                <p><strong>Phone:</strong> +243 896 249 259</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}