
'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, ShoppingCart, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showStickyBuy, setShowStickyBuy] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollTop(scrollY > 300)
      
      // Show sticky buy button after hero section
      const heroHeight = window.innerHeight
      setShowStickyBuy(scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent('مرحباً داش شام! أود معرفة المزيد عن كاميرا الداش بدقة 4K.')
    window.open(`https://wa.me/966553377408?text=${message}`, '_blank')
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-[#25D366] hover:bg-[#1ea952] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Sticky Buy Now Button */}
      {showStickyBuy && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 animate-slide-up">
          <Button
            onClick={scrollToPricing}
            className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-3 rounded-full shadow-glow-hover transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            اشترِ الآن ووفر 33%
          </Button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={scrollToTop}
            className="bg-[#1a1a1a] hover:bg-[#007BFF] text-gray-400 hover:text-white p-3 rounded-full shadow-xl border border-gray-700 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Language Toggle removed */}
    </>
  )
}
