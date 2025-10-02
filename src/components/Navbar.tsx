'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navItems = [
    {
      id: 'home',
      name: 'Home',
      href: '#home',
      index: '00',
      bgColor: 'bg-[#DFDFDF]',
      textColor: 'text-[#111111]',
      indexColor: 'text-[#111111]/60',
      shadowColor: 'shadow-[#111111]/15'
    },
    {
      id: 'about',
      name: 'About',
      href: '#about',
      index: '01',
      bgColor: 'bg-[#BE8400]',
      textColor: 'text-white',
      indexColor: 'text-white/80',
      shadowColor: 'shadow-[#BE8400]/25'
    },
    {
      id: 'skills',
      name: 'Skills',
      href: '#skills',
      index: '02',
      bgColor: 'bg-[#111111]',
      textColor: 'text-white',
      indexColor: 'text-white/80',
      shadowColor: 'shadow-[#111111]/30'
    },
    {
      id: 'projects',
      name: 'Projects',
      href: '#projects',
      index: '03',
      bgColor: 'bg-[#DFDFDF]',
      textColor: 'text-[#111111]',
      indexColor: 'text-[#111111]/60',
      shadowColor: 'shadow-[#111111]/15'
    },
    {
      id: 'contact',
      name: 'Contact',
      href: '#contact',
      index: '04',
      bgColor: 'bg-[#BE8400]',
      textColor: 'text-white',
      indexColor: 'text-white/80',
      shadowColor: 'shadow-[#BE8400]/25'
    }
  ];

  return (
    <>
      {/* Fixed Navigation Sidebar - Hidden on mobile, visible on sm+ screens */}
      <div className="hidden sm:flex fixed left-0 top-0 h-full w-64 z-50 justify-center">
        <nav className="flex flex-col h-full py-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                ${item.bgColor} ${item.textColor}
                w-full h-32 rounded-none
                flex flex-col justify-start items-start
                p-6 transition-all duration-300
                hover:translate-x-2 hover:shadow-lg ${item.shadowColor}
                cursor-pointer relative
                ${activeSection === item.id ? 'ring-2 ring-white/40 ring-inset' : ''}
              `}
            >
              {/* Index number - Top left */}
              <span className={`text-sm font-medium ${item.indexColor} tracking-wide absolute top-4 left-4`}>
                {item.index}
              </span>

              {/* Link text - Center left */}
              <span className="text-2xl font-bold leading-tight mt-8">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-56 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-[#111111]">Navigation</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-[#111111] hover:bg-[#DFDFDF] rounded-full transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`
                      ${item.bgColor} ${item.textColor}
                      block w-full p-4 rounded-none
                      text-xl font-bold transition-all duration-200
                      hover:translate-x-2 active:scale-[0.98] relative
                    `}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <span className={`text-sm ${item.indexColor} absolute top-2 left-2`}>
                      {item.index}
                    </span>
                    <span className="text-xl font-bold leading-tight mt-6 block">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Toggle - Only show on mobile */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#111111] hover:bg-[#DFDFDF] transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  );
}
