'use client'

import Image from 'next/image'
import { Heart, Users, TrendingUp, HandshakeIcon, Award, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CommunityStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const impactStats = [
    { number: '500+', label: 'Families Supported', icon: Users },
    { number: '15+', label: 'Communities Reached', icon: Globe },
    { number: '100%', label: 'Fair Trade Certified', icon: Award },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Empowering Communities',
      description: 'We work directly with local miners, ensuring they receive fair compensation for their hard work.',
      color: 'text-red-500'
    },
    {
      icon: HandshakeIcon,
      title: 'Direct Trade',
      description: 'Connecting raw materials from miners directly to final consumers, eliminating middlemen exploitation.',
      color: 'text-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Livelihoods',
      description: 'Creating lasting economic opportunities that help families build better futures.',
      color: 'text-blue-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
              Our Mission & Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Lives Through
              <span className="text-yellow-500"> Ethical Gold Trading</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every piece of gold we trade tells a story of hope, dignity, and transformation.
              We're committed to empowering the communities that form the foundation of our business.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Gold We Trade Comes From the Heart of Our Communities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most of the gold we trade comes from poverty-stricken communities and remote villages 
                across East Africa. We believe that these communities deserve more than just a transaction — 
                they deserve a partnership that transforms their lives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through our ethical sourcing program, we work directly with local miners and their families, 
                providing them with fair compensation, education, and sustainable opportunities. We don't just 
                buy gold; we build relationships that last generations.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-gray-700 italic">
                  "Every miner we work with becomes part of our family. Their success is our success."
                </p>
                <p className="text-sm text-gray-500 mt-2">— Founder, Huanqiu Precious Metal</p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-4 shadow-md">
                  <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src="/images/5.jpeg"
                  alt="Gold miners in Ugandan community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay with story */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold mb-1">Local Gold Miners</p>
                <p className="text-xs opacity-90">Supporting sustainable livelihoods through ethical trade</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500 rounded-full opacity-10 blur-2xl" />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`${value.color} mb-4`}>
                  <value.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-yellow-500 rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-3">Join Our Mission</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Every purchase supports sustainable livelihoods for mining communities across East Africa.
              Choose ethically sourced gold that makes a difference.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              Learn About Our Impact
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}