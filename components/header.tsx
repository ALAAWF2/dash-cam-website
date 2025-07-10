
'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Dash<span className="text-[#007BFF]">-Sham</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-[#007BFF] transition-colors">
              المميزات
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-[#007BFF] transition-colors">
              المعرض
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-300 hover:text-[#007BFF] transition-colors">
              التقييمات
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-[#007BFF] transition-colors">
              الأسئلة الشائعة
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-6 py-2 rounded-lg shadow-glow-hover transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              اشترِ الآن
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-[#007BFF] transition-colors text-left">
                المميزات
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-[#007BFF] transition-colors text-left">
                المعرض
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-300 hover:text-[#007BFF] transition-colors text-left">
                التقييمات
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-[#007BFF] transition-colors text-left">
                الأسئلة الشائعة
              </button>
              <Button
                onClick={() => scrollToSection('pricing')}
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-6 py-2 rounded-lg w-full"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                اشترِ الآن
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
