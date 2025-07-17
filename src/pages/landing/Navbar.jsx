// src/pages/landing/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FF6B00',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '64px',
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                }}
              >
                <span
                  style={{
                    color: '#FF6B00',
                    fontSize: '22px',
                  }}
                >
                  🎤
                </span>
              </div>
              <h1
                style={{
                  fontSize: '20px',
                  letterSpacing: '0.05em',
                  fontWeight: '1000',
                  margin: 0,
                  color: '#FFFFFF',
                  fontFamily: "'Lobster', cursive", // Changed to Lobster
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                ORANGE MIC
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav
              className="desktop-nav"
              style={{
                display: 'flex',
                gap: '32px',
              }}
            >
              {['Home', 'Entertainment', 'Events', 'News'].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '16px',
                    transition: 'color 0.2s, text-shadow 0.2s',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#FED7AA';
                    e.target.style.textShadow = '0 0 8px rgba(255, 215, 170, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#FFFFFF';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-button"
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                transition: 'color 0.2s, background-color 0.2s',
                display: 'none',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FED7AA';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.backgroundColor = 'none';
              }}
            >
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#E55A00',
                borderRadius: '0 0 12px 12px',
                marginBottom: '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '24px',
                }}
              >
                {['Home', 'Entertainment', 'Events', 'News'].map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '18px',
                      transition: 'color 0.2s, text-shadow 0.2s',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#FED7AA';
                      e.target.style.textShadow = '0 0 8px rgba(255, 215, 170, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#FFFFFF';
                      e.target.style.textShadow = 'none';
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Inline CSS for Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;