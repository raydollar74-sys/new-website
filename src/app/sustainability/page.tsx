'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Leaf,
  Heart,
  Users,
  TreePine,
  Droplets,
  Recycle,
  School,
  Stethoscope,
  Droplet,
  HandshakeIcon,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Factory,
  Sun,
  Wind,
  Package,
  Sparkles,
  ChevronRight
} from 'lucide-react'

export default function SustainabilityPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sustainabilityPillars = [
    {
      icon: Heart,
      title: 'Social Responsibility',
      description: 'Empowering mining communities through fair wages, education, and healthcare support.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      stats: [
        { value: '500+', label: 'Families Supported' },
        { value: '15+', label: 'Communities Reached' },
        { value: '30-40%', label: 'Higher Income for Miners' }
      ]
    },
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'Promoting sustainable mining practices and minimizing environmental impact.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      stats: [
        { value: '100%', label: 'Mercury-Free Methods' },
        { value: '50+', label: 'Trees Planted' },
        { value: '5+', label: 'Rehabilitated Sites' }
      ]
    },
    {
      icon: Users,
      title: 'Economic Empowerment',
      description: 'Creating sustainable economic opportunities that break the cycle of poverty.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      stats: [
        { value: '27+', label: 'Active Partners' },
        { value: '100%', label: 'Fair Trade Certified' },
        { value: '3+', label: 'Years of Impact' }
      ]
    }
  ]

  const communityInitiatives = [
    {
      icon: School,
      title: 'Education Support',
      description: 'Providing school supplies, scholarships, and educational infrastructure to mining communities.',
      impact: '150+ children sponsored',
      image: '/shutterstock_242705758_1.jpg'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Access',
      description: 'Mobile health clinics and medical supplies for remote mining communities.',
      impact: '1,000+ patients treated annually',
      image: '/shutterstock_242389561.webp'
    },
    {
      icon: Droplet,
      title: 'Clean Water Projects',
      description: 'Installing water wells and filtration systems in mining villages.',
      impact: '5 clean water sources installed',
      image: '/D200-0913-105.jpg'
    },
    {
      icon: TreePine,
      title: 'Reforestation',
      description: 'Restoring land impacted by mining through tree planting and soil rehabilitation.',
      impact: '500+ trees planted',
      image: '/young-pine-forest.jpg.webp'
    }
  ]

  const ethicalPractices = [
    {
      icon: Shield,
      title: 'Conflict-Free Sourcing',
      description: 'We ensure all gold is sourced from conflict-free zones and complies with OECD due diligence guidelines.',
      verification: 'OECD Compliant'
    },
    {
      icon: HandshakeIcon,
      title: 'Direct Trade Model',
      description: 'Eliminating exploitative middlemen by working directly with artisanal miners.',
      verification: '30-40% higher income'
    },
    {
      icon: Award,
      title: 'Fair Pricing',
      description: 'Transparent pricing based on international market rates with no hidden fees.',
      verification: '100% transparent'
    },
    {
      icon: Globe,
      title: 'Responsible Export',
      description: 'Full documentation and compliance with international trade regulations.',
      verification: 'Fully compliant'
    }
  ]

  const environmentalPractices = [
    {
      icon: Recycle,
      title: 'Mercury-Free Processing',
      description: 'Promoting and supporting mercury-free gold processing techniques to protect miners and the environment.',
      impact: '100% mercury-free'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Implementing water recycling systems and reducing water usage in processing.',
      impact: '40% water reduction'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Transitioning operations to solar and renewable energy sources.',
      impact: '30% renewable energy'
    },
    {
      icon: Factory,
      title: 'Responsible Waste Management',
      description: 'Proper disposal and recycling of mining waste and byproducts.',
      impact: 'Zero waste policy'
    }
  ]

  const sdgGoals = [
    { goal: '1', title: 'No Poverty', icon: '🎯', description: 'Supporting families to break poverty cycle' },
    { goal: '4', title: 'Quality Education', icon: '📚', description: 'Building schools and sponsoring children' },
    { goal: '5', title: 'Gender Equality', icon: '♀️', description: 'Empowering women miners' },
    { goal: '8', title: 'Decent Work', icon: '💼', description: 'Fair wages and safe conditions' },
    { goal: '12', title: 'Responsible Consumption', icon: '♻️', description: 'Ethical sourcing practices' },
    { goal: '13', title: 'Climate Action', icon: '🌍', description: 'Environmental protection' }
  ]

  const annualImpact = [
    { year: '2023', impact: 'Supported 200+ families, planted 200 trees, provided healthcare to 500+ patients' },
    { year: '2024', impact: 'Reached 300+ families, expanded to 5 new communities, installed 3 water wells' },
    { year: '2025', impact: 'Target: 500+ families, 10 new communities, 1000+ trees planted' }
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
            Sustainability & <span className="text-yellow-500">Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Building a better future for mining communities across East Africa through ethical practices, 
            environmental stewardship, and lasting economic empowerment.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to <span className="text-yellow-500">Sustainability</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Huanqiu Precious Metal, we believe that responsible business means creating positive change 
              for people and the planet. Our sustainability framework is built on three core pillars.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sustainabilityPillars.map((pillar, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${pillar.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  {pillar.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{stat.label}</span>
                      <span className="font-bold text-gray-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community <span className="text-yellow-500">Initiatives</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond fair trade, we invest in programs that create lasting positive change in mining communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <initiative.icon className="w-8 h-8 mb-1" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                  <p className="text-gray-600 mb-3">{initiative.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-yellow-600 font-semibold">{initiative.impact}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ethical <span className="text-yellow-500">Practices</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to ethical sourcing and fair trade is at the heart of everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethicalPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <practice.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{practice.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{practice.description}</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  {practice.verification}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Practices */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Environmental <span className="text-yellow-500">Stewardship</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protecting the environment while supporting sustainable mining practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <practice.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{practice.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{practice.description}</p>
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                  <Leaf className="w-4 h-4" />
                  <span>{practice.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Aligned with <span className="text-yellow-500">UN SDGs</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our sustainability efforts directly contribute to the United Nations Sustainable Development Goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sdgGoals.map((sdg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{sdg.icon}</div>
                <div className="text-sm font-bold text-yellow-600 mb-1">SDG {sdg.goal}</div>
                <p className="text-xs font-semibold text-gray-800">{sdg.title}</p>
                <p className="text-xs text-gray-500 mt-1">{sdg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Impact Report */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-yellow-500">Impact Journey</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tracking our progress and commitment to creating positive change year after year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {annualImpact.map((year, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="text-3xl font-bold text-yellow-500 mb-3">{year.year}</div>
                <p className="text-gray-300 text-sm">{year.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Voices from the <span className="text-yellow-500">Community</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Before Huanqiu, I struggled to feed my children. Now I earn a fair wage and can send them to school. This partnership changed our lives.",
                name: "Sarah Namukasa",
                role: "Artisanal Miner, Uganda",
                image: "/testimonial-sarah.jpg"
              },
              {
                quote: "We used to sell to middlemen who cheated us. Now we have dignity, fair prices, and our whole community is thriving.",
                name: "James Okello",
                role: "Community Mining Leader, Uganda",
                image: "/testimonial-james.jpg"
              },
              {
                quote: "The clean water well they installed has transformed our village. Our children no longer get sick from contaminated water.",
                name: "Grace Achieng",
                role: "Community Member, DRC",
                image: "/testimonial-grace.jpg"
              },
              {
                quote: "Through their education program, my daughter is now the first in our family to attend secondary school.",
                name: "John Mwangi",
                role: "Miner, Tanzania",
                image: "/testimonial-john.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Us in Creating Sustainable Change
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Whether you're a partner, buyer, or supporter — together we can build a more sustainable 
            and equitable precious metals industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Partner With Us
            </Link>
            <button 
              onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Learn About Our Impact
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}