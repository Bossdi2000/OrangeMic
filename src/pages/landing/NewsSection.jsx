import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Eye, MessageCircle, Share2, Clock, Tag } from 'lucide-react';

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsData = [
    {
      id: 1,
      title: "Sign Dynasty Launches New Community Initiative",
      excerpt: "SIGN MIC announces an exciting new program aimed at amplifying community voices through innovative street interviews and storytelling.",
      content: "Full article content would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Community+Initiative",
      category: "announcement",
      author: "SIGN MIC Team",
      date: "2024-07-16",
      readTime: "3 min read",
      views: 1250,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: "Street Interview Series Gains National Recognition",
      excerpt: "Our unique approach to community storytelling has caught the attention of media outlets nationwide, highlighting the power of authentic voices.",
      content: "Full article content would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=National+Recognition",
      category: "achievement",
      author: "Media Team",
      date: "2024-07-14",
      readTime: "5 min read",
      views: 2100,
      comments: 45,
      featured: false
    },
    {
      id: 3,
      title: "Behind the Scenes: Making Street Interviews Authentic",
      excerpt: "Discover the techniques and preparation that goes into creating genuine connections with people during street interviews.",
      content: "Full article content would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Behind+Scenes",
      category: "behind-scenes",
      author: "Production Team",
      date: "2024-07-12",
      readTime: "4 min read",
      views: 890,
      comments: 18,
      featured: false
    },
    {
      id: 4,
      title: "Community Impact: How Sign Dynasty Changed Lives",
      excerpt: "Real stories from community members whose lives were touched by participating in our interview series and events.",
      content: "Full article content would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Community+Impact",
      category: "impact",
      author: "Community Relations",
      date: "2024-07-10",
      readTime: "6 min read",
      views: 1560,
      comments: 67,
      featured: true
    },
    {
      id: 5,
      title: "Upcoming Events: What to Expect This Month",
      excerpt: "Get ready for an exciting lineup of events, workshops, and community gatherings planned for the rest of July.",
      content: "Full article content would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Upcoming+Events",
      category: "events",
      author: "Events Team",
      date: "2024-07-08",
      readTime: "3 min read",
      views: 950,
      comments: 34,
      featured: false
    },
    {
      id: 6,
      title: "Interview Skills Workshop: Key Takeaways",
      excerpt: "Highlights from our recent workshop on mastering the art of street interviews and connecting with strangers.",
      content: "Full article content would go here...",
      image: "https://via.placeholder.com/600x350/ff6b35/ffffff?text=Workshop+Takeaways",
      category: "education",
      author: "Workshop Facilitator",
      date: "2024-07-06",
      readTime: "4 min read",
      views: 720,
      comments: 12,
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All News', icon: '📰' },
    { value: 'announcement', label: 'Announcements', icon: '📢' },
    { value: 'achievement', label: 'Achievements', icon: '🏆' },
    { value: 'behind-scenes', label: 'Behind Scenes', icon: '🎬' },
    { value: 'impact', label: 'Community Impact', icon: '🌟' },
    { value: 'events', label: 'Events', icon: '🎉' },
    { value: 'education', label: 'Education', icon: '📚' }
  ];

  const filteredNews = newsData.filter(article => 
    selectedCategory === 'all' || article.category === selectedCategory
  );

  const featuredNews = newsData.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const getCategoryColor = (category) => {
    const colors = {
      announcement: '#ff6b35',
      achievement: '#28a745',
      'behind-scenes': '#6f42c1',
      impact: '#fd7e14',
      events: '#20c997',
      education: '#0d6efd'
    };
    return colors[category] || '#6c757d';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#f8f9fa',
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
            Latest News
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Stay updated with the latest developments, stories, and insights from the Sign Dynasty community
          </p>
        </motion.div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '50px'
        }}>
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 20px',
                border: selectedCategory === category.value ? '2px solid #ff6b35' : '2px solid #e0e0e0',
                backgroundColor: selectedCategory === category.value ? '#ff6b35' : 'white',
                color: selectedCategory === category.value ? 'white' : '#333',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Featured News */}
        {selectedCategory === 'all' && featuredNews.length > 0 && (
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#333',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Featured Stories
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '30px'
            }}>
              {featuredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    border: '3px solid #ff6b35'
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '280px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      backgroundColor: getCategoryColor(article.category),
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <Tag size={14} />
                      {article.category.replace('-', ' ')}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      backgroundColor: 'rgba(255, 107, 53, 0.9)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      FEATURED
                    </div>
                  </div>
                  <div style={{ padding: '30px' }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '15px',
                      color: '#333',
                      lineHeight: '1.4'
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      fontSize: '1rem'
                    }}>
                      {article.excerpt}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                      color: '#999',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <User size={14} />
                          {article.author}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Calendar size={14} />
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                      color: '#666',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Eye size={14} />
                          {article.views}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <MessageCircle size={14} />
                          {article.comments}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          padding: '8px 12px',
                          backgroundColor: 'transparent',
                          color: '#ff6b35',
                          border: '1px solid #ff6b35',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Share2 size={14} />
                      </motion.button>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '100%',
                        padding: '12px 20px',
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Read Full Story
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          {selectedCategory !== 'all' && (
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#333',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              {categories.find(cat => cat.value === selectedCategory)?.label} News
            </h3>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {(selectedCategory === 'all' ? regularNews : filteredNews).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: getCategoryColor(article.category),
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {article.category.replace('-', ' ')}
                  </div>
                </div>
                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: '#333',
                    lineHeight: '1.4'
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '15px',
                    fontSize: '0.95rem'
                  }}>
                    {article.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px',
                    color: '#999',
                    fontSize: '0.8rem'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <User size={12} />
                      {article.author}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={12} />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px',
                    color: '#666',
                    fontSize: '0.8rem'
                  }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Eye size={12} />
                        {article.views}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MessageCircle size={12} />
                        {article.comments}
                      </span>
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '100%',
                      padding: '10px 15px',
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#666'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No news found</h3>
            <p>Try selecting a different category to see more articles.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;