"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
      >
        <AppBar
          position="fixed"
          sx={{
            bgcolor: '#FF6B00',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <Toolbar
            sx={{
              maxWidth: 'lg', // Constrain width like Container
              width: '100%',
              mx: 'auto',
              px: { xs: 1, sm: 2, md: 3 }, // Responsive padding
              py: { xs: 1, sm: 1.5 }, // Responsive height
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Box
                sx={{
                  width: { xs: '28px', sm: '36px' }, // Responsive logo size
                  height: { xs: '28px', sm: '36px' },
                  bgcolor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Typography
                  sx={{
                    color: '#FF6B00',
                    fontSize: { xs: '16px', sm: '22px' }, // Responsive emoji size
                  }}
                >
                  🎤
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive title
                  fontWeight: 700,
                  fontFamily: "'Lobster', cursive",
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                ORANGE MIC
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            <Box
              className="desktop-nav"
              sx={{
                display: { xs: 'none', sm: 'flex' }, // Hide on mobile, show on larger screens
                flexGrow: 1,
                justifyContent: 'flex-end',
                gap: { xs: 1, sm: 2, md: 3 }, // Responsive spacing
              }}
            >
              {["Home", "Entertainment", "Events", "News"].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, // Responsive font
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      '&:hover': {
                        color: '#FED7AA',
                        textShadow: '0 0 8px rgba(255, 215, 170, 0.5)',
                      },
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <IconButton
                className="mobile-menu-button"
                onClick={toggleMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' }, // Show only on mobile
                  color: 'white',
                  bgcolor: 'transparent',
                  p: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#FED7AA',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </motion.div>
          </Toolbar>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: '#E55A00' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1, sm: 2 }, // Responsive gap
                    p: { xs: 2, sm: 3 }, // Responsive padding
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  {["Home", "Entertainment", "Events", "News"].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          textAlign: 'left',
                          justifyContent: 'flex-start',
                          '&:hover': {
                            color: '#FED7AA',
                            textShadow: '0 0 8px rgba(255, 215, 170, 0.5)',
                          },
                        }}
                      >
                        {item}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </AppBar>
      </motion.header>

      {/* Spacer to prevent content overlap with fixed header */}
      <Box sx={{ height: { xs: '56px', sm: '64px', md: '72px' } }} />
    </>
  );
};

export default Navbar;