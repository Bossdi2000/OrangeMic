// pages/landing/LandingPage.jsx
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
 backgroundImage: 'url(/AMA1.jpeg)', // Single background for entire page
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 backgroundAttachment: 'fixed', // Optional: fixed background
 position: 'relative',
 overflowX: 'hidden',
 }}
 >
 <Box
 sx={{
 position: 'absolute',
 top: 0,
 left: 0,
 right: 0,
 bottom: 0,
 backgroundColor: 'rgba(255, 255, 255, 0.7)', // Overlay for readability
 zIndex: 1,
 }}
 />
 <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
 <Navbar />
 <Container
 maxWidth={false}
 sx={{
 width: '100%',
 py: { xs: 4, sm: 6, md: 8, xl: 10 },
 px: 0, // Allow full-width content
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