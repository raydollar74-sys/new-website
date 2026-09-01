'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  List,
  Download,
  Share2,
  Heart,
  Eye,
  Calendar,
  MapPin,
  Users,
  Camera,
  Play,
  Pause
} from 'lucide-react'

// Gallery categories
const categories = [
  { id: 'all', name: 'All Photos', icon: '📸' },
  { id: 'mining', name: 'Mining Operations', icon: '⛏️' },
  { id: 'community', name: 'Community Impact', icon: '👥' },
  { id: 'laboratory', name: 'Laboratory & Testing', icon: '🔬' },
  { id: 'trading', name: 'Trading & Export', icon: '📦' },
  { id: 'team', name: 'Our Team', icon: '🤝' },
  { id: 'events', name: 'Events & Ceremonies', icon: '🎉' }
]

// Gallery images data
const galleryImages = [
  // Mining Operations
  {
    id: 1,
    title: 'Artisanal Gold Mining in Uganda',
    description: 'Local miners working in a traditional gold mining pit in Karamoja region, showcasing the dedication and skill of artisanal miners.',
    category: 'mining',
    image: '/images/1.jpeg',
    date: '2024-03-15',
    location: 'Karamoja, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['mining', 'artisanal', 'traditional']
  },
  {
    id: 2,
    title: 'Gold Ore Extraction',
    description: 'Miners carefully extracting gold-bearing ore from deep within the earth using traditional methods.',
    category: 'mining',
    image: '/images/2.jpeg',
    date: '2024-02-20',
    location: 'Busia, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['extraction', 'ore', 'hard work']
  },
  {
    id: 3,
    title: 'Panning for Gold',
    description: 'A miner skillfully panning for gold in a stream, separating precious particles from sediment.',
    category: 'mining',
    image: '/images/3.jpeg',
    date: '2024-01-10',
    location: 'Mubende, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['panning', 'river', 'traditional']
  },
  {
    id: 4,
    title: 'Deep Pit Mining',
    description: 'Miners descending into a deep mining pit, some reaching up to 30 meters below ground.',
    category: 'mining',
    image: '/images/4.jpeg',
    date: '2024-03-05',
    location: 'Ituri, DRC',
    photographer: 'Team Huanqiu',
    tags: ['pit', 'deep', 'excavation']
  },
  
  // Community Impact
  {
    id: 5,
    title: 'Community Meeting',
    description: 'Our team meeting with local mining community members to discuss fair trade practices and partnership opportunities.',
    category: 'community',
    image: '/images/5.jpeg',
    date: '2024-02-28',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['community', 'meeting', 'partnership']
  },
  {
    id: 6,
    title: 'Education Support Program',
    description: 'Providing school supplies and educational materials to children in mining communities.',
    category: 'community',
    image: '/images/community-2.jpg',
    date: '2024-01-25',
    location: 'Busia, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['education', 'children', 'support']
  },
  {
    id: 7,
    title: 'Clean Water Initiative',
    description: 'Installation of a clean water well in a mining community, providing safe drinking water to hundreds of families.',
    category: 'community',
    image: '/images/community-3.jpg',
    date: '2024-03-10',
    location: 'Geita, Tanzania',
    photographer: 'Team Huanqiu',
    tags: ['water', 'well', 'clean water']
  },
  {
    id: 8,
    title: 'Women Miners Empowerment',
    description: 'Supporting women in artisanal mining through training programs and fair trade opportunities.',
    category: 'community',
    image: '/images/community-4.jpg',
    date: '2024-02-15',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['women', 'empowerment', 'training']
  },
  
  // Laboratory & Testing
  {
    id: 9,
    title: 'Gold Purity Testing',
    description: 'Our specialists conducting professional gold purity testing using advanced equipment.',
    category: 'laboratory',
    image: '/images/lab-1.jpg',
    date: '2024-03-18',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['testing', 'laboratory', 'purity']
  },
  {
    id: 10,
    title: 'Fire Assay Process',
    description: 'The traditional fire assay method used to determine gold purity with exceptional accuracy.',
    category: 'laboratory',
    image: '/images/lab-2.jpg',
    date: '2024-02-22',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['fire assay', 'traditional', 'accuracy']
  },
  {
    id: 11,
    title: 'XRF Analysis',
    description: 'Using X-ray fluorescence technology for non-destructive elemental analysis of precious metals.',
    category: 'laboratory',
    image: '/images/lab-3.jpg',
    date: '2024-03-12',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['XRF', 'analysis', 'technology']
  },
  {
    id: 12,
    title: 'Gold Weighing & Valuation',
    description: 'Precise weighing and valuation of gold using certified equipment.',
    category: 'laboratory',
    image: '/images/lab-4.jpg',
    date: '2024-01-30',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['weighing', 'valuation', 'precision']
  },
  
  // Trading & Export
  {
    id: 13,
    title: 'Gold Bar Preparation',
    description: 'Preparing high-purity gold bars for international export markets.',
    category: 'trading',
    image: '/images/trading-1.jpg',
    date: '2024-03-20',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['gold bars', 'preparation', 'export']
  },
  {
    id: 14,
    title: 'Secure Packaging',
    description: 'Professional secure packaging of precious metals for safe transportation.',
    category: 'trading',
    image: '/images/trading-2.jpg',
    date: '2024-02-18',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['packaging', 'security', 'logistics']
  },
  {
    id: 15,
    title: 'Export Documentation',
    description: 'Preparing complete export documentation for international gold shipments.',
    category: 'trading',
    image: '/images/trading-3.jpg',
    date: '2024-03-08',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['documentation', 'export', 'compliance']
  },
  {
    id: 16,
    title: 'International Shipment',
    description: 'Loading gold shipments for delivery to international buyers.',
    category: 'trading',
    image: '/images/trading-4.jpg',
    date: '2024-03-25',
    location: 'Entebbe, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['shipment', 'international', 'logistics']
  },
  
  // Our Team
  {
    id: 17,
    title: 'Team Meeting',
    description: 'Our dedicated team discussing strategies to better serve mining communities.',
    category: 'team',
    image: '/images/team-1.jpg',
    date: '2024-03-05',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['team', 'meeting', 'collaboration']
  },
  {
    id: 18,
    title: 'Field Operations Team',
    description: 'Our field team visiting mining communities to build relationships and provide support.',
    category: 'team',
    image: '/images/team-2.jpg',
    date: '2024-02-10',
    location: 'Mubende, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['field', 'outreach', 'community']
  },
  {
    id: 19,
    title: 'Laboratory Team',
    description: 'Our skilled laboratory team conducting quality assurance tests.',
    category: 'team',
    image: '/images/team-3.jpg',
    date: '2024-03-15',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['laboratory', 'team', 'quality']
  },
  {
    id: 20,
    title: 'Leadership Team',
    description: 'The leadership team at Huanqiu Precious Metal committed to ethical trading.',
    category: 'team',
    image: '/images/team-4.jpg',
    date: '2024-03-01',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['leadership', 'management', 'commitment']
  },
  
  // Events & Ceremonies
  {
    id: 21,
    title: 'Gold Trading Fair',
    description: 'Annual gold trading fair bringing together miners, traders, and buyers.',
    category: 'events',
    image: '/images/events-1.jpg',
    date: '2024-02-05',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['event', 'trading', 'fair']
  },
  {
    id: 22,
    title: 'Community Partnership Ceremony',
    description: 'Celebrating new partnerships with mining communities across East Africa.',
    category: 'events',
    image: '/images/events-2.jpg',
    date: '2024-01-20',
    location: 'Busia, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['ceremony', 'partnership', 'celebration']
  },
  {
    id: 23,
    title: 'Award Ceremony',
    description: 'Receiving recognition for excellence in ethical gold trading.',
    category: 'events',
    image: '/images/events-3.jpg',
    date: '2024-03-22',
    location: 'Kampala, Uganda',
    photographer: 'Team Huanqiu',
    tags: ['award', 'recognition', 'excellence']
  },
  {
    id: 24,
    title: 'Training Workshop',
    description: 'Conducting training workshops on sustainable mining practices.',
    category: 'events',
    image: '/images/events-4.jpg',
    date: '2024-02-25',
    location: 'Geita, Tanzania',
    photographer: 'Team Huanqiu',
    tags: ['training', 'workshop', 'education']
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [likedImages, setLikedImages] = useState<number[]>([])
  const galleryRef = useRef<HTMLDivElement>(null)

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Handle image click for modal
  const handleImageClick = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
    document.body.style.overflow = 'hidden'
  }

  // Close modal
  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  // Navigate through images in modal
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
        if (e.key === 'Escape') closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex])

  // Toggle like
  const toggleLike = (id: number) => {
    setLikedImages(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
            Our <span className="text-yellow-500">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A visual journey through our ethical gold trading operations, community impact, and the people who make it all possible.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-gray-900 shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-yellow-500 text-gray-900' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-yellow-500 text-gray-900' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid/List View */}
      <section className="py-12" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
            }>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`group cursor-pointer ${
                    viewMode === 'list' ? 'flex gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow' : ''
                  }`}
                  onClick={() => handleImageClick(image, index)}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'grid' 
                      ? 'h-64 rounded-xl' 
                      : 'w-48 h-32 rounded-l-xl flex-shrink-0'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(image.id)
                        }}
                        className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full"
                      >
                        <Heart className={`w-4 h-4 ${likedImages.includes(image.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Content for List View */}
                  {viewMode === 'list' && (
                    <div className="flex-1 p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{image.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(image.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {image.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Camera className="w-3 h-3" />
                          {image.photographer}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-[70vh] md:h-[80vh]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 mb-3">{selectedImage.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(selectedImage.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedImage.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Camera className="w-4 h-4" />
                    {selectedImage.photographer}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedImage.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Stats */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500">{galleryImages.length}+</div>
              <div className="text-sm text-gray-400">Moments Captured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">{categories.length}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">5+</div>
              <div className="text-sm text-gray-400">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">{likedImages.length}</div>
              <div className="text-sm text-gray-400">Community Favorites</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Share Your Story With Us
          </h2>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Have photos from mining communities or gold trading experiences? We'd love to feature them in our gallery.
          </p>
          <button 
            onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Submit Your Photos
          </button>
        </div>
      </section>
    </div>
  )
}