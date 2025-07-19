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
            Latest News
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: '0 10px'
          }}>
            Stay updated with the latest developments, stories, and insights from the Sign Dynasty community
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
              <span style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>{category.icon}</span>
              <span style={{ display: window.innerWidth > 480 ? 'inline' : category.value === 'all' ? 'inline' : 'none' }}>
                {category.value === 'all' ? category.label : window.innerWidth > 768 ? category.label : ''}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Featured News */}
        {selectedCategory === 'all' && featuredNews.length > 0 && (
          <div style={{ marginBottom: 'clamp(40px, 8vw, 60px)' }}>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              color: '#333',
              marginBottom: 'clamp(20px, 4vw, 30px)',
              textAlign: 'center'
            }}>
              Featured Stories
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(20px, 4vw, 30px)'
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
                    borderRadius: 'clamp(15px, 3vw, 20px)',
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
                        height: 'clamp(180px, 25vw, 280px)',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 'clamp(10px, 2vw, 20px)',
                      left: 'clamp(10px, 2vw, 20px)',
                      backgroundColor: getCategoryColor(article.category),
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
                        {article.category.replace('-', ' ')}
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
                      {article.title}
                    </h3>
                    <p style={{
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      fontSize: 'clamp(0.9rem, 2.2vw, 1rem)'
                    }}>
                      {article.excerpt}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexDirection: window.innerWidth < 480 ? 'column' : 'row',
                      justifyContent: 'space-between',
                      alignItems: window.innerWidth < 480 ? 'flex-start' : 'center',
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      color: '#999',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      gap: window.innerWidth < 480 ? '8px' : '15px'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 'clamp(10px, 2vw, 15px)',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '5px',
                          whiteSpace: 'nowrap'
                        }}>
                          <User size={clamp(12, 2.5, 14)} />
                          {article.author}
                        </span>
                        <span style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '5px',
                          whiteSpace: 'nowrap'
                        }}>
                          <Calendar size={clamp(12, 2.5, 14)} />
                          {window.innerWidth < 480 ? 
                            new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) :
                            formatDate(article.date)
                          }
                        </span>
                      </div>
                      <span style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '5px',
                        whiteSpace: 'nowrap'
                      }}>
                        <Clock size={clamp(12, 2.5, 14)} />
                        {article.readTime}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      color: '#666',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                    }}>
                      <div style={{ display: 'flex', gap: 'clamp(15px, 3vw, 20px)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Eye size={clamp(12, 2.5, 14)} />
                          {article.views > 1000 ? `${(article.views/1000).toFixed(1)}k` : article.views}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <MessageCircle size={clamp(12, 2.5, 14)} />
                          {article.comments}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 2vw, 12px)',
                          backgroundColor: 'transparent',
                          color: '#ff6b35',
                          border: '1px solid #ff6b35',
                          borderRadius: '20px',
                          fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Share2 size={clamp(12, 2.5, 14)} />
                      </motion.button>
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
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              color: '#333',
              marginBottom: 'clamp(20px, 4vw, 30px)',
              textAlign: 'center'
            }}>
              {categories.find(cat => cat.value === selectedCategory)?.label} News
            </h3>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 4vw, 30px)'
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
                  borderRadius: 'clamp(12px, 2.5vw, 15px)',
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
                      height: 'clamp(160px, 20vw, 200px)',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'clamp(10px, 2vw, 15px)',
                    left: 'clamp(10px, 2vw, 15px)',
                    backgroundColor: getCategoryColor(article.category),
                    color: 'white',
                    padding: 'clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)',
                    borderRadius: '15px',
                    fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    maxWidth: 'calc(100% - 20px)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {article.category.replace('-', ' ')}
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
                    {article.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
                  }}>
                    {article.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 400 ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: window.innerWidth < 400 ? 'flex-start' : 'center',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)',
                    color: '#999',
                    fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                    gap: window.innerWidth < 400 ? '6px' : '10px'
                  }}>
                    <span style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '5px',
                      whiteSpace: 'nowrap'
                    }}>
                      <User size={clamp(10, 2, 12)} />
                      {article.author}
                    </span>
                    <span style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '5px',
                      whiteSpace: 'nowrap'
                    }}>
                      <Calendar size={clamp(10, 2, 12)} />
                      {window.innerWidth < 400 ? 
                        new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) :
                        formatDate(article.date)
                      }
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)',
                    color: '#666',
                    fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)'
                  }}>
                    <div style={{ display: 'flex', gap: 'clamp(12px, 2.5vw, 15px)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Eye size={clamp(10, 2, 12)} />
                        {article.views > 1000 ? `${(article.views/1000).toFixed(1)}k` : article.views}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MessageCircle size={clamp(10, 2, 12)} />
                        {article.comments}
                      </span>
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={clamp(10, 2, 12)} />
                      {article.readTime}
                    </span>
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
              padding: 'clamp(40px, 10vw, 60px) 20px',
              color: '#666'
            }}
          >
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
              marginBottom: '10px' 
            }}>
              No news found
            </h3>
            <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
              Try selecting a different category to see more articles.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Helper function for clamp values
const clamp = (min, vw, max) => {
  if (typeof window === 'undefined') return max;
  return Math.min(max, Math.max(min, (vw * window.innerWidth) / 100));
};

export default NewsSection;