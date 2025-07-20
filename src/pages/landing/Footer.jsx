import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Heart,
  ArrowUp,
  Mic,
  Users,
  Calendar,
  Send
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '/landingpage' },
      { name: 'About Us', href: '#about' },
      { name: 'Entertainment', href: '#entertainment' },
      { name: 'Events', href: '#events' },
      { name: 'News', href: '#news' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Street Interviews', href: '#interviews' },
      { name: 'Event Coverage', href: '#coverage' },
      { name: 'Community Stories', href: '#stories' },
      { name: 'Workshops', href: '#workshops' },
      { name: 'Collaborations', href: '#collaborations' }
    ],
    resources: [
      { name: 'Interview Tips', href: '#tips' },
      { name: 'Community Guidelines', href: '#guidelines' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'FAQ', href: '#faq' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/orangemic28', label: 'Twitter', color: '#1DA1F2' },
  ];

  const stats = [
    { icon: Users, value: '100+', label: 'Community Members' },
    { icon: Mic, value: '90+', label: 'Interviews Conducted' },
    { icon: Calendar, value: '50+', label: 'Events Hosted' }
  ];

  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(255, 107, 53, 0.1) 100%)',
        zIndex: 0
      }} />

      {/* Main Footer Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 16px 0',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            padding: '24px 16px',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 107, 53, 0.2)',
            boxSizing: 'border-box'
          }}
        >
          <h3 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 'bold',
            marginBottom: '12px',
            color: '#ff6b35',
            lineHeight: '1.2'
          }}>
            Stay Connected with Sign Dynasty
          </h3>
          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            color: '#ccc',
            marginBottom: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px',
            lineHeight: '1.5'
          }}>
            Get the latest updates on our interviews, events, and community stories delivered to your inbox
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexDirection: window.innerWidth <= 640 ? 'column' : 'row',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                padding: '12px 16px',
                borderRadius: '25px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                width: window.innerWidth <= 640 ? '100%' : '300px',
                maxWidth: '100%',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 20px',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                width: window.innerWidth <= 640 ? '100%' : 'auto',
                minWidth: window.innerWidth <= 640 ? 'auto' : '120px'
              }}
            >
              <Send size={16} />
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 640 ? '1fr' : 
                                window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 
                                'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '24px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <stat.icon size={window.innerWidth <= 640 ? 32 : 40} style={{ color: '#ff6b35', marginBottom: '12px' }} />
              <h4 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                color: '#ff6b35',
                marginBottom: '8px',
                lineHeight: '1.2'
              }}>
                {stat.value}
              </h4>
              <p style={{ 
                color: '#ccc', 
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                lineHeight: '1.4'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 640 ? '1fr' : 
                              window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 
                              window.innerWidth <= 1024 ? 'repeat(3, 1fr)' : 
                              'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '40px'
        }}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              gridColumn: window.innerWidth <= 768 ? '1 / -1' : 'auto'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px',
              justifyContent: window.innerWidth <= 640 ? 'center' : 'flex-start'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ff6b35',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
              }}>
                <Mic size={20} color="white" />
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                fontWeight: 'bold',
                color: 'white'
              }}>
                ORANGE MIC
              </h3>
            </div>
            <p style={{
              color: '#ccc',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              Amplifying voices, sharing stories, and building community connections through authentic street interviews and entertainment.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: window.innerWidth <= 640 ? 'center' : 'flex-start'
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textDecoration: 'none'
                  }}
                >
                  <social.icon size={16} color={social.color} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#ff6b35',
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: window.innerWidth <= 640 ? 0 : 5 }}
                  style={{ marginBottom: '8px' }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: '#ccc',
                      textDecoration: 'none',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      transition: 'color 0.3s ease',
                      lineHeight: '1.5'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                    onMouseLeave={(e) => e.target.style.color = '#ccc'}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h4 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#ff6b35',
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: window.innerWidth <= 640 ? 0 : 5 }}
                  style={{ marginBottom: '8px' }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: '#ccc',
                      textDecoration: 'none',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      transition: 'color 0.3s ease',
                      lineHeight: '1.5'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                    onMouseLeave={(e) => e.target.style.color = '#ccc'}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#ff6b35',
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              Resources
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: window.innerWidth <= 640 ? 0 : 5 }}
                  style={{ marginBottom: '8px' }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: '#ccc',
                      textDecoration: 'none',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      transition: 'color 0.3s ease',
                      lineHeight: '1.5'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                    onMouseLeave={(e) => e.target.style.color = '#ccc'}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h4 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#ff6b35',
              textAlign: window.innerWidth <= 640 ? 'center' : 'left'
            }}>
              Contact Us
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ 
                marginBottom: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                justifyContent: window.innerWidth <= 640 ? 'center' : 'flex-start',
                flexWrap: 'wrap'
              }}>
                <Mail size={16} color="#ff6b35" />
                <a
                  href="mailto:contact@signmic.com"
                  style={{
                    color: '#ccc',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    transition: 'color 0.3s ease',
                    lineHeight: '1.5'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  contact@orangemic.com
                </a>
              </li>
              <li style={{ 
                marginBottom: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                justifyContent: window.innerWidth <= 640 ? 'center' : 'flex-start',
                flexWrap: 'wrap'
              }}>
                <Phone size={16} color="#ff6b35" />
                <a
                  href="tel:+1234567890"
                  style={{
                    color: '#ccc',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    transition: 'color 0.3s ease',
                    lineHeight: '1.5'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  +234 -8105277335                </a>
              </li>
              <li style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                justifyContent: window.innerWidth <= 640 ? 'center' : 'flex-start',
                flexWrap: 'wrap'
              }}>
                <MapPin size={16} color="#ff6b35" />
                <span style={{ 
                  color: '#ccc', 
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  lineHeight: '1.5',
                  textAlign: window.innerWidth <= 640 ? 'center' : 'left'
                }}>
                  Orange dynasty Nigeria
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          flexDirection: window.innerWidth <= 640 ? 'column' : 'row'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            order: window.innerWidth <= 640 ? 2 : 1
          }}>
            <Heart size={16} color="#ff6b35" />
            <span style={{
              color: '#ccc',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              textAlign: 'center'
            }}>
              © {currentYear} Orange Mic. All rights reserved.
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#ff6b35',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              order: window.innerWidth <= 640 ? 1 : 2
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;