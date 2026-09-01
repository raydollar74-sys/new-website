'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Pickaxe, Droplets, Hammer, Heart, Shield, TrendingUp, Users, Award, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function LocalMiningStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const miningSteps = [
    {
      step: '01',
      title: 'Artisanal Excavation',
      description: 'Local miners dig deep into the earth using traditional tools — picks, shovels, and their own hands. Each hole tells a story of dedication and hope.',
      icon: Pickaxe,
    },
    {
      step: '02',
      title: 'Ore Collection & Washing',
      description: 'Gold-bearing ore is carefully collected and washed in nearby streams. The rhythmic motion of washing pans separates heavier gold particles from lighter materials.',
      icon: Droplets,
    },
    {
      step: '03',
      title: 'Crushing & Processing',
      description: 'Using hammers and manual crushers, miners break down rocks to release precious gold particles. This labor-intensive process requires skill and patience.',
      icon: Hammer,
    },
    {
      step: '04',
      title: 'Fair Trade Collection',
      description: 'We collect the processed gold directly from miners, ensuring they receive fair compensation without exploitative middlemen.',
      icon: Heart,
    }
  ]

  const minerStories = [
    {
      name: 'Sarah Namukasa',
      role: 'Artisanal Miner, 8 years',
      story: 'Before working with Huanqiu, I struggled to feed my three children. Now, I earn a fair wage and can send them to school. This partnership changed our lives.',
    },
    {
      name: 'James Okello',
      role: 'Community Mining Leader',
      story: 'We used to sell to middlemen who cheated us. Now we have dignity, fair prices, and our whole community is thriving. Huanqiu treats us like family.',
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-semibold mb-4 border border-yellow-500/30">
            The Journey of Gold
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From the Earth,{' '}
            <span className="text-yellow-500">With Their Hands</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every ounce of gold begins its journey in the hands of hardworking local miners, 
            using traditional methods passed down through generations. This is their story.
          </p>
        </motion.div>

        {/* Video Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 group"
        >
          <div className="relative h-[500px] md:h-[600px]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/mining-poster.jpg"
            >
              <source src="/images/9.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Video Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={togglePlay}
                className="bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleMute}
                className="bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm font-semibold mb-1">Artisanal Gold Mining in Rural Areas</p>
              <p className="text-xs opacity-90 max-w-2xl">
                Watch as local miners work from dawn to dusk, using traditional methods that have been practiced for generations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              The Heartbeat of Our Gold
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                In the rolling hills of rural areas, before the sun paints the sky with orange and gold, 
                miners begin their daily journey. Armed with picks, shovels, and generations of knowledge, 
                they descend into pits carved by hand — some as deep as 30 meters into the earth.
              </p>
              <p>
                This is not industrial mining with heavy machinery. This is artisanal mining at its purest — 
                where every stone is turned by hand, every bucket of earth is hauled with muscle and sweat, 
                and every speck of gold is earned through sheer determination.
              </p>
              <p>
                Women and men work side by side, their hands calloused from years of labor. They know the 
                earth intimately — understanding which layers hold promise, which streams carry traces of gold, 
                and which rocks might hide precious particles within.
              </p>
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-gray-300 italic">
                  "This gold comes from the sweat of honest labor. Each speck tells a story of a family's hope, 
                  a child's education, a dream for a better tomorrow."
                </p>
                <p className="text-sm text-gray-400 mt-2">— Local Mining Elder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">The Traditional Process</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">1.</span>
                  <span className="text-gray-300">Excavation: Miners dig vertical pits using hand tools, reinforcing walls with timber.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">2.</span>
                  <span className="text-gray-300">Ore Extraction: Gold-bearing ore is carefully extracted and sorted by hand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">3.</span>
                  <span className="text-gray-300">Crushing: Rocks are manually crushed using hammers to release gold particles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">4.</span>
                  <span className="text-gray-300">Washing: The crushed material is washed in streams, where gold settles due to its weight.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">5.</span>
                  <span className="text-gray-300">Collection: Fine gold particles are collected using mercury-free methods.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-yellow-500">5-10m</div>
                <div className="text-xs text-gray-400">Average pit depth</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-yellow-500">8-10 hrs</div>
                <div className="text-xs text-gray-400">Daily work hours</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-yellow-500">15+</div>
                <div className="text-xs text-gray-400">Generations of knowledge</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-yellow-500">100%</div>
                <div className="text-xs text-gray-400">Hand-processed gold</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mining Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            From Earth to Market: The Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miningSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition">
                    <step.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="text-sm font-bold text-yellow-500 mb-2">{step.step}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                {index < miningSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gray-700"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Miners' Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Voices from the Community
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {minerStories.map((miner, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{miner.name}</h4>
                    <p className="text-sm text-gray-400">{miner.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{miner.story}"</p>
                <div className="mt-4 flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impact & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Ethical Sourcing</h4>
              <p className="text-sm text-gray-400">Direct trade with miners ensures fair compensation</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Sustainable Livelihoods</h4>
              <p className="text-sm text-gray-400">Empowering communities through fair wages</p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Traditional Methods</h4>
              <p className="text-sm text-gray-400">Preserving heritage while ensuring quality</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            When you choose our gold, you're not just purchasing a precious metal — you're honoring 
            the hands that unearthed it, supporting families, and investing in communities that have 
            been mining for generations.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
            Support Ethical Mining
          </button>
        </motion.div>
      </div>
    </section>
  )
}