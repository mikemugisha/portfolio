'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white font-bold text-xl"
              >
               
              </motion.div>
              <img
                src="/Mk.JPEG"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-white cursor-pointer"
                style={{ backgroundColor: 'white' }}
                onClick={() => setShowModal(true)}
              />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={item === 'Home' ? '#hero' : item === 'Experience' ? '#projects' : `#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white p-2 rounded-md"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative"
            onClick={e => e.stopPropagation()}
          >
            <img
              src="/Mk.JPEG"
              alt="Profile Large"
              className="w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full object-cover border-4 border-white shadow-2xl"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 text-gray-800 hover:bg-opacity-100 focus:outline-none"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
} 