'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  Scale, 
  AlertCircle, 
  CheckCircle, 
  Globe,
  DollarSign,
  Truck,
  Lock,
  Users,
  Clock,
  Briefcase
} from 'lucide-react'

export default function TermsAndConditionsPage() {
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
          <FileText className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms and <span className="text-yellow-500">Conditions</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Huanqiu Precious Metal Trading Limited. These Terms and Conditions govern your use of 
                our website and services, including gold trading, sourcing, and related precious metal transactions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing our website or using our services, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { term: '"Company"', definition: 'Huanqiu Precious Metal Trading Limited' },
                  { term: '"Services"', definition: 'Gold trading, sourcing, refining, and export services' },
                  { term: '"User"', definition: 'Any person or entity using our services' },
                  { term: '"Gold"', definition: 'Gold and other precious metals traded' },
                  { term: '"Transaction"', definition: 'Any purchase, sale, or trade of precious metals' },
                  { term: '"Documentation"', definition: 'All required legal and compliance documents' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-900">{item.term}</p>
                    <p className="text-sm text-gray-600">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use our services, you must:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not be prohibited from receiving our services under any applicable laws</li>
              </ul>
            </div>

            {/* Trading Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Trading Terms</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">4.1 Pricing and Valuation</h3>
                  <p className="text-gray-600 text-sm">
                    Gold prices are determined based on real-time international market rates. Final valuation is 
                    confirmed after professional testing and purity verification. Prices are subject to change 
                    based on market conditions.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">4.2 Purity and Quality</h3>
                  <p className="text-gray-600 text-sm">
                    All gold is tested using professional methods including fire assay and spectrometry. Purity 
                    results are documented in assay certificates provided to the seller and buyer.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">4.3 Payment Terms</h3>
                  <p className="text-gray-600 text-sm">
                    Payments to miners are processed immediately after verification and valuation. Buyer payments 
                    are required prior to shipment or as agreed in the transaction contract.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">4.4 Documentation</h3>
                  <p className="text-gray-600 text-sm">
                    All transactions require complete documentation including identification, source of gold, 
                    and transaction records. Failure to provide required documentation may result in transaction delay or cancellation.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance and Legal */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compliance and Legal Requirements</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a licensed precious metal trading company, we are required to comply with:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Anti-Money Laundering (AML) regulations',
                  'Know Your Customer (KYC) requirements',
                  'OECD Due Diligence guidelines',
                  'Uganda Mining Act and regulations',
                  'Customs and export control laws',
                  'International trade sanctions'
                ].map((req, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{req}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                All users must provide necessary documentation for compliance purposes. We reserve the right to 
                refuse service or terminate transactions if compliance requirements are not met.
              </p>
            </div>

            {/* User Obligations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Obligations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Provide accurate and truthful information</li>
                <li>Maintain confidentiality of transaction details</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in fraudulent or illegal activities</li>
                <li>Not attempt to manipulate prices or markets</li>
                <li>Not use our services for money laundering or other illicit purposes</li>
              </ul>
            </div>

            {/* Risk Disclosure */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Risk Disclosure</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="font-semibold text-red-800">Important Risk Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-red-700 ml-6 list-disc">
                  <li>Gold prices are volatile and subject to market fluctuations</li>
                  <li>Purity verification may reveal unexpected impurities</li>
                  <li>Regulatory changes may affect trading operations</li>
                  <li>International shipping involves inherent risks</li>
                  <li>Past performance does not guarantee future results</li>
                </ul>
              </div>
            </div>

            {/* Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, Huanqiu Precious Metal Trading Limited shall not be liable for:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Market fluctuations or price changes</li>
                <li>Third-party actions or events beyond our control</li>
                <li>Force majeure events including natural disasters, war, or government actions</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on our website, including logos, trademarks, text, images, and software, is the property 
                of Huanqiu Precious Metal Trading Limited or its licensors. You may not reproduce, distribute, or 
                modify any content without our prior written consent.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to suspend or terminate access to our services at any time, without notice, 
                for conduct that violates these Terms and Conditions, infringes on others' rights, or is otherwise 
                unlawful or harmful.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Uganda. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts 
                of Kampala, Uganda.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may modify these Terms and Conditions at any time. Changes will be effective immediately upon 
                posting on this page. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about these Terms and Conditions, please contact us:
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