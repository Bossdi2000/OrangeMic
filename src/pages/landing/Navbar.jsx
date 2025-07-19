"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navigationItems = ["Home", "Entertainment", "Events", "News"]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FF6B00",
          color: "white",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          zIndex: 1000,
          fontFamily: "'Poppins', sans-serif",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 24px)", // Responsive padding
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "64px",
              width: "100%",
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexShrink: 0, // Prevent logo from shrinking
              }}
            >
              <div
                style={{
                  width: "clamp(32px, 8vw, 36px)", // Responsive logo size
                  height: "clamp(32px, 8vw, 36px)",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <span
                  style={{
                    color: "#FF6B00",
                    fontSize: "clamp(18px, 5vw, 22px)", // Responsive emoji size
                  }}
                >
                  🎤
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(16px, 4vw, 20px)", // Responsive text size
                  letterSpacing: "0.05em",
                  fontWeight: "1000",
                  margin: 0,
                  color: "#FFFFFF",
                  fontFamily: "'Lobster', cursive",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  whiteSpace: "nowrap", // Prevent text wrapping
                }}
              >
                ORANGE MIC
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav
                style={{
                  display: "flex",
                  gap: "clamp(16px, 3vw, 32px)", // Responsive gap
                  alignItems: "center",
                }}
              >
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "clamp(14px, 2.5vw, 16px)", // Responsive font size
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#FED7AA"
                      e.target.style.textShadow = "0 0 8px rgba(255, 215, 170, 0.5)"
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#FFFFFF"
                      e.target.style.textShadow = "none"
                      e.target.style.backgroundColor = "transparent"
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "12px",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "48px", // Ensure touch target is large enough
                  minHeight: "48px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                }}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: "transform 0.2s ease" }}
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            )}
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && isMobile && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  backgroundColor: "#E55A00",
                  borderRadius: "0 0 12px 12px",
                  marginBottom: "8px",
                  overflow: "hidden",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    padding: "16px",
                  }}
                >
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        color: "#FFFFFF",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "18px",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        padding: "16px 20px",
                        borderRadius: "8px",
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                      onClick={closeMenu}
                      onTouchStart={(e) => {
                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                      }}
                      onTouchEnd={(e) => {
                        setTimeout(() => {
                          e.target.style.backgroundColor = "transparent"
                        }, 150)
                      }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Global styles for responsive design */}
      <style jsx global>{`
        /* Ensure proper viewport setup */
        html {
          box-sizing: border-box;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        *, *::before, *::after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* Prevent horizontal scrolling on mobile */
        .navbar-container {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Touch-friendly interactions */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: rgba(255, 107, 0, 0.2);
          }
          
          button, a {
            min-height: 44px; /* Apple's recommended touch target size */
            min-width: 44px;
          }
        }

        /* Improve text readability on mobile */
        @media (max-width: 480px) {
          body {
            font-size: 16px; /* Prevent zoom on iOS Safari */
          }
        }

        /* High DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .logo-icon {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar