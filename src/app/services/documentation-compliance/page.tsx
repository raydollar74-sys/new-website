'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  Award, 
  Globe, 
  Clock,
  ArrowRight,
  FileCheck,
  PenTool,
  Printer
} from 'lucide-react'

export default function DocumentationCompliancePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const documents = [
    { name: 'Export Permit', description: 'Official authorization for gold export from Uganda' },
    { name: 'Certificate of Origin', description: 'Verifies the source country of the gold' },
    { name: 'Assay Certificate', description: 'Official document confirming gold purity' },
    { name: 'Customs Declaration', description: 'Required documentation for customs clearance' },
    { name: 'Commercial Invoice', description: 'Detailed transaction invoice' },
    { name: 'Packing List', description: 'Complete list of shipped items' },
    { name: 'Bill of Lading', description: 'Shipping contract and receipt' },
    { name: 'Insurance Certificate', description: 'Proof of cargo insurance coverage' }
  ]

  const complianceStandards = [
    { name: 'OECD Due Diligence', description: 'Conflict-free sourcing compliance' },
    { name: 'LBMA Standards', description: 'Good delivery standards' },
    { name: 'Uganda Mining Act', description: 'Local regulatory compliance' },
    { name: 'Customs Regulations', description: 'Import/export compliance' }
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
            Documentation & <span className="text-yellow-500">Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Complete documentation and regulatory compliance for every transaction, ensuring transparency, 
            legality, and peace of mind.
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
                Full Transparency Through <span className="text-yellow-500">Documentation</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every transaction we handle is backed by complete, verified documentation. From source to sale, 
                we ensure full traceability and compliance with all applicable regulations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our documentation process provides miners with official records of their sales and buyers with 
                verified proof of origin, purity, and legal compliance.
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
                    src="/documentation.png"
                    alt="Documentation and compliance"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents We Provide</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <FileCheck className="w-8 h-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold text-gray-900 text-sm">{doc.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{doc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{standard.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Documentation Support?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us handle all your documentation and compliance needs for worry-free trading.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all">
            Contact Our Compliance Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}