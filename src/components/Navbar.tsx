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
      indexColor: 'text-[#111111]/70',
      shadowColor: 'shadow-[#111111]/20'
    },
    {
      id: 'about',
      name: 'About',
      href: '#about',
      index: '01',
      bgColor: 'bg-[#BE8400]',
      textColor: 'text-white',
      indexColor: 'text-white/70',
      shadowColor: 'shadow-[#BE8400]/30'
    },
    {
      id: 'skills',
      name: 'Skills',
      href: '#skills',
      index: '02',
      bgColor: 'bg-[#222222]',
      textColor: 'text-white',
      indexColor: 'text-white/70',
      shadowColor: 'shadow-[#222222]/40'
    },
    {
      id: 'projects',
      name: 'Projects',
      href: '#projects',
      index: '03',
      bgColor: 'bg-[#DFDFDF]',
      textColor: 'text-[#111111]',
      indexColor: 'text-[#111111]/70',
      shadowColor: 'shadow-[#111111]/20'
    },
    {
      id: 'contact',
      name: 'Contact',
      href: '#contact',
      index: '04',
      bgColor: 'bg-[#BE8400]',
      textColor: 'text-white',
      indexColor: 'text-white/70',
      shadowColor: 'shadow-[#BE8400]/30'
    }
  ];

  return (
    <>
      {/* Fixed Navigation Sidebar - Hidden on mobile, visible on lg+ screens */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-80 z-50 items-center justify-center">
        <nav className="flex flex-col space-y-4 p-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                ${item.bgColor} ${item.textColor}
                w-48 h-48 rounded-3xl
                flex flex-col justify-end items-start
                p-6 transition-all duration-300
                hover:scale-105 hover:shadow-2xl ${item.shadowColor}
                group cursor-pointer relative
                overflow-hidden
                ${activeSection === item.id ? 'ring-2 ring-white/30 ring-offset-2 ring-offset-transparent' : ''}
              `}
            >
              {/* Background pattern/decoration */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-current opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-current opacity-20"></div>
              </div>

              {/* Index number */}
              <span className={`text-sm font-medium mb-2 ${item.indexColor} tracking-wide`}>
                {item.index}
              </span>

              {/* Link text */}
              <span className="text-2xl font-bold leading-tight group-hover:translate-x-1 transition-transform duration-300">
                {item.name}
              </span>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-current opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-2xl z-50 overflow-y-auto">
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
                      block w-full p-4 rounded-xl
                      text-lg font-semibold transition-all duration-200
                      hover:scale-[1.02] active:scale-[0.98]
                    `}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <span className={`text-sm ${item.indexColor} block mb-1`}>
                      {item.index}
                    </span>
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Toggle - Only show on mobile/tablet */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
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
