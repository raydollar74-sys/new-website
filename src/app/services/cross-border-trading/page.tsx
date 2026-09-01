'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe, 
  Truck, 
  FileText, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  MapPin,
  TrendingUp,
  Users
} from 'lucide-react'

export default function CrossBorderTradingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tradingCorridors = [
    { from: 'Uganda', to: 'International Markets', volume: 'High', flag: '🇺🇬' },
    { from: 'DR Congo', to: 'Uganda Hub', volume: 'Very High', flag: '🇨🇩' },
    { from: 'Tanzania', to: 'Uganda Hub', volume: 'High', flag: '🇹🇿' },
    { from: 'Rwanda', to: 'Uganda Hub', volume: 'Medium', flag: '🇷🇼' },
    { from: 'Burundi', to: 'Uganda Hub', volume: 'Medium', flag: '🇧🇮' },
    { from: 'Kenya', to: 'Uganda Hub', volume: 'Medium', flag: '🇰🇪' }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Full Compliance',
      description: 'All cross-border trades comply with regional and international regulations.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Efficient documentation and customs clearance for quick turnaround.'
    },
    {
      icon: Truck,
      title: 'Secure Logistics',
      description: 'End-to-end secure transportation across borders.'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'All necessary permits, certificates, and customs paperwork handled.'
    }
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
            Cross-Border <span className="text-yellow-500">Trading</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Facilitating legal, transparent, and efficient gold trading across East African borders, 
            connecting regional miners to global markets.
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
                Connecting East Africa to <span className="text-yellow-500">Global Markets</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As a strategic hub in Kampala, Uganda, we facilitate cross-border gold trading across East Africa. 
                Our deep understanding of regional regulations, customs procedures, and market dynamics ensures 
                smooth, legal, and efficient trade flows.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We work with miners and traders from Uganda, DRC, Tanzania, Rwanda, Burundi, and Kenya, 
                providing a centralized platform for gold aggregation, documentation, and export.
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
                    src="/cross-border-trading.jpg"
                    alt="Cross-border gold trading"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trading Corridors</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingCorridors.map((corridor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{corridor.flag}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{corridor.from}</p>
                    <p className="text-sm text-gray-500">→ {corridor.to}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Trading Volume</span>
                  <span className="text-sm font-semibold text-yellow-600">{corridor.volume}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Cross-Border Trading?</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Trade Across Borders?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you navigate cross-border gold trading with ease and compliance.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all">
            Start Trading
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}