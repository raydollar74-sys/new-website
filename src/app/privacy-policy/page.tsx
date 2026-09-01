'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Eye, Database, Mail, Lock, Users, Globe, Clock } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
          <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-yellow-500">Policy</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Huanqiu Precious Metal Trading Limited ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website or services, you consent to the data practices described in this policy. 
                If you do not agree with any part of this policy, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-semibold text-gray-900">Personal Information</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Full name</li>
                    <li>• Email address</li>
                    <li>• Phone number</li>
                    <li>• Physical address</li>
                    <li>• Company information (if applicable)</li>
                    <li>• Identification documents (for compliance)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-semibold text-gray-900">Transaction Information</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Gold trading history</li>
                    <li>• Transaction amounts</li>
                    <li>• Payment details</li>
                    <li>• Banking information</li>
                    <li>• Source of gold documentation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-semibold text-gray-900">Technical Information</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• IP address</li>
                    <li>• Browser type and version</li>
                    <li>• Device information</li>
                    <li>• Pages visited</li>
                    <li>• Time and date of visit</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-semibold text-gray-900">Communication Data</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Correspondence with us</li>
                    <li>• Inquiry details</li>
                    <li>• Feedback and reviews</li>
                    <li>• Marketing preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Process gold trading transactions',
                  'Verify identity and comply with regulations',
                  'Communicate about your transactions',
                  'Provide customer support',
                  'Improve our services',
                  'Send important updates',
                  'Prevent fraud and ensure security',
                  'Comply with legal obligations'
                ].map((use, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We process your personal information based on one or more of the following legal grounds:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li><strong>Contract Performance:</strong> To fulfill our obligations when you engage in trading transactions</li>
                <li><strong>Legal Compliance:</strong> To comply with anti-money laundering and Know Your Customer regulations</li>
                <li><strong>Legitimate Interests:</strong> To improve our services and protect our business interests</li>
                <li><strong>Consent:</strong> When you have given explicit consent for specific processing activities</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li><strong>Regulatory Authorities:</strong> To comply with legal and regulatory requirements</li>
                <li><strong>Financial Institutions:</strong> For payment processing and verification</li>
                <li><strong>Service Providers:</strong> Third parties who assist in operating our business</li>
                <li><strong>Professional Advisors:</strong> Lawyers, auditors, and consultants</li>
                <li><strong>Law Enforcement:</strong> When required by law or to protect rights</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-800">We Implement Robust Security Measures</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 ml-6 list-disc">
                  <li>Encryption of sensitive data</li>
                  <li>Secure server infrastructure</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security audits</li>
                  <li>Staff training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                unless a longer retention period is required or permitted by law. Transaction records are typically retained 
                for 7 years to comply with regulatory requirements.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <p className="text-sm text-gray-600">Retention periods vary based on the type of information and legal requirements.</p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Right to access your data',
                  'Right to rectification',
                  'Right to erasure',
                  'Right to restrict processing',
                  'Right to data portability',
                  'Right to object to processing',
                  'Right to withdraw consent',
                  'Right to lodge a complaint'
                ].map((right, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{right}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                For more information, please see our <Link href="/cookie-policy" className="text-yellow-600 hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you believe we have inadvertently collected such information, 
                please contact us immediately.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                As a global trading company, your information may be transferred to and processed in countries 
                outside your home country. We ensure appropriate safeguards are in place to protect your data 
                in accordance with applicable laws.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on this page with an updated effective date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> info@huanqiupreciousmetal.com</p>
                <p><strong>Phone:</strong> +243 896 249 259</p>
                <p><strong>Address:</strong> Luthuli Avenue, Kololo, Kampala, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}