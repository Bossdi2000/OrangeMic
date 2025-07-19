"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: '70vh', sm: '80vh', md: '90vh' }, // Shorter on mobile
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, sm: 9, md: 10 }, // Account for Navbar height
        pb: { xs: 3, sm: 4, md: 5 }, // Responsive bottom padding
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        // Responsive background image
        backgroundImage: {
          xs: 'url(/AMA1-mobile.jpeg)', // Optimized for mobile
          sm: 'url(/AMA1.jpeg)', // Full image for larger screens
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' }, // Scroll on mobile
      }}
    >
      {/* Transparent White Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: { xs: 'rgba(255, 255, 255, 0.85)', sm: 'rgba(255, 255, 255, 0.75)' },
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        }}
      >
        <Box
          className="hero-content"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // Single column on mobile
            gap: { xs: 2, sm: 3, md: 4 }, // Responsive gap
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                  fontWeight: 400,
                  lineHeight: 1.3,
                  fontFamily: "'Lobster', cursive",
                  color: '#FF6B00',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                }}
              >
                Welcome to
                <br />
                <Box component="span" sx={{ color: '#E55A00' }}>
                  ORANGE MIC
                </Box>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  fontWeight: 500,
                  color: '#333',
                  lineHeight: 1.5,
                  maxWidth: { xs: '95%', sm: '80%', md: '450px' },
                  mx: { xs: 'auto', md: 0 },
                  mt: { xs: 1.5, sm: 2 },
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                Your gateway to the fascinating world of Sign Dynasty through engaging interviews and entertainment content
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  bgcolor: '#FF6B00',
                  color: 'white',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                  fontWeight: 600,
                  px: { xs: 2, sm: 3, md: 3.5 },
                  py: { xs: 1, sm: 1.2 },
                  borderRadius: '8px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                  mt: { xs: 2, sm: 3 },
                  '&:hover': {
                    bgcolor: '#E55A00',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Goals
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' }, // Center on mobile, right on desktop
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '220px', sm: '280px', md: '340px', lg: '400px' }, // Responsive width
                height: { xs: '140px', sm: '180px', md: '220px', lg: '260px' }, // Responsive height
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                mx: 'auto', // Ensure centering on all screens
              }}
            >
              <Box
                component="img"
                src="/AMA.jpeg"
                alt="SIGN MIC Interview"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block', // Ensure no extra spacing
                }}
                onError={(e) => {
                  console.error("Failed to load hero image: /AMA.jpeg");
                  e.target.src = "/placeholder.svg?height=260&width=400";
                }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            mt: { xs: 3, sm: 4, md: 5 },
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '100K+', label: 'Followers' },
            { value: '500+', label: 'Interviews' },
            { value: '50+', label: 'Events' },
          ].map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                color: '#FF6B00',
                minWidth: { xs: '60px', sm: '70px', md: '80px' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
                  fontWeight: 'bold',
                  mb: 0.5,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                  color: '#333',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;