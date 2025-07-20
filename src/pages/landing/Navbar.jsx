"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
            padding: "0 clamp(16px, 4vw, 24px)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // Reverted to original layout
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
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "clamp(32px, 8vw, 36px)",
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
                    fontSize: "clamp(18px, 5vw, 22px)",
                  }}
                >
                  🎤
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(16px, 4vw, 20px)",
                  letterSpacing: "0.05em",
                  fontWeight: "1000",
                  margin: 0,
                  color: "#FFFFFF",
                  fontFamily: "'Lobster', cursive",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  whiteSpace: "nowrap",
                }}
              >
                ORANGE MIC
              </h1>
            </motion.div>
            {/* Right side is now empty due to removed navigation */}
          </div>
        </div>
      </motion.header>

      {/* Global styles for responsive design */}
      <style jsx global>{`
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

        .navbar-container {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: rgba(255, 107, 0, 0.2);
          }
          
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        @media (max-width: 480px) {
          body {
            font-size: 16px;
          }
        }

        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .logo-icon {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;