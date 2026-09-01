'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  const backgroundImage = '/gold1.jpg'

  return (
    <section className="relative text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Gold Laboratory Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Dark Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60" /> */}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Loading Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 z-0 flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="text-yellow-500">Uganda's Most Trusted</span>
            <br />
            Gold Laboratory
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeIn animation-delay-200">
            Huanqiu Precious Metal delivers certified, precise gold testing and precious 
            metals analysis trusted by miners, traders, and exporters across East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
            <button 
              onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md text-center"
            >
              OUR COMPANY
            </button>
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services-section')
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}