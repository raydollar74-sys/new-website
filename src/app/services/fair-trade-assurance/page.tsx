'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Scale, 
  Heart, 
  HandshakeIcon, 
  TrendingUp, 
  Shield, 
  Award,
  ArrowRight,
  CheckCircle,
  Users,
  Globe
} from 'lucide-react'

export default function FairTradeAssurancePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const commitments = [
    {
      icon: Scale,
      title: 'Transparent Pricing',
      description: 'Real-time international market rates with no hidden fees or deductions.'
    },
    {
      icon: Heart,
      title: 'Dignity & Respect',
      description: 'Every miner is treated as a valued partner, not just a supplier.'
    },
    {
      icon: TrendingUp,
      title: 'Premium Payments',
      description: 'Miners receive 30-40% more than traditional market rates.'
    },
    {
      icon: HandshakeIcon,
      title: 'Direct Relationships',
      description: 'No middlemen—we work directly with mining communities.'
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
            Fair Trade <span className="text-yellow-500">Assurance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to fair trade ensures that every miner receives fair compensation, 
            dignity, and respect for their hard work.
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
                Trading with <span className="text-yellow-500">Integrity</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fair trade is at the heart of everything we do. We believe that miners deserve 
                fair compensation, safe working conditions, and respect for their contribution 
                to the global gold supply chain.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our direct trade model eliminates exploitative middlemen, ensuring that miners 
                receive 30-40% more than traditional market rates. This extra income transforms 
                lives—providing education for children, healthcare for families, and hope for communities.
              </p>
              <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-500">
                <p className="text-gray-700 italic text-sm">
                  "Every transaction is built on trust, transparency, and mutual respect. 
                  When miners thrive, our entire industry thrives."
                </p>
                <p className="text-xs text-gray-500 mt-2">— Huanqiu Precious Metal</p>
              </div>
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
                    src="/fair-trade.jpg"
                    alt="Fair trade gold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fair Trade Commitments</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <commitment.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{commitment.title}</h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">💰</div>
              <div className="text-2xl font-bold text-yellow-600">30-40%</div>
              <p className="text-sm text-gray-600">Higher Income for Miners</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
              <div className="text-2xl font-bold text-yellow-600">500+</div>
              <p className="text-sm text-gray-600">Families Supported</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏘️</div>
              <div className="text-2xl font-bold text-yellow-600">15+</div>
              <p className="text-sm text-gray-600">Communities Reached</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Choose Fair Trade Gold</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Your choice makes a difference. Support ethical mining communities by choosing fair trade gold.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all">
            Partner with Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}