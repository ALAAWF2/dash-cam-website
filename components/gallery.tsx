
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const galleryItems = [
  {
    type: 'image',
    src: 'https://cdn.abacus.ai/images/d393902a-6e9c-48a3-805a-ba9c3a3a8c63.png',
    alt: 'Professional product shot of Dash-Sham dash cam',
    title: 'تصميم فاخر'
  },
  {
    type: 'image',
    src: 'https://cdn.abacus.ai/images/6cef56f7-322b-482b-b21d-47d9ee6837d5.png',
    alt: 'Front view of dash cam showing LED indicators',
    title: 'الواجهة الأمامية'
  },
  {
    type: 'image',
    src: 'https://cdn.abacus.ai/images/eda6c499-fdc1-490f-824f-89c50e5daa32.png',
    alt: 'Side view showing sleek profile',
    title: 'الجانب الجانبي'
  },
  {
    type: 'image',
    src: 'https://cdn.abacus.ai/images/5a9e3078-6048-48c2-8659-9207837ec0ae.png',
    alt: 'Back view showing ports and connections',
    title: 'الجهة الخلفية'
  },
  {
    type: 'image',
    src: 'https://cdn.abacus.ai/images/ddd1d345-1b91-4ea8-840f-ad8f22308ffe.png',
    alt: '4K video recording interface display',
    title: 'تسجيل 4K'
  },
  {
    type: 'image',
    src: 'http://www.vantrue.com/cdn/shop/articles/1920_1080-1.jpg?v=1682329592',
    alt: 'Night vision sample footage',
    title: 'عينة للرؤية الليلية'
  },
  {
    type: 'image',
    src: 'https://sc04.alicdn.com/kf/H4ef9f63968804a47bfaffbb833a9541eJ.jpg',
    alt: 'Wide angle view sample',
    title: 'عينة زاوية 170°'
  },
  {
    type: 'image',
    src: 'https://cdn.abacus.ai/images/eff6dd2e-213d-45b5-9346-efec8f7df30e.png',
    alt: 'Installation process',
    title: 'تركيب سهل'
  }
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const currentItem = galleryItems[currentIndex]

  return (
    <section id="gallery" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            معرض <span className="text-[#007BFF]">المنتج</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف كل زاوية وشاهد الجودة الفائقة التي تميز داش شام عن المنافسين.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative bg-[#0d0d0d] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          {/* Main Image/Video Display */}
          <div className="relative aspect-video">
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-contain bg-[#0d0d0d]"
              priority
            />
            
            {/* Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{currentItem.title}</h3>
                  <p className="text-gray-300 text-sm">{currentIndex + 1} من {galleryItems.length}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="bg-black/50 border-gray-600 hover:bg-black/70"
                  >
                    {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black/50 border-gray-600 hover:bg-black/70"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-4 bg-[#0d0d0d] border-t border-gray-800">
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
              {galleryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-[#007BFF] shadow-glow'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-[#007BFF]/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#0d0d0d] rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-[#007BFF] mb-2">4K</div>
            <div className="text-gray-400">تسجيل فائق الدقة</div>
          </div>
          <div className="text-center p-6 bg-[#0d0d0d] rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-[#007BFF] mb-2">170°</div>
            <div className="text-gray-400">زاوية رؤية عريضة</div>
          </div>
          <div className="text-center p-6 bg-[#0d0d0d] rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-[#007BFF] mb-2">24/7</div>
            <div className="text-gray-400">تسجيل متواصل</div>
          </div>
          <div className="text-center p-6 bg-[#0d0d0d] rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-[#007BFF] mb-2">128GB</div>
            <div className="text-gray-400">دعم تخزين حتى 128 جيجا</div>
          </div>
        </div>
      </div>
    </section>
  )
}
