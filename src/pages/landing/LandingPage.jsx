import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import EntertainmentSection from './EntertainmentSection';
import EventsSection from './EventsSection';
import NewsSection from './NewsSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // Use responsive background image with media queries
        backgroundImage: {
          xs: 'url(/AMA1-mobile.jpeg)', // Use a smaller, optimized image for mobile
          sm: 'url(/AMA1.jpeg)', // Original image for larger screens
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Remove fixed background for mobile compatibility
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Overlay with responsive opacity */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: {
            xs: 'rgba(255, 255, 255, 0.8)', // Stronger overlay on mobile for readability
            md: 'rgba(255, 255, 255, 0.7)', // Lighter overlay on larger screens
          },
          zIndex: 1,
        }}
      />
      {/* Content wrapper */}
      <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <Navbar />
        <Container
          maxWidth="lg" // Use a max-width to constrain content on large screens
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3, md: 4 }, // Responsive padding for left/right
            py: { xs: 4, sm: 6, md: 8, xl: 10 }, // Keep vertical padding
          }}
        >
          <HeroSection />
          <EntertainmentSection />
          <EventsSection />
          <NewsSection />
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default LandingPage;