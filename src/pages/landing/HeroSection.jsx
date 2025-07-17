// src/pages/landing/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '40px',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        backgroundImage: 'url(/AMA1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Transparent White Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Increased transparency to 70% opacity
          zIndex: 1,
        }}
      />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="hero-content"
          style={{
            display: 'grid',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: '#FF6B00' }}
          >
            <motion.h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '400',
                marginBottom: '24px',
                lineHeight: '1.2',
                margin: 0,
                fontFamily: "'Lobster', cursive",
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to
              <br />
              <span style={{ color: '#E55A00', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
                ORANGE MIC
              </span>
            </motion.h2>

            <motion.p
              style={{
                fontSize: '1.1rem',
                marginBottom: '32px',
                fontWeight: '1000',
                color: '#333',
                lineHeight: '1.6',
                maxWidth: '500px',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
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
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: '#FF6B00',
                  color: 'white',
                  padding: '14px 28px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#E55A00';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FF6B00';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Goals
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                height: '350px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="/AMA.jpeg"
                alt="SIGN MIC Interview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  console.error('Failed to load hero image: /hero-image.jpg');
                  e.target.src = 'https://via.placeholder.com/500x350';
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '100K+', label: 'Followers' },
            { value: '500+', label: 'Interviews' },
            { value: '50+', label: 'Events' },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                color: '#FF6B00',
              }}
            >
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  margin: 0,
                  marginBottom: '8px',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                {stat.value}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#333',
                  margin: 0,
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Inline CSS for Responsive Design */}
      <style jsx>{`
        .hero-content {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1023px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content h2 {
            font-size: 2rem !important;
          }
          .hero-content p {
            font-size: 1rem !important;
            max-width: 90% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-content button {
            padding: 12px 24px !important;
            font-size: 0.9rem !important;
          }
          .hero-content > div:last-child {
            max-width: 400px;
            margin: 0 auto;
          }
          .hero-content > div:last-child > div {
            height: 300px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-content h2 {
            font-size: 1.8rem !important;
          }
          .hero-content > div:last-child > div {
            height: 250px !important;
          }
        }
        
        @media (max-width: 600px) {
          section {
            background-image: url(/AMA1.jpeg); /* Use same image or add AMA1-mobile.jpeg */
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;