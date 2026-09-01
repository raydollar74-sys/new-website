'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Lock, 
  Clock, 
  CheckCircle, 
  Award, 
  Users, 
  Globe, 
  Heart,
  Pickaxe,
  TrendingUp,
  HandshakeIcon,
  Target,
  Sparkles,
  BarChart3,
  Truck,
  Building2,
  MapPin
} from 'lucide-react'

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Shield,
      title: 'Fully Licensed & Regulated',
      description: 'Licensed under Uganda\'s Ministry of Energy and Mineral Development for precious metals trading across East Africa.',
    },
    {
      icon: Lock,
      title: 'Secure & Transparent',
      description: 'Strict chain-of-custody and full transparency for all cross-border transactions and trades.',
    },
    {
      icon: Clock,
      title: 'Fast & Reliable Service',
      description: 'Quick turnaround times for sourcing, trading, and delivering precious metals across borders.',
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Empowering Communities',
      description: 'We source directly from local miners across East Africa, ensuring they receive fair compensation for their hard work.',
    },
    {
      icon: HandshakeIcon,
      title: 'Direct Trade Model',
      description: 'Connecting raw materials from miners directly to final consumers across multiple countries, eliminating exploitative middlemen.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Livelihoods',
      description: 'Creating lasting economic opportunities across borders that help families build better futures.',
    }
  ]

  const stats = [
    { value: '500+', label: 'Tons Traded Annually', icon: '📦' },
    { value: '10+', label: 'Countries Served', icon: '🌍' },
    { value: '3+', label: 'Years of Excellence', icon: '📅' },
    { value: '27+', label: 'Active Partners', icon: '🤝' },
    { value: '500+', label: 'Families Supported', icon: '👨‍👩‍👧‍👦' },
    { value: '15+', label: 'Communities Reached', icon: '🏘️' },
  ]

  const sourcingCountries = [
    { name: 'Uganda', flag: '🇺🇬', description: 'Gold-rich regions in Karamoja, Busia, and Mubende' },
    { name: 'DR Congo', flag: '🇨🇩', description: 'Ituri, North Kivu, and South Kivu regions' },
    { name: 'Tanzania', flag: '🇹🇿', description: 'Lake Victoria gold belt and Geita region' },
    { name: 'Rwanda', flag: '🇷🇼', description: 'Emerging gold mining districts' },
    { name: 'Burundi', flag: '🇧🇮', description: 'Artisanal mining communities' },
    { name: 'Kenya', flag: '🇰🇪', description: 'Western Kenya gold belt' },
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
            About <span className="text-yellow-500">Huanqiu Precious Metal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A leading precious metal trading company based in Kampala, Uganda — connecting miners across 
            East Africa to global markets through ethical sourcing, fair trade, and transparent practices.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Connecting East Africa's Gold
                <br />
                <span className="text-yellow-500">to the World</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Huanqiu Precious Metal is a premier precious metal trading company based in Kampala, Uganda. 
                We specialize in the ethical sourcing, trading, and export of high-quality gold and precious 
                metals from across East Africa — including the Democratic Republic of Congo, Uganda, Tanzania, 
                Rwanda, Burundi, and Kenya — to global markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unlike traditional trading companies, we work directly with artisanal miners and local 
                communities across multiple countries — eliminating exploitative middlemen and ensuring fair 
                compensation for every gram of gold we trade, regardless of its origin.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Multi-Country Sourcing', 'Ethical Trading', 'Export Services', 'Market Access'].map((item) => (
                  <span key={item} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {item}
                  </span>
                ))}
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
                    src="/images/3.jpeg"
                    alt="Huanqiu Precious Metal Trading Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sourcing Countries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where We <span className="text-yellow-500">Source Our Gold</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our gold comes from multiple countries across East Africa, each with rich mining traditions and high-quality deposits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingCountries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{country.flag}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{country.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{country.description}</p>
                <div className="mt-3 flex items-center gap-1 text-yellow-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs text-gray-500">Active sourcing region</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-yellow-50 rounded-xl p-6 text-center"
          >
            <Globe className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <p className="text-gray-700">
              We are actively expanding our sourcing network across East Africa, partnering with artisanal miners 
              and cooperatives in all major gold-producing regions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As a trusted precious metal trading company, we bridge the gap between miners across East Africa and international buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pickaxe className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Country Sourcing</h3>
              <p className="text-gray-600">
                We source gold directly from artisanal miners across Uganda, DRC, Tanzania, Rwanda, Burundi, and Kenya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-Border Trading</h3>
              <p className="text-gray-600">
                We facilitate legal cross-border gold trading, handling logistics, documentation, and international export.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Access</h3>
              <p className="text-gray-600">
                We provide miners across East Africa with access to fair international markets, maximizing returns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Huanqiu Precious Metal</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every statistic is a story of transformation, growth, and community empowerment across East Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-1">{stat.value}</div>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We believe that the true value of precious metals lies not just in their market price, 
              but in the lives they touch across borders. That's why we've made it our mission to trade ethically, 
              support mining communities throughout East Africa, and connect regional resources to global markets 
              with transparency and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Trade Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We <span className="text-yellow-500">Trade</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our cross-border trading process is transparent, fair, and designed to benefit everyone in the supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Regional Sourcing', description: 'We source gold directly from artisanal miners across East Africa.', icon: '🤝' },
              { step: '02', title: 'Fair Pricing', description: 'We pay fair market prices, eliminating exploitative middlemen.', icon: '💰' },
              { step: '03', title: 'Secure Logistics', description: 'We handle secure cross-border transportation and export documentation.', icon: '📦' },
              { step: '04', title: 'Global Delivery', description: 'We deliver to international buyers with full transparency.', icon: '🌍' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-700 font-bold text-lg">{item.step}</span>
                </div>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Empowering{' '}
                <span className="text-yellow-500">Mining Communities Across East Africa</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The gold we trade comes from the hands of hardworking men and women in poverty-stricken 
                communities across Uganda, the Democratic Republic of Congo, Tanzania, and beyond. These are not 
                just miners — they are mothers, fathers, and dreamers working to build better lives for their families.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Through our ethical trading model, we work directly with local miners across borders, providing them with 
                fair compensation, education, and sustainable opportunities. We don't just buy gold; we build 
                relationships that last generations — regardless of which country it comes from.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-gray-700 italic">
                  "Every miner we work with, whether in Uganda, DRC, or Tanzania, becomes part of our trading family. 
                  Their success is our success, and their dreams are our mission."
                </p>
                <p className="text-sm text-gray-500 mt-2">— Management, Huanqiu Precious Metal</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/4.jpeg"
                    alt="Local gold miners across East Africa"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-semibold">Artisanal mining communities across East Africa</p>
                  <p className="text-xs opacity-90">Supporting over 500 families through ethical cross-border trade</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trading Partners</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with trusted partners across the East African precious metals supply chain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Local Miners (East Africa)', icon: '⛏️', color: 'bg-amber-100' },
              { name: 'Export Partners', icon: '✈️', color: 'bg-blue-100' },
              { name: 'International Buyers', icon: '🌍', color: 'bg-green-100' },
              { name: 'Logistics Providers', icon: '🚚', color: 'bg-purple-100' },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${partner.color} rounded-xl p-6 text-center hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-2">{partner.icon}</div>
                <p className="font-semibold text-gray-800">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With a Trusted Precious Metal Trading Company?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a miner in Uganda, DRC, Tanzania, or an international buyer — we're here to facilitate 
            fair, transparent, and profitable cross-border trades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Partner With Us
            </Link>
            <button 
              onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Inquire About Trading
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}