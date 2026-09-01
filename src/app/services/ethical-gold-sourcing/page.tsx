'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Users, 
  Globe, 
  Shield, 
  Award, 
  HandshakeIcon,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp,
  Leaf
} from 'lucide-react'

export default function EthicalGoldSourcingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const principles = [
    {
      icon: Heart,
      title: 'Fair Compensation',
      description: 'Miners receive 30-40% more than traditional market rates, ensuring they can support their families and invest in their communities.'
    },
    {
      icon: Shield,
      title: 'Conflict-Free Sourcing',
      description: 'We strictly adhere to OECD Due Diligence guidelines, ensuring all gold is sourced from conflict-free zones.'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Direct partnerships with mining communities create sustainable livelihoods and economic opportunities.'
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Promoting mercury-free processing and sustainable mining practices to protect the environment.'
    }
  ]

  const sourcingCountries = [
    { country: 'Uganda', regions: ['Karamoja', 'Busia', 'Mubende'], flag: '🇺🇬' },
    { country: 'DR Congo', regions: ['Ituri', 'North Kivu', 'South Kivu'], flag: '🇨🇩' },
    { country: 'Tanzania', regions: ['Geita', 'Lake Victoria Belt'], flag: '🇹🇿' },
    { country: 'Rwanda', regions: ['Western Province'], flag: '🇷🇼' },
    { country: 'Burundi', regions: ['Cibitoke', 'Kayanza'], flag: '🇧🇮' },
    { country: 'Kenya', regions: ['Kakamega', 'Migori'], flag: '🇰🇪' }
  ]

  const impactStats = [
    { value: '500+', label: 'Families Supported', icon: Users },
    { value: '30-40%', label: 'Higher Income', icon: TrendingUp },
    { value: '15+', label: 'Communities Reached', icon: MapPin },
    { value: '100%', label: 'Conflict-Free', icon: Shield }
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
            Ethical <span className="text-yellow-500">Gold Sourcing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Sourcing gold responsibly from artisanal miners across East Africa, ensuring fair compensation, 
            community empowerment, and environmental stewardship.
          </p>
        </div>
      </section>

      {/* Overview Section */}
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
                Sourcing with <span className="text-yellow-500">Integrity</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Huanqiu Precious Metal, ethical sourcing is not just a policy—it's our foundation. 
                We work directly with artisanal miners across East Africa, eliminating exploitative middlemen 
                and ensuring fair compensation for every gram of gold we trade.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to ethical sourcing means we visit mining communities, build lasting relationships, 
                and provide miners with access to fair international markets. We believe that the gold trade 
                should uplift communities, not exploit them.
              </p>
              <div className="flex items-center gap-4">
                <Award className="w-12 h-12 text-yellow-500" />
                <div>
                  <p className="font-semibold text-gray-900">OECD Due Diligence Compliant</p>
                  <p className="text-sm text-gray-500">Fully compliant with international ethical sourcing standards</p>
                </div>
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
                    src="/ethical-sourcing.jpg"
                    alt="Ethical gold sourcing in East Africa"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sourcing Principles</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Regions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Source</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with artisanal miners across East Africa, bringing their gold to global markets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingCountries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{country.country}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {country.regions.map((region, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white rounded-full text-xs text-gray-600">
                      {region}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-yellow-600">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Us Ethically</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a miner seeking fair prices or a buyer looking for ethically sourced gold, we're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Contact Our Sourcing Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}