import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 0,
      title: "SEX MYTHS STILL RULE OUR MINDS",
      date: "2025-08-05",
      time: null,
      location: "Twitter (X) Spaces",
      type: "workshop",
      status: "upcoming",
      image: "/UP1.jpeg",
      description: "From \"You can't get pregnant the first time\" to \"Size determines satisfaction,\" we've heard it all. But how many of these are actually medically true? Let's unlearn, relearn, and laugh a little while we're at it. Set your reminder.",
      eventLink: "https://x.com/Amari_metax/status/1948695995690483940?t=QpnoErlnyjIxWVz8mlwe4A&s=09"
    },
    {
      id: 1,
      title: "TO BE DISCUSSED",
      date: "2024-08-15",
      time: null,
      location: "Twitter (X) Spaces",
      type: "interview",
      status: "upcoming",
      image: "/AMA6.jpg",
      description: "Stay tuned for an exciting upcoming event. More details will be announced soon!",
    },
    {
      id: 2,
      title: "TO BE DISCUSSED",
      date: "2024-08-30",
      time: null,
      location: "Twitter (X) Spaces",
      type: "performance",
      status: "upcoming",
      image: "/AMA6.jpg",
      description: "Another exciting event is being planned. Keep an eye out for updates and announcements!",
    },
    {
      id: 3,
      title: "Men's Silence",
      date: "2024-07-20",
      time: "10:00 AM - 2:00 PM",
      location: "Twitter (X) Spaces",
      type: "workshop",
      status: "past",
      image: "/AMA7.jpg",
      description: "An insightful discussion exploring the complexities of men's emotional expression and communication patterns in modern society.",
      eventLink: "https://x.com/orangemic28/status/1941075709944070171?t=x4loHMEeJ11f6y-OtZbdDg&s=09"
    },
    {
      id: 6,
      title: "Why Ladies think they need to be naked before they're seen",
      date: "2024-07-18",
      time: "4:00 PM - 6:00 PM",
      location: "Twitter (X) Spaces",
      type: "community",
      status: "past",
      image: "/AMA8.jpg",
      description: "A thought-provoking conversation about societal expectations, self-expression, and the pressures women face in contemporary culture.",
      eventLink: "https://x.com/orangemic28/status/1943134871926288866?t=iUMiOJINRijUksAujAKBAw&s=09"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Events' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'past', label: 'Past Events' },
    { value: 'free', label: 'Free Events' }
  ];

  const filteredEvents = events.filter(event => {
    switch (selectedFilter) {
      case 'upcoming':
        return event.status === 'upcoming';
      case 'past':
        return event.status === 'past';
      case 'free':
        return true; // All events are free now
      default:
        return true;
    }
  });

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'interview':
        return '🎤';
      case 'performance':
        return '🎭';
      case 'community':
        return '👥';
      case 'workshop':
        return '📚';
      case 'collaboration':
        return '🤝';
      default:
        return '📅';
    }
  };

  const getStatusColor = (status) => {
    return status === 'upcoming' ? '#28a745' : '#6c757d';
  };

  const handleEventClick = (event) => {
    if (event.eventLink) {
      window.open(event.eventLink, '_blank');
    }
  };

  return (
    <section style={{
      padding: 'clamp(40px, 8vw, 80px) 0',
      backgroundColor: 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(15px, 4vw, 20px)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(40px, 8vw, 60px)' 
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 'clamp(15px, 3vw, 20px)',
            lineHeight: '1.2'
          }}>
            Upcoming Events
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: '0 10px'
          }}>
            Join us for exciting events, workshops, and community gatherings that celebrate stories and connections
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(10px, 2vw, 15px)',
          marginBottom: 'clamp(30px, 6vw, 50px)',
          padding: '0 10px'
        }}>
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: 'clamp(10px, 2vw, 12px) clamp(16px, 4vw, 24px)',
                border: selectedFilter === option.value ? '2px solid #ff6b35' : '2px solid #e0e0e0',
                backgroundColor: selectedFilter === option.value ? '#ff6b35' : 'white',
                color: selectedFilter === option.value ? 'white' : '#333',
                borderRadius: '25px',
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content'
              }}
            >
              {option.label}
            </motion.button>
          ))}
        </div>

        {/* Events Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(20px, 4vw, 30px)',
          padding: '0 5px'
        }}>
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{
                backgroundColor: 'white',
                borderRadius: 'clamp(15px, 3vw, 20px)',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0',
                width: '100%',
                maxWidth: '100%'
              }}
            >
              <div style={{ 
                position: 'relative',
                backgroundColor: '#f8f9fa',
                borderRadius: '0'
              }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 'clamp(10px, 2vw, 15px)',
                  right: 'clamp(10px, 2vw, 15px)',
                  backgroundColor: getStatusColor(event.status),
                  color: 'white',
                  padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 2.5vw, 14px)',
                  borderRadius: '20px',
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {event.status}
                </div>
                <div style={{
                  position: 'absolute',
                  top: 'clamp(10px, 2vw, 15px)',
                  left: 'clamp(10px, 2vw, 15px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: 'clamp(8px, 2vw, 10px) clamp(10px, 2.5vw, 14px)',
                  borderRadius: '20px',
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)'
                }}>
                  {getEventTypeIcon(event.type)}
                </div>
              </div>

              <div style={{ 
                padding: 'clamp(20px, 4vw, 25px)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                  fontWeight: '700',
                  marginBottom: 'clamp(12px, 3vw, 15px)',
                  color: '#333',
                  lineHeight: '1.4'
                }}>
                  {event.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 'clamp(8px, 2vw, 10px)',
                  color: '#666'
                }}>
                  <Calendar size={16} style={{ marginRight: '8px', flexShrink: 0 }} />
                  <span style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>{event.date}</span>
                </div>

                {event.time && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'clamp(8px, 2vw, 10px)',
                    color: '#666'
                  }}>
                    <Clock size={16} style={{ marginRight: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>{event.time}</span>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 'clamp(12px, 3vw, 15px)',
                  color: '#666'
                }}>
                  <MapPin size={16} style={{ marginRight: '8px', flexShrink: 0 }} />
                  <span style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>{event.location}</span>
                </div>

                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  marginBottom: 'clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)'
                }}>
                  {event.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEventClick(event)}
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 3vw, 15px) 20px',
                    backgroundColor: event.status === 'upcoming' ? '#ff6b35' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                    fontWeight: '600',
                    cursor: event.eventLink ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '48px'
                  }}
                >
                  {event.status === 'upcoming' ? 'Coming Soon' : 'Space Ended'}
                  {event.status === 'upcoming' && (
                    <ArrowRight size={16} style={{ marginLeft: '8px', flexShrink: 0 }} />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: 'clamp(40px, 10vw, 60px) 20px',
              color: '#666'
            }}
          >
            <Calendar size={48} style={{ marginBottom: '20px', color: '#ccc' }} />
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
              marginBottom: '10px' 
            }}>
              No events found
            </h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
              Try adjusting your filter to see more events.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;