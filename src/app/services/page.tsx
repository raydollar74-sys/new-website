'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Pickaxe, 
  Truck, 
  Building2,
  Scale,
  FileCheck,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Award,
  HandshakeIcon,
  Settings,
  Package,
  Plane,
  FileText,
  Sparkles,
  ChevronRight
} from 'lucide-react'

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const mainServices = [
    {
      icon: Pickaxe,
      title: 'Ethical Gold Sourcing',
      description: 'We source high-quality gold directly from artisanal miners across Uganda, DRC, Tanzania, Rwanda, Burundi, and Kenya, ensuring fair prices and ethical practices.',
      features: [
        'Direct from artisanal miners',
        'Fair market pricing',
        'Multi-country sourcing network',
        'Conflict-free certification'
      ],
      color: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      icon: Truck,
      title: 'Cross-Border Trading',
      description: 'Facilitating legal cross-border gold trading across East Africa with full documentation and compliance with regional regulations.',
      features: [
        'Legal cross-border logistics',
        'Customs clearance support',
        'Regional compliance expertise',
        'Secure transportation'
      ],
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Globe,
      title: 'International Export',
      description: 'Connecting East African gold to global markets with professional export services, documentation, and international trade compliance.',
      features: [
        'International market access',
        'Export documentation',
        'Global buyer network',
        'Competitive pricing'
      ],
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Scale,
      title: 'Fair Trade Assurance',
      description: 'Ensuring transparent and fair pricing for miners while maintaining competitive rates for international buyers.',
      features: [
        'Transparent pricing model',
        'No exploitative middlemen',
        'Real-time market rates',
        'Fair compensation guaranteed'
      ],
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: FileCheck,
      title: 'Documentation & Compliance',
      description: 'Complete handling of all required documentation for legal gold trading, including export permits and certificates of origin.',
      features: [
        'Export permit processing',
        'Certificate of origin',
        'Customs documentation',
        'Regulatory compliance'
      ],
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Secure Logistics',
      description: 'End-to-end secure logistics solutions for precious metal transportation across borders with full chain-of-custody.',
      features: [
        'Armored transportation',
        'Chain-of-custody tracking',
        'Insurance coverage',
        'Real-time monitoring'
      ],
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ]

  const tradingProcess = [
    {
      step: '01',
      title: 'Sourcing',
      description: 'We source gold directly from artisanal miners across East Africa through our established network.',
      icon: Pickaxe
    },
    {
      step: '02',
      title: 'Verification',
      description: 'All gold is verified for quality, origin, and compliance with international standards.',
      icon: FileCheck
    },
    {
      step: '03',
      title: 'Documentation',
      description: 'Complete export documentation and compliance paperwork is prepared.',
      icon: FileText
    },
    {
      step: '04',
      title: 'Logistics',
      description: 'Secure transportation arranged with full chain-of-custody.',
      icon: Truck
    },
    {
      step: '05',
      title: 'Export',
      description: 'Gold is exported to international buyers with full transparency.',
      icon: Plane
    },
    {
      step: '06',
      title: 'Delivery',
      description: 'Final delivery to buyers with complete documentation and support.',
      icon: Package
    }
  ]

  const sourcingCountries = [
    { name: 'Uganda', flag: '🇺🇬', region: 'East Africa' },
    { name: 'DR Congo', flag: '🇨🇩', region: 'Central Africa' },
    { name: 'Tanzania', flag: '🇹🇿', region: 'East Africa' },
    { name: 'Rwanda', flag: '🇷🇼', region: 'East Africa' },
    { name: 'Burundi', flag: '🇧🇮', region: 'East Africa' },
    { name: 'Kenya', flag: '🇰🇪', region: 'East Africa' },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'For Miners',
      benefits: [
        'Fair market prices for your gold',
        'Direct access to international markets',
        'No exploitative middlemen',
        'Transparent weighing and valuation',
        'Quick payment processing'
      ]
    },
    {
      icon: Building2,
      title: 'For Buyers',
      benefits: [
        'High-quality East African gold',
        'Complete export documentation',
        'Competitive pricing',
        'Reliable supply chain',
        'Full chain-of-custody'
      ]
    },
    {
      icon: HandshakeIcon,
      title: 'For Investors',
      benefits: [
        'Investment-grade precious metals',
        'Transparent trading process',
        'Market expertise',
        'Risk mitigation strategies',
        'Portfolio diversification'
      ]
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
            Our <span className="text-yellow-500">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive precious metal trading services connecting East African miners to global markets 
            through ethical sourcing, fair trade, and transparent practices.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What <span className="text-yellow-500">We Offer</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end precious metal trading solutions tailored to meet the needs of miners, buyers, and investors across East Africa and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                ref={ref}
                // initial={{ opacity: 0, y: 30 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`${service.color} p-6`}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Countries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where We <span className="text-yellow-500">Source</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We source high-quality gold from artisanal miners across East and Central Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sourcingCountries.map((country, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, scale: 0.9 }}
                // animate={inView ? { opacity: 1, scale: 1 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-2 block">{country.flag}</span>
                <p className="font-semibold text-gray-900">{country.name}</p>
                <p className="text-xs text-gray-500">{country.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Trading <span className="text-yellow-500">Process</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent, step-by-step process designed to benefit everyone in the supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingProcess.map((step, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-lg">{step.step}</span>
                    </div>
                    <step.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < tradingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who <span className="text-yellow-500">Benefits</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our services are designed to create value for everyone in the precious metals supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              // initial={{ opacity: 0, x: -50 }}
              // animate={inView ? { opacity: 1, x: 0 } : {}}
              // transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-yellow-500">Huanqiu Precious Metal</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We stand out as a trusted partner in the precious metals trading industry through our 
                commitment to ethics, transparency, and mutual success.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Award, title: 'Industry Expertise', description: 'Years of experience in East African gold trading' },
                  { icon: Shield, title: 'Full Compliance', description: 'Licensed and regulated under Ugandan law' },
                  { icon: Users, title: 'Strong Network', description: 'Established relationships with miners and buyers' },
                  { icon: Clock, title: 'Fast Turnaround', description: 'Efficient processing and delivery times' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              // initial={{ opacity: 0, x: 50 }}
              // animate={inView ? { opacity: 1, x: 0 } : {}}
              // transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[400px]">
                  <Image
                    src="/gold1.jpg"
                    alt="Huanqiu Precious Metal Trading Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold">Professional Trading Services</p>
                  <p className="text-xs opacity-90">Ethical sourcing from East Africa to global markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Quality Commitment</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Every transaction we handle is backed by our commitment to quality, transparency, and ethical practices. 
              We ensure that all gold we trade is properly documented, conflict-free, and sourced from legitimate 
              artisanal mining operations across East Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">100%</div>
                <div className="text-xs text-gray-400">Ethically Sourced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">24/48h</div>
                <div className="text-xs text-gray-400">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">10+</div>
                <div className="text-xs text-gray-400">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Whether you're a miner looking for fair prices or a buyer seeking quality East African gold, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Contact Our Trading Team
            </Link>
            <button 
              onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Request Trading Information
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}