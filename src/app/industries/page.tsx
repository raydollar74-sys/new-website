'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Gem, 
  Factory, 
  Banknote, 
  Briefcase, 
  GraduationCap,
  Microscope,
  Building2,
  Trophy,
  Sparkles,
  ChevronRight,
  Shield,
  TrendingUp,
  Globe,
  Users,
  Clock,
  Award,
  Heart,
  Truck,
  FileCheck
} from 'lucide-react'

export default function IndustriesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const industries = [
    {
      id: 'jewelry',
      icon: Gem,
      title: 'Jewelry Manufacturing',
      description: 'Supplying high-purity gold and precious metals to jewelry manufacturers across East Africa and international markets.',
      features: [
        'High-purity gold (up to 99.9%)',
        'Consistent quality and supply',
        'Competitive pricing',
        'Flexible order quantities',
        'Certificate of authenticity'
      ],
      image: '/jewelry-manufacturing-process.jpg',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50'
    },
    {
      id: 'electronics',
      icon: Factory,
      title: 'Electronics & Technology',
      description: 'Providing precious metals essential for electronic components, circuit boards, and advanced technology manufacturing.',
      features: [
        'High-conductivity gold',
        'Industrial-grade purity',
        'Bulk supply capabilities',
        'Technical specifications',
        'Just-in-time delivery'
      ],
      image: '/1733294348920.jpg',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'investment',
      icon: Banknote,
      title: 'Investment & Banking',
      description: 'Supplying investment-grade gold bars and bullion to financial institutions, investment firms, and private investors.',
      features: [
        'LBMA-standard gold bars',
        'Investment-grade bullion',
        'Secure storage options',
        'Full documentation',
        'Competitive premiums'
      ],
      image: '/industry-investment.avif',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 'mining',
      icon: Briefcase,
      title: 'Mining Operations',
      description: 'Partnering with artisanal and small-scale mining operations to provide fair market access and trading services.',
      features: [
        'Direct market access',
        'Fair pricing guaranteed',
        'Quick payment processing',
        'Transparent weighing',
        'Capacity building support'
      ],
      image: '/industry-mining.jpg',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    },
    {
      id: 'research',
      icon: Microscope,
      title: 'Research & Education',
      description: 'Supplying precious metal samples and materials to universities, research institutions, and laboratories.',
      features: [
        'Research-grade samples',
        'Educational partnerships',
        'Custom specifications',
        'Documented provenance',
        'Competitive academic pricing'
      ],
      image: '/industry-research.jpg',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'government',
      icon: Building2,
      title: 'Government & Sovereign Entities',
      description: 'Partnering with government agencies and sovereign entities for strategic precious metal reserves and trading.',
      features: [
        'Strategic reserve supply',
        'Government-to-government trading',
        'Full compliance and transparency',
        'Secure logistics',
        'Long-term contracts'
      ],
      image: '/industry-government.jpg',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 'dental',
      icon: Trophy,
      title: 'Dental & Medical',
      description: 'Providing medical-grade precious metals for dental alloys, medical devices, and healthcare applications.',
      features: [
        'Medical-grade purity',
        'Biocompatible materials',
        'Regulatory compliance',
        'Batch traceability',
        'Quality certification'
      ],
      image: '/industry-dental.webp',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50'
    }
  ]

  const applications = [
    {
      industry: 'Jewelry',
      applications: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Watches', 'Custom designs'],
      icon: Gem
    },
    {
      industry: 'Electronics',
      applications: ['Circuit boards', 'Connectors', 'Switches', 'Semiconductors', 'Smartphones', 'Computers'],
      icon: Factory
    },
    {
      industry: 'Investment',
      applications: ['Gold bars', 'Bullion coins', 'Exchange-traded funds', 'Futures contracts', 'Physical holdings'],
      icon: Banknote
    }
  ]

  const caseStudies = [
    {
      title: 'Supporting Local Jewelers',
      description: 'Partnered with 15+ jewelry manufacturers across East Africa to provide consistent, high-purity gold supply.',
      impact: 'Increased production capacity by 40%',
      icon: Gem
    },
    {
      title: 'Electronics Manufacturing',
      description: 'Supplied industrial-grade gold to a major electronics manufacturer for circuit board production.',
      impact: 'Improved conductivity by 25%',
      icon: Factory
    },
    {
      title: 'Investment Portfolio',
      description: 'Helped investment firms build diversified precious metal portfolios with LBMA-standard gold.',
      impact: 'Portfolio value increased by 30%',
      icon: Banknote
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
            Industries We <span className="text-yellow-500">Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Providing high-quality precious metals to diverse industries across East Africa and global markets — 
            from jewelry manufacturing to electronics, investment, and beyond.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Key <span className="text-yellow-500">Sectors</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve a diverse range of industries, each with unique requirements for precious metal quality, purity, and supply.
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                ref={ref}
                // initial={{ opacity: 0, y: 50 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${industry.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                      <industry.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                    >
                      Inquire for {industry.title}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-20`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common <span className="text-yellow-500">Applications</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our precious metals are used in countless applications across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((item, index) => (
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.industry}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success <span className="text-yellow-500">Stories</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from our partnerships across different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{study.description}</p>
                <div className="flex items-center gap-2 text-yellow-600 font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>{study.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industries Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Industries <span className="text-yellow-500">Choose Us</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We deliver value beyond just precious metals — we provide reliability, transparency, and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Quality Assurance', description: 'Consistent purity and quality standards' },
              { icon: Truck, title: 'Reliable Supply', description: 'Dependable delivery schedules' },
              { icon: FileCheck, title: 'Full Documentation', description: 'Complete chain of custody' },
              { icon: Globe, title: 'Global Reach', description: 'Serving international markets' },
            ].map((item, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
            //   initial={{ opacity: 0, x: -50 }}
            //   animate={inView ? { opacity: 1, x: 0 } : {}}
            //   transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meeting Global <span className="text-yellow-500">Industry Standards</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our precious metals meet international quality standards required by various industries, 
                ensuring compatibility with global supply chains and regulatory requirements.
              </p>
              
              <div className="space-y-4">
                {[
                  { standard: 'LBMA Standards', description: 'Good delivery standards for gold bars' },
                  { standard: 'ISO 9001:2015', description: 'Quality management certification' },
                  { standard: 'OECD Due Diligence', description: 'Conflict-free sourcing compliance' },
                  { standard: 'Responsible Gold', description: 'Ethical sourcing guidelines' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.standard}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
            //   initial={{ opacity: 0, x: 50 }}
            //   animate={inView ? { opacity: 1, x: 0 } : {}}
            //   transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[400px]">
                  <Image
                    src="/gemstones1.webp"
                    alt="Industry Standards and Certifications"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold">Certified Quality Standards</p>
                  <p className="text-xs opacity-90">Meeting global industry requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Source Quality Precious Metals?
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Whatever industry you're in, we have the precious metal solutions you need. Let's discuss how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Contact Our Team
            </Link>
            <button 
              onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Request Industry Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}