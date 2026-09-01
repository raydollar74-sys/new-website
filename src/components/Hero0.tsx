'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imageErrors, setImageErrors] = useState<boolean[]>([])

  // Array of background images - replace with your actual image paths
  const backgroundImages = [
    '/gold1.jpg',
    '/images/3.jpeg',
    '/gold2.jpg',
    '/silver1.png',
    '/gold3.jpg',
    '/gemstones1.webp'
    // 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=1920&q=80',
    // 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1920&q=80',
    // 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80',
  ]

  // Check if images exist and preload them
  useEffect(() => {
    const checkAndPreloadImages = async () => {
      const loadPromises = backgroundImages.map((src, index) => {
        return new Promise<boolean>((resolve) => {
          const img = new window.Image()
          img.src = src
          img.onload = () => {
            console.log(`✅ Image loaded: ${src}`)
            resolve(true)
          }
          img.onerror = () => {
            console.error(`❌ Failed to load image: ${src}`)
            setImageErrors(prev => {
              const newErrors = [...prev]
              newErrors[index] = true
              return newErrors
            })
            resolve(false)
          }
        })
      })

      const results = await Promise.all(loadPromises)
      setImagesLoaded(results)
    }

    checkAndPreloadImages()
  }, [])

  useEffect(() => {
    if (backgroundImages.length === 0) return
    
    // Change image every 5 seconds
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const allImagesLoaded = imagesLoaded.length > 0 && imagesLoaded.every(loaded => loaded === true)
  const hasErrors = imageErrors.some(error => error === true)

  // If all images failed to load, show a fallback background
  if (hasErrors && !allImagesLoaded) {
    return (
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-500">Uganda's Most Trusted</span>
              <br />
              Precious Metal Trading Company
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Huanqiu Precious Metal delivers certified, precise gold testing and precious 
              metals analysis trusted by miners, traders, and exporters across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
              href={"/about"}
                // onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md text-center"
              >
                OUR COMPANY
              </Link>
              <Link 
              href={"/services"}
              
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Loading Skeleton */}
      {!allImagesLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 z-0 flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      )}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage && !isTransitioning && allImagesLoaded
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt={`Gold Laboratory Background ${index + 1}`}
              fill
              className={`object-cover ${index === currentImage && allImagesLoaded ? 'hero-image-zoom' : ''}`}
              priority={index === 0}
              sizes="100vw"
              // REMOVED quality prop to avoid the error
              onLoad={() => {
                console.log(`Next.js Image loaded: ${img}`)
                setImagesLoaded(prev => {
                  const newLoaded = [...prev]
                  newLoaded[index] = true
                  return newLoaded
                })
              }}
              onError={() => {
                console.error(`Next.js Image failed: ${img}`)
                setImageErrors(prev => {
                  const newErrors = [...prev]
                  newErrors[index] = true
                  return newErrors
                })
              }}
            />
          </div>
        ))}
        
        {/* Dark Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10" /> */}
        
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
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            <span className="text-yellow-500">Uganda's Most Trusted</span>
            <br />
            Precious Metal Trading Company
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