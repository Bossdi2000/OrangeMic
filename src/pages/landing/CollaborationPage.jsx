import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Eye, MessageCircle, Share2, Clock, Tag, Users, Briefcase, Palette } from 'lucide-react';

const CollaborationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const collaborationData = [
    {
      id: 1,
      title: "Creative Partnership with Digital Artists Collective",
      excerpt: "A groundbreaking collaboration bringing together traditional storytelling with cutting-edge digital art to create immersive community experiences.",
      content: "Full collaboration details would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Digital+Artists",
      category: "partnership",
      collaborator: "Digital Artists Collective",
      date: "2024-07-16",
      duration: "6 months",
      status: "Active",
      impact: "Community Engagement",
      featured: true
    },
    {
      id: 2,
      title: "NFT Collection: Voices of the Street",
      excerpt: "An exclusive NFT series capturing authentic moments and stories from our street interview series, bridging traditional media with Web3.",
      content: "Full project details would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=NFT+Collection",
      category: "nft",
      collaborator: "Blockchain Studios",
      date: "2024-07-14",
      duration: "3 months",
      status: "Launched",
      impact: "500+ Mints",
      featured: true
    },
    {
      id: 3,
      title: "Community Podcast Series Collaboration",
      excerpt: "Partnering with local podcast networks to amplify community voices through long-form storytelling and authentic conversations.",
      content: "Full collaboration details would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Podcast+Series",
      category: "media",
      collaborator: "Local Podcast Network",
      date: "2024-07-12",
      duration: "Ongoing",
      status: "Active",
      impact: "10k+ Listeners",
      featured: false
    },
    {
      id: 5,
      title: "Educational Workshop Series",
      excerpt: "Collaborative workshops with educational institutions to teach interview skills and community engagement techniques.",
      content: "Full program details would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Education+Program",
      category: "education",
      collaborator: "Local Universities",
      date: "2024-07-08",
      duration: "4 months",
      status: "Completed",
      impact: "200+ Students",
      featured: false
    },
  ];

  const categories = [
    { value: 'all', label: 'All Collaborations', icon: <Users size={16} /> },
    { value: 'partnership', label: 'Partnerships', icon: <Briefcase size={16} /> },
    { value: 'nft', label: 'NFT Projects', icon: <Palette size={16} /> },
    { value: 'education', label: 'Education', icon: '📚' },
  ];

  const filteredCollabs = collaborationData.filter(collab => 
    selectedCategory === 'all' || collab.category === selectedCategory
  );

  const featuredCollabs = collaborationData.filter(collab => collab.featured);
  const regularCollabs = filteredCollabs.filter(collab => !collab.featured);

  const getCategoryColor = (category) => {
    const colors = {
      partnership: '#ff6b35',
      nft: '#28a745',
      media: '#6f42c1',
      brand: '#fd7e14',
      education: '#0d6efd',
      tech: '#20c997'
    };
    return colors[category] || '#6c757d';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Active': '#28a745',
      'Launched': '#ff6b35',
      'Completed': '#6c757d',
      'In Progress': '#ffc107'
    };
    return colors[status] || '#6c757d';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const clamp = (min, vw, max) => {
    if (typeof window === 'undefined') return max;
    return Math.min(max, Math.max(min, (vw * window.innerWidth) / 100));
  };

  return (
    <section style={{
      padding: 'clamp(40px, 8vw, 80px) 0',
      backgroundColor: '#f8f9fa',
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
            Collaborations
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: '0 10px'
          }}>
            Discover the partnerships, projects, and collaborations that bring our community vision to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(8px, 2vw, 15px)',
          marginBottom: 'clamp(30px, 6vw, 50px)',
          padding: '0 5px'
        }}>
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 20px)',
                border: selectedCategory === category.value ? '2px solid #ff6b35' : '2px solid #e0e0e0',
                backgroundColor: selectedCategory === category.value ? '#ff6b35' : 'white',
                color: selectedCategory === category.value ? 'white' : '#333',
                borderRadius: '25px',
                fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(4px, 1vw, 8px)',
                whiteSpace: 'nowrap'
              }}
            >
              {typeof category.icon === 'string' ? (
                <span style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>{category.icon}</span>
              ) : (
                category.icon
              )}
              <span style={{ display: window.innerWidth > 480 ? 'inline' : category.value === 'all' ? 'inline' : 'none' }}>
                {category.value === 'all' ? category.label : window.innerWidth > 768 ? category.label : ''}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Featured Collaborations */}
        {selectedCategory === 'all' && featuredCollabs.length > 0 && (
          <div style={{ marginBottom: 'clamp(40px, 8vw, 60px)' }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              color: '#333',
              marginBottom: 'clamp(20px, 4vw, 30px)',
              textAlign: 'center'
            }}>
              Featured Collaborations
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(20px, 4vw, 30px)'
            }}>
              {featuredCollabs.map((collab, index) => (
                <motion.div
                  key={collab.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 'clamp(15px, 3vw, 20px)',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    border: '3px solid #ff6b35'
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={collab.image}
                      alt={collab.title}
                      style={{
                        width: '100%',
                        height: 'clamp(180px, 25vw, 280px)',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 'clamp(10px, 2vw, 20px)',
                      left: 'clamp(10px, 2vw, 20px)',
                      backgroundColor: getCategoryColor(collab.category),
                      color: 'white',
                      padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 2.5vw, 16px)',
                      borderRadius: '20px',
                      fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      maxWidth: 'calc(100% - 120px)'
                    }}>
                      <Tag size={clamp(12, 2.5, 14)} />
                      <span style={{ 
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {collab.category}
                      </span>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: 'clamp(10px, 2vw, 20px)',
                      right: 'clamp(10px, 2vw, 20px)',
                      backgroundColor: 'rgba(255, 107, 53, 0.9)',
                      color: 'white',
                      padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 2.5vw, 16px)',
                      borderRadius: '20px',
                      fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                      fontWeight: '600'
                    }}>
                      FEATURED
                    </div>
                  </div>
                  <div style={{ padding: 'clamp(20px, 4vw, 30px)' }}>
                    <h3 style={{
                      fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
                      fontWeight: '700',
                      marginBottom: 'clamp(10px, 2.5vw, 15px)',
                      color: '#333',
                      lineHeight: '1.4'
                    }}>
                      {collab.title}
                    </h3>
                    <p style={{
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      fontSize: 'clamp(0.9rem, 2.2vw, 1rem)'
                    }}>
                      {collab.excerpt}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(8px, 2vw, 12px)',
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px',
                        color: '#666'
                      }}>
                        <User size={clamp(14, 2.5, 16)} />
                        <span style={{ fontWeight: '600' }}>Partner:</span>
                        <span>{collab.collaborator}</span>
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px',
                        color: '#666'
                      }}>
                        <Calendar size={clamp(14, 2.5, 16)} />
                        <span style={{ fontWeight: '600' }}>Started:</span>
                        <span>{formatDate(collab.date)}</span>
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px',
                        color: '#666'
                      }}>
                        <Clock size={clamp(14, 2.5, 16)} />
                        <span style={{ fontWeight: '600' }}>Duration:</span>
                        <span>{collab.duration}</span>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 'clamp(15px, 3vw, 20px)'
                    }}>
                      <div style={{
                        backgroundColor: getStatusColor(collab.status),
                        color: 'white',
                        padding: 'clamp(4px, 1vw, 6px) clamp(10px, 2vw, 12px)',
                        borderRadius: '15px',
                        fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                        fontWeight: '600'
                      }}>
                        {collab.status}
                      </div>
                      <div style={{
                        color: '#ff6b35',
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                        fontWeight: '600'
                      }}>
                        {collab.impact}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '100%',
                        padding: 'clamp(10px, 2.5vw, 12px) 20px',
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        minHeight: '44px'
                      }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Collaborations */}
        <div>
          {selectedCategory !== 'all' && (
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              color: '#333',
              marginBottom: 'clamp(20px, 4vw, 30px)',
              textAlign: 'center'
            }}>
              {categories.find(cat => cat.value === selectedCategory)?.label}
            </h3>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 4vw, 30px)'
          }}>
            {(selectedCategory === 'all' ? regularCollabs : filteredCollabs).map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'clamp(12px, 2.5vw, 15px)',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={collab.image}
                    alt={collab.title}
                    style={{
                      width: '100%',
                      height: 'clamp(160px, 20vw, 200px)',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'clamp(10px, 2vw, 15px)',
                    left: 'clamp(10px, 2vw, 15px)',
                    backgroundColor: getCategoryColor(collab.category),
                    color: 'white',
                    padding: 'clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)',
                    borderRadius: '15px',
                    fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {collab.category}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: 'clamp(10px, 2vw, 15px)',
                    right: 'clamp(10px, 2vw, 15px)',
                    backgroundColor: getStatusColor(collab.status),
                    color: 'white',
                    padding: 'clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)',
                    borderRadius: '15px',
                    fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
                    fontWeight: '600'
                  }}>
                    {collab.status}
                  </div>
                </div>
                <div style={{ padding: 'clamp(20px, 4vw, 25px)' }}>
                  <h3 style={{
                    fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
                    fontWeight: '700',
                    marginBottom: 'clamp(10px, 2vw, 12px)',
                    color: '#333',
                    lineHeight: '1.4'
                  }}>
                    {collab.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
                  }}>
                    {collab.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)',
                    fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                    color: '#666'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={clamp(12, 2, 14)} />
                      <span style={{ fontWeight: '600' }}>Partner:</span>
                      <span>{collab.collaborator}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={clamp(12, 2, 14)} />
                      <span style={{ fontWeight: '600' }}>Duration:</span>
                      <span>{collab.duration}</span>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)'
                  }}>
                    <div style={{
                      color: '#ff6b35',
                      fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                      fontWeight: '600'
                    }}>
                      {collab.impact}
                    </div>
                    <div style={{
                      color: '#999',
                      fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)'
                    }}>
                      {formatDate(collab.date)}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '100%',
                      padding: 'clamp(8px, 2vw, 10px) 15px',
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      minHeight: '40px'
                    }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredCollabs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: 'clamp(40px, 10vw, 60px) 20px',
              color: '#666'
            }}
          >
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
              marginBottom: '10px' 
            }}>
              No collaborations found
            </h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
              Try selecting a different category to see more collaborations.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CollaborationPage;