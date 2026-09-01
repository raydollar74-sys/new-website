'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Truck, 
  Shield, 
  MapPin, 
  Clock, 
  Package, 
  CheckCircle,
  ArrowRight,
  Lock,
  Satellite,
  Radar
} from 'lucide-react'

export default function SecureLogisticsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Armored Transport',
      description: 'Secure, armored vehicles for local transportation of precious metals.'
    },
    {
      icon: Satellite,
      title: 'GPS Tracking',
      description: 'Real-time tracking of all shipments with location monitoring.'
    },
    {
      icon: Radar,
      title: '24/7 Monitoring',
      description: 'Continuous surveillance throughout the logistics chain.'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance for all shipments against loss or damage.'
    }
  ]

  const logisticsSteps = [
    { step: '1', title: 'Collection', description: 'Secure pickup from miner or seller location' },
    { step: '2', title: 'Verification', description: 'Chain-of-custody documentation begins' },
    { step: '3', title: 'Packaging', description: 'Tamper-proof, secure packaging' },
    { step: '4', title: 'Transport', description: 'Armored vehicle with GPS tracking' },
    { step: '5', title: 'Storage', description: 'Vault storage with 24/7 security' },
    { step: '6', title: 'Delivery', description: 'Final delivery with signature verification' }
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
            Secure <span className="text-yellow-500">Logistics</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end secure transportation solutions for precious metals, ensuring safety, 
            integrity, and peace of mind from source to destination.
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
                Protecting Your <span className="text-yellow-500">Valuables</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Precious metals require specialized handling. Our secure logistics service ensures that 
                your gold is protected at every stage—from collection at the mine to delivery to the buyer.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With armored vehicles, GPS tracking, and 24/7 monitoring, we provide complete peace of mind. 
                Every shipment is fully insured, and chain-of-custody is documented at every transfer point.
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
                    src="/secure-logistics.jpg"
                    alt="Secure logistics"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Features</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Logistics Process</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logisticsSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-600 font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Secure Transport?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Trust our professional logistics team to handle your precious metals with the utmost security.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all">
            Request Logistics Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}