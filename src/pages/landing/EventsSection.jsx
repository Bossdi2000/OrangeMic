import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Ticket, ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Sign Dynasty Street Interview Marathon",
      date: "2024-07-25",
      time: "2:00 PM - 6:00 PM",
      location: "Central Park, Abuja",
      type: "interview",
      status: "upcoming",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Interview+Marathon",
      attendees: 150,
      description: "Join us for an exciting day of street interviews where we'll be talking to diverse community members about their experiences and perspectives.",
      price: "Free"
    },
    {
      id: 2,
      title: "Sign Dynasty Live Performance",
      date: "2024-07-30",
      time: "7:00 PM - 10:00 PM",
      location: "Unity Park, FCT",
      type: "performance",
      status: "upcoming",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Live+Performance",
      attendees: 300,
      description: "Experience an electrifying live performance featuring local artists and interactive entertainment that brings the community together.",
      price: "₦2,000"
    },
    {
      id: 3,
      title: "Community Storytelling Night",
      date: "2024-08-05",
      time: "6:00 PM - 9:00 PM",
      location: "Cultural Center, Abuja",
      type: "community",
      status: "upcoming",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Storytelling+Night",
      attendees: 100,
      description: "An intimate evening where community members share their stories, experiences, and cultural narratives in a supportive environment.",
      price: "₦1,500"
    },
    {
      id: 4,
      title: "Sign Dynasty Workshop: Interview Skills",
      date: "2024-07-20",
      time: "10:00 AM - 2:00 PM",
      location: "Media Hub, Abuja",
      type: "workshop",
      status: "past",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Workshop",
      attendees: 75,
      description: "Learn the art of conducting engaging street interviews and storytelling techniques from our experienced team.",
      price: "₦3,000"
    },
    {
      id: 5,
      title: "Street Art & Interview Fusion",
      date: "2024-08-15",
      time: "3:00 PM - 7:00 PM",
      location: "Arts District, FCT",
      type: "collaboration",
      status: "upcoming",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Art+Fusion",
      attendees: 200,
      description: "A unique collaboration between street artists and Sign Dynasty, combining visual art with live interviews and performances.",
      price: "Free"
    },
    {
      id: 6,
      title: "Youth Voices Initiative",
      date: "2024-07-18",
      time: "4:00 PM - 6:00 PM",
      location: "Youth Center, Abuja",
      type: "community",
      status: "past",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Youth+Voices",
      attendees: 120,
      description: "Empowering young voices in our community through interviews and discussions about youth culture and aspirations.",
      price: "Free"
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
        return event.price === 'Free';
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

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>
            Upcoming Events
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Join us for exciting events, workshops, and community gatherings that celebrate stories and connections
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '50px'
        }}>
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 24px',
                border: selectedFilter === option.value ? '2px solid #ff6b35' : '2px solid #e0e0e0',
                backgroundColor: selectedFilter === option.value ? '#ff6b35' : 'white',
                color: selectedFilter === option.value ? 'white' : '#333',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {option.label}
            </motion.button>
          ))}
        </div>

        {/* Events Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '30px'
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
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: getStatusColor(event.status),
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {event.status}
                </div>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '8px 12px',
                  borderRadius: '20px',
                  fontSize: '1.2rem'
                }}>
                  {getEventTypeIcon(event.type)}
                </div>
              </div>

              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#333',
                  lineHeight: '1.4'
                }}>
                  {event.title}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  color: '#666'
                }}>
                  <Calendar size={16} style={{ marginRight: '8px' }} />
                  <span style={{ fontSize: '0.9rem' }}>{event.date}</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  color: '#666'
                }}>
                  <Clock size={16} style={{ marginRight: '8px' }} />
                  <span style={{ fontSize: '0.9rem' }}>{event.time}</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  color: '#666'
                }}>
                  <MapPin size={16} style={{ marginRight: '8px' }} />
                  <span style={{ fontSize: '0.9rem' }}>{event.location}</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px',
                  color: '#666'
                }}>
                  <Users size={16} style={{ marginRight: '8px' }} />
                  <span style={{ fontSize: '0.9rem' }}>{event.attendees} attendees</span>
                </div>

                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '0.95rem'
                }}>
                  {event.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#ff6b35'
                  }}>
                    <Ticket size={16} style={{ marginRight: '8px' }} />
                    <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                      {event.price}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    backgroundColor: event.status === 'upcoming' ? '#ff6b35' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: event.status === 'upcoming' ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  disabled={event.status === 'past'}
                >
                  {event.status === 'upcoming' ? 'Register Now' : 'Event Ended'}
                  {event.status === 'upcoming' && (
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
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
              padding: '60px 20px',
              color: '#666'
            }}
          >
            <Calendar size={48} style={{ marginBottom: '20px', color: '#ccc' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No events found</h3>
            <p>Try adjusting your filter to see more events.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;