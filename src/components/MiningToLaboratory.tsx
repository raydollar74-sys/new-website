'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Pickaxe, FlaskConical } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MiningToLaboratory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Mining Pit Video Controls
  const pitVideoRef = useRef<HTMLVideoElement>(null)
  const [isPitPlaying, setIsPitPlaying] = useState(true)
  const [isPitMuted, setIsPitMuted] = useState(true)
  const [isPitFullscreen, setIsPitFullscreen] = useState(false)

  // Laboratory Video Controls
  const labVideoRef = useRef<HTMLVideoElement>(null)
  const [isLabPlaying, setIsLabPlaying] = useState(true)
  const [isLabMuted, setIsLabMuted] = useState(true)
  const [isLabFullscreen, setIsLabFullscreen] = useState(false)

  const togglePitPlay = () => {
    if (pitVideoRef.current) {
      if (isPitPlaying) {
        pitVideoRef.current.pause()
      } else {
        pitVideoRef.current.play()
      }
      setIsPitPlaying(!isPitPlaying)
    }
  }

  const togglePitMute = () => {
    if (pitVideoRef.current) {
      pitVideoRef.current.muted = !isPitMuted
      setIsPitMuted(!isPitMuted)
    }
  }

  const togglePitFullscreen = () => {
    if (pitVideoRef.current) {
      if (!isPitFullscreen) {
        pitVideoRef.current.requestFullscreen()
        setIsPitFullscreen(true)
      } else {
        document.exitFullscreen()
        setIsPitFullscreen(false)
      }
    }
  }

  const toggleLabPlay = () => {
    if (labVideoRef.current) {
      if (isLabPlaying) {
        labVideoRef.current.pause()
      } else {
        labVideoRef.current.play()
      }
      setIsLabPlaying(!isLabPlaying)
    }
  }

  const toggleLabMute = () => {
    if (labVideoRef.current) {
      labVideoRef.current.muted = !isLabMuted
      setIsLabMuted(!isLabMuted)
    }
  }

  const toggleLabFullscreen = () => {
    if (labVideoRef.current) {
      if (!isLabFullscreen) {
        labVideoRef.current.requestFullscreen()
        setIsLabFullscreen(true)
      } else {
        document.exitFullscreen()
        setIsLabFullscreen(false)
      }
    }
  }

  // Listen for fullscreen change events
  if (typeof window !== 'undefined') {
    document.addEventListener('fullscreenchange', () => {
      setIsPitFullscreen(!!document.fullscreenElement)
      setIsLabFullscreen(!!document.fullscreenElement)
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-700 text-sm font-semibold mb-4 border border-yellow-500/30">
            From Earth to Pure Gold
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Complete Journey of{' '}
            <span className="text-yellow-600">African Gold</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the transformation from raw earth to refined precious metal. 
            Watch our miners extract gold from deep pits, then follow it to our 
            state-of-the-art laboratory where it's smelted into pure gold.
          </p>
        </motion.div>

        {/* Two Column Video Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Mining Pit Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[450px]">
                <video
                  ref={pitVideoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/mining-pit-poster.jpg"
                >
                  <source src="/images/10.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
                
                {/* Video Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={togglePitPlay}
                    className="bg-amber-900/80 hover:bg-amber-800 backdrop-blur-sm text-white p-2 rounded-full transition-all"
                    aria-label={isPitPlaying ? 'Pause' : 'Play'}
                  >
                    {isPitPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={togglePitMute}
                    className="bg-amber-900/80 hover:bg-amber-800 backdrop-blur-sm text-white p-2 rounded-full transition-all"
                    aria-label={isPitMuted ? 'Unmute' : 'Mute'}
                  >
                    {isPitMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={togglePitFullscreen}
                    className="bg-amber-900/80 hover:bg-amber-800 backdrop-blur-sm text-white p-2 rounded-full transition-all"
                    aria-label="Fullscreen"
                  >
                    {isPitFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-amber-900/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <Pickaxe className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-white font-medium">Step 1: Extraction</span>
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold mb-1">Artisanal Gold Mining Pit</p>
                  <p className="text-xs opacity-90">Miners extracting gold-bearing ore from deep earth using traditional methods</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Extraction Pit</h3>
              <p className="text-gray-600 text-sm">
                Deep in the heart of rural areas, miners work tirelessly, digging up to 30 meters 
                below ground to extract gold-bearing ore. Using traditional tools passed down through 
                generations, they carefully excavate the earth, preserving the integrity of the mineral.
              </p>
            </div>
          </motion.div>

          {/* Laboratory Smelting Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[450px]">
                <video
                  ref={labVideoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/laboratory-poster.jpg"
                >
                  <source src="/images/6.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
                
                {/* Video Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={toggleLabPlay}
                    className="bg-amber-900/80 hover:bg-amber-800 backdrop-blur-sm text-white p-2 rounded-full transition-all"
                    aria-label={isLabPlaying ? 'Pause' : 'Play'}
                  >
                    {isLabPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleLabMute}
                    className="bg-amber-900/80 hover:bg-amber-800 backdrop-blur-sm text-white p-2 rounded-full transition-all"
                    aria-label={isLabMuted ? 'Unmute' : 'Mute'}
                  >
                    {isLabMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleLabFullscreen}
                    className="bg-amber-900/80 hover:bg-amber-800 backdrop-blur-sm text-white p-2 rounded-full transition-all"
                    aria-label="Fullscreen"
                  >
                    {isLabFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-amber-900/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <FlaskConical className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-white font-medium">Step 2: Smelting</span>
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold mb-1">Gold Smelting & Refining Laboratory</p>
                  <p className="text-xs opacity-90">Transforming raw gold ore into pure, refined precious metal</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Laboratory Smelting</h3>
              <p className="text-gray-600 text-sm">
                At our certified laboratory, raw gold ore undergoes precise smelting and refining 
                processes. Using advanced techniques including fire assay and induction smelting, 
                we transform earth-extracted materials into pure, investment-grade gold ready for 
                global markets.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            The Transformation Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Extraction', description: 'Manual mining from deep pits', icon: '⛏️', color: 'bg-amber-100' },
              { step: '2', title: 'Crushing', description: 'Breaking down ore', icon: '🔨', color: 'bg-orange-100' },
              { step: '3', title: 'Smelting', description: 'High-temperature refining', icon: '🔥', color: 'bg-yellow-100' },
              { step: '4', title: 'Pure Gold', description: '99.9% pure gold', icon: '✨', color: 'bg-amber-100' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 border border-yellow-500/30`}>
                  <span className="text-yellow-700 font-bold">{item.step}</span>
                </div>
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-gray-800 font-semibold text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-3xl font-bold text-yellow-600 mb-2">30m+</div>
            <p className="text-gray-800 font-semibold">Mining Depth</p>
            <p className="text-gray-500 text-sm">Miners dig up to 30 meters below ground</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-3xl font-bold text-yellow-600 mb-2">1100°C</div>
            <p className="text-gray-800 font-semibold">Smelting Temperature</p>
            <p className="text-gray-500 text-sm">High-temperature refining process</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-3xl font-bold text-yellow-600 mb-2">99.9%</div>
            <p className="text-gray-800 font-semibold">Purity Achieved</p>
            <p className="text-gray-500 text-sm">Investment-grade pure gold</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            From the depths of African soil to the precision of our laboratory — every piece of gold 
            tells a story of craftsmanship, tradition, and quality. Witness the transformation yourself.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
            Learn About Our Process
          </button>
        </motion.div>
      </div>
    </section>
  )
}