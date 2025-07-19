"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Play, Image, FileText, Heart } from "lucide-react"

const EntertainmentSection = () => {
  const [activeTab, setActiveTab] = useState("videos")
  const [expandedArticle, setExpandedArticle] = useState(null)

  const entertainmentData = useMemo(
    () => ({
      videos: [
        {
          id: 1,
          role: "IRL EVENT Interview",
          title: "Interview with the KING OF SIGN DYNASTY (TAJUDEEN)",
          thumbnail: "/AMA2-poster.jpg",
          videoSrc: "/AMA2.mp4",
          duration: "12:45",
          date: "2024-07-15",
          views: "2.5K",
          likes: 120,
        },
        {
          id: 2,
          title: "Street Performance Special",
          thumbnail: "/AMA3-poster.jpg",
          videoSrc: "/AMA3.mp4",
          duration: "8:32",
          date: "2024-07-12",
          views: "1.8K",
          likes: 85,
        },
        {
          id: 3,
          title: "Sign Dynasty Behind the Scenes",
          thumbnail: "/AMA4-poster.jpg",
          videoSrc: "/AMA4.mp4",
          duration: "15:20",
          date: "2024-07-10",
          views: "3.2K",
          likes: 250,
        },
        {
          id: 4,
          title: "Community Spotlight Interview",
          thumbnail: "/AMA2-poster.jpg",
          videoSrc: "/AMA2.mp4",
          duration: "10:15",
          date: "2024-07-08",
          views: "1.5K",
          likes: 70,
        },
      ],
      images: [
        {
          id: 1,
          title: "Sign Dynasty Event Highlights",
          src: "/AMA5.jpeg",
          date: "2024-07-15",
          likes: 156,
        },
        {
          id: 2,
          title: "Interview Setup",
          src: "/AMA6.jpeg",
          date: "2024-07-12",
          likes: 89,
        },
        {
          id: 3,
          title: "Street Performance",
          src: "/AMA7.jpeg",
          date: "2024-07-10",
          likes: 203,
        },
        {
          id: 4,
          title: "Community Gathering",
          src: "/AMA8.jpeg",
          date: "2024-07-08",
          likes: 145,
        },
      ],
      articles: [
        {
          id: 1,
          title: "Sign Dynasty: Uniting Communities Through Art",
          excerpt: "Discover how Sign Dynasty is transforming public spaces with vibrant street art and community-driven initiatives...",
          date: "2024-07-15",
          readTime: "6 min read",
          category: "Art & Culture",
          likes: 45,
          content: `🎨 The Canvas of Connection: Sign Dynasty's Artistic Revolution

The streets are alive with color, stories, and connection, thanks to Sign Dynasty's relentless mission to transform urban spaces into vibrant canvases. This isn't just about paint on walls—it's about creating shared experiences that resonate across communities.

At the heart of Sign Dynasty's movement is the belief that art can bridge divides. From bustling city corners to quiet suburban streets, their murals tell stories of resilience, identity, and hope. The recent "Art in the Streets" event brought together local artists, musicians, and storytellers, turning a simple park into a celebration of creativity.

What makes this community special is its inclusivity. Whether you're a seasoned artist or someone picking up a paintbrush for the first time, Sign Dynasty welcomes you. Their workshops empower individuals to express themselves, fostering a sense of belonging that transcends digital spaces.

From collaborating with Web3 creators to hosting IRL events, Sign Dynasty is redefining how we connect through art. The energy of their latest gathering, filled with laughter, music, and shared stories, proved that creativity is a universal language.

This is more than a movement—it's a dynasty built on passion, connection, and the power of art. Let's keep painting the future together.`
        },
        {
          id: 2,
          title: "Voices of the Streets: The Power of Sign Interviews",
          excerpt: "Exploring the impact of Sign Dynasty's street interviews in amplifying untold stories and fostering community dialogue...",
          date: "2024-07-10",
          readTime: "5 min read",
          category: "Community Voices",
          likes: 60,
          content: `🎙️ Amplifying the Unheard: Sign Dynasty's Street Interviews

In a world filled with noise, Sign Dynasty's street interviews cut through with authenticity and heart. These impromptu conversations, captured on bustling city sidewalks, give a platform to voices that are often overlooked.

The "Voices of the Streets" series has become a cornerstone of the Sign Dynasty community, showcasing stories from everyday people—vendors, artists, passersby—who share their dreams, struggles, and triumphs. Each interview is a snapshot of humanity, raw and unfiltered, reminding us of the power of listening.

What sets these interviews apart is their spontaneity. Armed with an orange microphone and genuine curiosity, Sign Dynasty's interviewers create safe spaces for people to open up. The result? Stories that inspire, challenge, and connect us.

From a street vendor's journey to a young artist's vision for Web3, these conversations are building bridges across communities. The recent IRL event, where interviewees met their audience in person, was a testament to the impact of these stories—turning strangers into allies.

Sign Dynasty isn't just amplifying voices; it's creating a movement where everyone has a story worth sharing.`
        }
      ],
    }),
    []
  )

  const tabVariants = {
    inactive: {
      backgroundColor: "transparent",
      color: "#666",
      borderBottom: "2px solid transparent",
    },
    active: {
      backgroundColor: "#FF6B00",
      color: "white",
      borderBottom: "2px solid #FF6B00",
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id)
  }

  return (
    <>
      <section className="entertainment-section">
        <div className="overlay" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="header"
          >
            <h2 className="title">Entertainment Hub</h2>
            <p className="subtitle">
              Discover our collection of interviews, performances, and stories from the Sign Dynasty community
            </p>
          </motion.div>

          <div className="tab-navigation">
            {["videos", "images", "articles"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variants={tabVariants}
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab === "videos" && <Play size={16} className="tab-icon" />}
                {tab === "images" && <Image size={16} className="tab-icon" />}
                {tab === "articles" && <FileText size={16} className="tab-icon" />}
                {tab}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {activeTab === "videos" && (
              <div className="content-grid">
                {entertainmentData.videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="content-card"
                  >
                    <div className="video-container">
                      <video
                        src={video.videoSrc}
                        poster={video.thumbnail}
                        title={video.title}
                        controls
                        loading="lazy"
                        className="video-element"
                        onError={(e) => {
                          console.error(`Failed to load video: ${video.videoSrc}`)
                          e.target.poster = "/placeholder.svg?height=300&width=400"
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="duration-badge">{video.duration}</div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{video.title}</h3>
                      <div className="card-meta">
                        <span className="likes">
                          <Heart size={16} /> {video.likes} likes
                        </span>
                        <span className="date">{video.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "images" && (
              <div className="content-grid">
                {entertainmentData.images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="content-card"
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      loading="lazy"
                      className="image-element"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image.src}`)
                        e.target.src = "/placeholder.svg?height=270&width=300"
                      }}
                    />
                    <div className="card-content">
                      <h3 className="card-title">{image.title}</h3>
                      <div className="card-meta">
                        <span className="likes">
                          <Heart size={16} /> {image.likes} likes
                        </span>
                        <span className="date">{image.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "articles" && (
              <div className="content-grid articles-grid">
                {entertainmentData.articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="content-card article-card"
                  >
                    <div className="category-badge">{article.category}</div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">
                      {expandedArticle === article.id ? article.content : article.excerpt}
                    </p>
                    <div className="article-meta">
                      <span className="likes">
                        <Heart size={16} /> {article.likes} likes
                      </span>
                      <span className="read-time">{article.readTime}</span>
                      <span className="date">{article.date}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="read-more-btn"
                      onClick={() => toggleArticle(article.id)}
                    >
                      {expandedArticle === article.id ? "Show Less" : "Read More"}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .entertainment-section {
          padding: 4rem 0;
          min-height: 100vh;
          position: relative;
          background-image: url(/AMA1.jpeg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.7);
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: bold;
          color: #FF6B00;
          margin-bottom: 1.25rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          font-family: Poppins, sans-serif;
          line-height: 1.2;
        }

        .subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: #333;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid #e0e0e0;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tab-button {
          padding: clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.75rem);
          margin: 0 0.25rem;
          border: none;
          border-radius: 25px 25px 0 0;
          font-size: clamp(0.875rem, 2vw, 1.1rem);
          font-weight: 600;
          cursor: pointer;
          text-transform: capitalize;
          transition: all 0.3s ease;
          background-color: transparent;
          color: #666;
          border-bottom: 2px solid transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: Poppins, sans-serif;
          white-space: nowrap;
        }

        .tab-button.active {
          background-color: #FF6B00;
          color: white;
          border-bottom: 2px solid #FF6B00;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .tab-icon {
          width: clamp(14px, 3vw, 16px);
          height: clamp(14px, 3vw, 16px);
          flex-shrink: 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(1rem, 3vw, 1.875rem);
        }

        .articles-grid {
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
        }

        .content-card {
          background-color: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 100%;
        }

        .article-card {
          padding: clamp(1rem, 3vw, 1.5625rem);
        }

        .video-container {
          position: relative;
          width: 100%;
        }

        .video-element {
          width: 100%;
          height: clamp(180px, 25vw, 320px);
          object-fit: cover;
          display: block;
        }

        .image-element {
          width: 100%;
          height: clamp(200px, 25vw, 270px);
          object-fit: cover;
          display: block;
        }

        .duration-badge {
          position: absolute;
          bottom: 0.625rem;
          right: 0.625rem;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: clamp(0.7rem, 1.5vw, 0.8rem);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .card-content {
          padding: clamp(0.75rem, 2vw, 0.9375rem);
        }

        .card-title {
          font-size: clamp(0.9rem, 2.5vw, 1.2rem);
          font-weight: 600;
          margin-bottom: 0.625rem;
          color: #333;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
          line-height: 1.3;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #666;
          font-size: clamp(0.75rem, 1.8vw, 0.9rem);
          font-family: Poppins, sans-serif;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .likes {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .category-badge {
          display: inline-block;
          background-color: #FF6B00;
          color: white;
          padding: 0.3125rem 0.9375rem;
          border-radius: 20px;
          font-size: clamp(0.7rem, 1.5vw, 0.8rem);
          font-weight: 600;
          margin-bottom: 0.9375rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .article-title {
          font-size: clamp(1rem, 3vw, 1.4rem);
          font-weight: 700;
          margin-bottom: 0.9375rem;
          color: #333;
          line-height: 1.4;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .article-excerpt {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          font-size: clamp(0.85rem, 2vw, 1rem);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          font-family: Poppins, sans-serif;
        }

        .article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999;
          font-size: clamp(0.75rem, 1.8vw, 0.9rem);
          flex-wrap: wrap;
          gap: 0.625rem;
          font-family: Poppins, sans-serif;
        }

        .read-more-btn {
          margin-top: 1.25rem;
          padding: clamp(0.5rem, 2vw, 0.625rem) clamp(1rem, 3vw, 1.25rem);
          background-color: #FF6B00;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          font-size: clamp(0.85rem, 2vw, 1rem);
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .read-more-btn:hover {
          background-color: #e55a00;
          transform: translateY(-2px);
        }

        /* Tablet adjustments */
        @media (max-width: 768px) {
          .entertainment-section {
            padding: 2.5rem 0;
            background-attachment: scroll;
          }
          
          .container {
            padding: 0 1rem;
          }
          
          .header {
            margin-bottom: 2.5rem;
          }
          
          .tab-navigation {
            margin-bottom: 2rem;
            gap: 0.25rem;
          }
          
          .tab-button {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
          
          .content-grid {
            gap: 1.25rem;
          }
          
          .article-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        /* Mobile specific adjustments */
        @media (max-width: 480px) {
          .entertainment-section {
            padding: 2rem 0;
            background-image: url(/AMA1-mobile.jpeg);
          }
          
          .container {
            padding: 0 0.75rem;
          }
          
          .header {
            margin-bottom: 2rem;
          }
          
          .tab-navigation {
            justify-content: space-around;
            margin-bottom: 1.5rem;
          }
          
          .tab-button {
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.8rem;
            padding: 0.5rem 0.75rem;
          }
          
          .content-grid {
            gap: 1rem;
            grid-template-columns: 1fr;
          }
          
          .articles-grid {
            grid-template-columns: 1fr;
          }
          
          .card-content {
            padding: 0.75rem;
          }
          
          .article-card {
            padding: 1rem;
          }
        }

        /* Extra small screens */
        @media (max-width: 360px) {
          .tab-button {
            padding: 0.4rem 0.6rem;
            font-size: 0.75rem;
          }
          
          .tab-icon {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </>
  )
}

export default EntertainmentSection