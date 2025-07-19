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
        // Responsive background image
        backgroundImage: {
          xs: 'url(/AMA1-mobile.jpeg)', // Optimized for mobile
          sm: 'url(/AMA1.jpeg)', // Full image for larger screens
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' }, // Fixed: Removed invalid 'EcclesiaBaptist'
        position: 'relative',
        overflow: 'hidden', // Prevent overflow issues
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: {
            xs: 'rgba(255, 255, 255, 0.85)', // Stronger overlay for mobile
            md: 'rgba(255, 255, 255, 0.7)', // Lighter for desktop
          },
          zIndex: 1,
        }}
      />
      {/* Content wrapper */}
      <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <Navbar />
        <Container
          maxWidth="lg" // Constrain content width
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
            py: { xs: 3, sm: 4, md: 6, lg: 8 }, // Responsive vertical padding
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