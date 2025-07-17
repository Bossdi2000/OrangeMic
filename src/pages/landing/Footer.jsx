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
      { name: 'Home', href: '#home' },
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
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' }
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Community Members' },
    { icon: Mic, value: '500+', label: 'Interviews Conducted' },
    { icon: Calendar, value: '50+', label: 'Events Hosted' }
  ];

  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
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
        padding: '60px 20px 0',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
            padding: '40px',
            paddingTop: '30px',
            paddingBottom: '30px',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 107, 53, 0.2)'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#ff6b35'
          }}>
            Stay Connected with Sign Dynasty
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#ccc',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Get the latest updates on our interviews, events, and community stories delivered to your inbox
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                padding: '12px 20px',
                borderRadius: '25px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1rem',
                minWidth: '300px',
                outline: 'none'
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 25px',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
            textAlign: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }} // Fixed the syntax error here
              style={{
                padding: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <stat.icon size={40} style={{ color: '#ff6b35', marginBottom: '15px' }} />
              <h4 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#ff6b35',
                marginBottom: '10px'
              }}>
                {stat.value}
              </h4>
              <p style={{ color: '#ccc', fontSize: '1rem' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#ff6b35',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px'
              }}>
                <Mic size={24} color="white" />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: 'white'
              }}>
                ORANGE MIC
              </h3>
            </div>
            <p style={{
              color: '#ccc',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Amplifying voices, sharing stories, and building community connections through authentic street interviews and entertainment.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '40px',
                    height: '40px',
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
                  <social.icon size={18} color={social.color} />
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
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ff6b35'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  style={{ marginBottom: '10px' }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: '#ccc',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease'
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
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ff6b35'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  style={{ marginBottom: '10px' }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: '#ccc',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease'
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
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ff6b35'
            }}>
              Resources
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  style={{ marginBottom: '10px' }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: '#ccc',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease'
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
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ff6b35'
            }}>
              Contact Us
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#ff6b35" />
                <a
                  href="mailto:contact@signmic.com"
                  style={{
                    color: '#ccc',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  contact@signmic.com
                </a>
              </li>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#ff6b35" />
                <a
                  href="tel:+1234567890"
                  style={{
                    color: '#ccc',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ff6b35'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="#ff6b35" />
                <span style={{ color: '#ccc', fontSize: '1rem' }}>
                  123 Community Street, City, Country
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
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Heart size={18} color="#ff6b35" />
            <span style={{
              color: '#ccc',
              fontSize: '0.9rem'
            }}>
              © {currentYear} Sign Mic. All rights reserved.
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#ff6b35',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;