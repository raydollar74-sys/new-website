'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Plane, 
  FileText, 
  Shield, 
  Globe, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Package,
  Truck,
  Award
} from 'lucide-react'

export default function InternationalExportPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const exportDestinations = [
    { region: 'Middle East', countries: 'UAE, Saudi Arabia', flag: '🇦🇪' },
    { region: 'Asia', countries: 'China, India, Singapore', flag: '🇨🇳' },
    { region: 'Europe', countries: 'Switzerland, UK, Germany', flag: '🇨🇭' },
    { region: 'North America', countries: 'USA, Canada', flag: '🇺🇸' }
  ]

  const documentation = [
    'Export Permit',
    'Certificate of Origin',
    'Customs Declaration',
    'Assay Certificate',
    'Commercial Invoice',
    'Packing List',
    'Bill of Lading',
    'Insurance Certificate'
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            International <span className="text-yellow-500">Export</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Professional gold export services connecting East African gold to buyers worldwide with full compliance and transparency.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Exporting East African Gold to <span className="text-yellow-500">Global Markets</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With extensive experience in international gold exports, we ensure that every shipment meets 
                the highest standards of quality, documentation, and compliance required by global markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From our hub in Kampala, we facilitate exports to major gold trading centers worldwide, 
                providing buyers with verified, high-purity gold backed by complete documentation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[400px]">
                  <Image
                    src="/international-export.jpg"
                    alt="International gold export"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Export Destinations</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportDestinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <span className="text-4xl mb-3 block">{dest.flag}</span>
                <h3 className="font-semibold text-gray-900">{dest.region}</h3>
                <p className="text-sm text-gray-500">{dest.countries}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Export Documentation</h2>
              <div className="grid grid-cols-2 gap-3">
                {documentation.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Export Process</h3>
              <div className="space-y-4">
                {[
                  'Gold verification and purity testing',
                  'Export permit application',
                  'Customs clearance',
                  'Secure packaging',
                  'Insured international shipping',
                  'Buyer verification and payment'
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-yellow-600 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Export?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your international gold export requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all">
            Export Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}