"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const stats = [
    { value: "100K+", label: "Followers" },
    { value: "500+", label: "Interviews" },
    { value: "50+", label: "Events" },
  ]

  return (
    <>
      <section
        style={{
          minHeight: "100svh", // For better mobile viewport handling, fallback to 100vh for older browsers
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "clamp(80px, 15vh, 120px)", // Responsive top padding
          paddingBottom: "clamp(40px, 8vh, 80px)",
          fontFamily: "'Poppins', sans-serif",
          position: "relative",
          backgroundImage: "url(/AMA1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "fixed", // Prevent iOS issues
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Responsive Background Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isMobile 
              ? "rgba(255, 255, 255, 0.8)" // Stronger overlay on mobile for readability
              : "rgba(255, 255, 255, 0.7)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 32px)", // Responsive horizontal padding
            width: "100%",
            position: "relative",
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: isMobile ? "flex" : "grid",
              flexDirection: isMobile ? "column" : undefined,
              gridTemplateColumns: isMobile ? undefined : "1fr 1fr",
              gap: "clamp(32px, 8vw, 64px)", // Responsive gap
              alignItems: "center",
              textAlign: isMobile ? "center" : "left",
              width: "100%",
            }}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                color: "#FF6B00",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              <motion.h2
                style={{
                  fontSize: "clamp(2rem, 8vw, 3.5rem)", // Fully responsive heading
                  fontWeight: "400",
                  marginBottom: "clamp(16px, 4vw, 32px)",
                  lineHeight: "1.2",
                  margin: "0 0 clamp(16px, 4vw, 32px) 0",
                  fontFamily: "'Lobster', cursive",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                  textAlign: isMobile ? "center" : "left",
                  width: "100%",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to
                <br />
                <span style={{ color: "#E55A00", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
                  ORANGE MIC
                </span>
              </motion.h2>

              <motion.p
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)", // Responsive paragraph text
                  marginBottom: "clamp(24px, 6vw, 40px)",
                  fontWeight: "600", // Reduced from 1000 for better readability
                  color: "#333",
                  lineHeight: "1.6",
                  maxWidth: isMobile ? "100%" : "500px",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                  textAlign: isMobile ? "center" : "left",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your gateway to the fascinating world of Sign Dynasty through engaging interviews and entertainment content
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: "#FF6B00",
                    color: "white",
                    padding: "clamp(12px, 3vw, 16px) clamp(24px, 6vw, 32px)", // Responsive padding
                    fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", // Responsive font size
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                    minWidth: "120px", // Ensure button is touch-friendly
                    minHeight: "48px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#E55A00"
                    e.target.style.transform = "translateY(-2px)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#FF6B00"
                    e.target.style.transform = "translateY(0)"
                  }}
                >
                  Goals
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                order: isMobile ? -1 : 0, // Show image first on mobile
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "clamp(300px, 80vw, 500px)", // Responsive max width
                  height: "clamp(200px, 50vw, 350px)", // Responsive height
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="/AMA.jpeg"
                  alt="ORANGE MIC Interview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    console.error("Failed to load hero image: /AMA.jpeg")
                    e.target.style.backgroundColor = "#f3f4f6"
                    e.target.alt = "Image not found"
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Stats - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(16px, 8vw, 48px)", // Responsive gap
              marginTop: "clamp(32px, 8vh, 64px)", // Responsive top margin
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                style={{
                  textAlign: "center",
                  color: "#FF6B00",
                  minWidth: "80px", // Ensure consistent width
                  flex: isMobile ? "1 1 auto" : "0 1 auto",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(1.4rem, 5vw, 2.2rem)", // Responsive stat value
                    fontWeight: "bold",
                    margin: 0,
                    marginBottom: "clamp(4px, 1vw, 12px)",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {stat.value}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 2.5vw, 1rem)", // Responsive stat label
                    color: "#333",
                    margin: 0,
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Global Responsive Styles */}
      <style jsx global>{`
        /* Ensure proper responsive behavior */
        * {
          box-sizing: border-box;
        }

        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          /* Prevent text size adjustments on mobile */
          html {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }

          /* Improve touch targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }

          /* Optimize background for mobile */
          section {
            background-attachment: scroll !important;
          }
        }

        /* Very small screens (phones in portrait) */
        @media (max-width: 480px) {
          body {
            font-size: 16px; /* Prevent zoom on iOS */
          }
        }

        /* Tablet landscape optimization */
        @media (min-width: 769px) and (max-width: 1024px) {
          section {
            padding-top: clamp(100px, 12vh, 140px);
          }
        }

        /* Large screens optimization */
        @media (min-width: 1400px) {
          section {
            background-size: cover;
            background-position: center center;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  )
}

export default HeroSection