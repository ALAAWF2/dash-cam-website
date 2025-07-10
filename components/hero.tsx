
'use client'

import { useEffect, useState } from 'react'
import { Play, Shield, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/95c698fa-361e-471c-ab26-749b43e9cf8f.png"
          alt="Luxury car dashboard with dash cam"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#007BFF]/20 border border-[#007BFF]/30 rounded-full text-[#007BFF] text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Professional Grade Security
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Capture Every Detail,<br />
            <span className="text-[#007BFF]">Every Drive</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium 4K Ultra HD Dash Cam with advanced night vision and 170° wide-angle lens. 
            Your ultimate driving companion for security and peace of mind.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 flex items-center">
              <Camera className="w-4 h-4 text-[#007BFF] mr-2" />
              <span className="text-white text-sm">4K Ultra HD</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 flex items-center">
              <Shield className="w-4 h-4 text-[#007BFF] mr-2" />
              <span className="text-white text-sm">Night Vision</span>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 flex items-center">
              <Play className="w-4 h-4 text-[#007BFF] mr-2" />
              <span className="text-white text-sm">Loop Recording</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToPricing}
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-4 text-lg rounded-lg shadow-glow-hover transition-all duration-300 transform hover:scale-105"
            >
              Order Now - Save 33%
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-gray-600 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#007BFF] mr-2">4.8</span>
              <span>★★★★★ Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-600 hidden sm:block" />
            <div>
              <span className="text-2xl font-bold text-[#007BFF] mr-2">10,000+</span>
              <span>Happy Customers</span>
            </div>
            <div className="w-px h-6 bg-gray-600 hidden sm:block" />
            <div>
              <span className="text-2xl font-bold text-[#007BFF] mr-2">2 Year</span>
              <span>Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
