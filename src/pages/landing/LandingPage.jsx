import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import EntertainmentSection from './EntertainmentSection';
import EventsSection from './EventsSection';
import Footer from './Footer';
import CollaborationPage from './CollaborationPage';

const LandingPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: {
          xs: 'url(/AMA1-mobile.jpeg)', // Optimized for mobile
          sm: 'url(/AMA1.jpeg)', // Full image for larger screens
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        position: 'relative',
        overflow: 'hidden',
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
            xs: 'rgba(255, 255, 255, 0.85)',
            md: 'rgba(255, 255, 255, 0.7)',
          },
          zIndex: 1,
        }}
      />
      {/* Content wrapper */}
      <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
          <div id="home">
            <HeroSection />
          </div>
          <div id="entertainment">
            <EntertainmentSection />
          </div>
          <div id="events">
            <EventsSection />
          </div>
          <div id="collaboration">
            <CollaborationPage />
          </div>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default LandingPage;