
'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqData = [
  {
    question: 'How easy is the installation process?',
    answer: 'Installation is incredibly simple and takes just 10-15 minutes. The dash cam comes with a detailed installation guide, mounting bracket, and all necessary cables. Simply attach the bracket to your windshield, connect the power cable to your car charger, and you\'re ready to go. No professional installation required.'
  },
  {
    question: 'What storage capacity do I need?',
    answer: 'The included 32GB SD card provides approximately 4-6 hours of 4K recording. When the card is full, loop recording automatically overwrites the oldest files. For extended recording, you can upgrade to a 64GB or 128GB card for up to 20+ hours of continuous recording.'
  },
  {
    question: 'Does it work while the car is parked?',
    answer: 'Yes! The motion detection feature automatically activates recording when movement is detected around your parked vehicle. This parking surveillance mode helps protect against vandalism, break-ins, and hit-and-run incidents. The dash cam can run on your car\'s battery or optional external power bank.'
  },
  {
    question: 'What\'s covered under the 2-year warranty?',
    answer: 'Our comprehensive 2-year warranty covers all manufacturing defects, hardware malfunctions, and component failures. This includes the camera unit, SD card, cables, and mounting accessories. We also provide free repair or replacement service and dedicated customer support throughout the warranty period.'
  },
  {
    question: 'How clear is the night vision recording?',
    answer: 'The advanced night vision technology uses superior low-light sensors and image processing to deliver crystal-clear footage even in complete darkness. The camera automatically adjusts exposure and enhances contrast to capture license plates, road signs, and important details that other dash cams miss.'
  },
  {
    question: 'Can I view footage on my phone?',
    answer: 'Yes, the dash cam features Wi-Fi connectivity that allows you to connect to our mobile app. You can view live footage, download recordings, adjust settings, and manage storage directly from your smartphone. The app is available for both iOS and Android devices.'
  },
  {
    question: 'What happens if I need customer support?',
    answer: 'We provide 24/7 customer support through WhatsApp, email, and phone. Our technical team can help with installation questions, troubleshooting, warranty claims, and any other concerns. We also offer remote assistance and detailed video tutorials for common questions.'
  },
  {
    question: 'Is the dash cam compatible with all vehicles?',
    answer: 'Yes, the dash cam is designed to work with all vehicle types including cars, trucks, motorcycles, and commercial vehicles. The universal mounting system and adjustable bracket ensure a perfect fit regardless of your windshield angle or dashboard configuration.'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007BFF]/20 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-[#007BFF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#007BFF]">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about our premium dash cam. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index)
            
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl border border-gray-800 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#007BFF]/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-[#007BFF] transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-[#007BFF]/50 to-transparent mb-4" />
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our expert support team is here to help you 24/7. Get instant answers via WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966553377408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#1ea952] text-white rounded-lg transition-colors duration-300"
              >
                WhatsApp Support
              </a>
              <a
                href="mailto:wafaiealaa@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-lg transition-colors duration-300"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
