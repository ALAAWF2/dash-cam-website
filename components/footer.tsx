
'use client'

import { Phone, Mail, MapPin, Shield, RotateCcw, CreditCard } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dash<span className="text-[#007BFF]">-Sham</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              حلول تقنية متقدمة للسيارات. سجّل كل لحظة في كل رحلة مع كاميرات داش شام الاحترافية بدقة 4K.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#007BFF]" />
                <a href="tel:+966553377408" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  +966 55 337 7408
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#007BFF]" />
                <a href="mailto:wafaiealaa@gmail.com" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  wafaiealaa@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#007BFF]" />
                <span className="text-gray-300">المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  المميزات
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  المعرض
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  التقييمات
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  الأسئلة الشائعة
                </button>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">السياسات</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  سياسة الاسترجاع
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#007BFF] transition-colors">
                  شروط الضمان
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-[#007BFF]" />
              <div>
                <div className="text-white font-semibold">ضمان لمدة سنتين</div>
                <div className="text-gray-400 text-sm">حماية كاملة</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="w-6 h-6 text-[#007BFF]" />
              <div>
                <div className="text-white font-semibold">إرجاع خلال 30 يوماً</div>
                <div className="text-gray-400 text-sm">ضمان استرجاع المبلغ</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="w-6 h-6 text-[#007BFF]" />
              <div>
                <div className="text-white font-semibold">مدفوعات آمنة</div>
                <div className="text-gray-400 text-sm">خيارات دفع متعددة</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">طرق الدفع المتاحة</h4>
          <div className="flex justify-center space-x-6">
            <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-semibold">VISA</span>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-semibold">Mastercard</span>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-semibold">STC Pay</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 داش شام. جميع الحقوق محفوظة. حلول تقنية احترافية للسيارات.
          </p>
        </div>
      </div>
    </footer>
  )
}
