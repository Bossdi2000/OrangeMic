"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Play, ImageIcon, FileText, Heart } from "lucide-react"

const EntertainmentSection = () => {
  const [activeTab, setActiveTab] = useState("videos")
  const [expandedArticle, setExpandedArticle] = useState(null) // State to track expanded article

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

  // Function to toggle article expansion
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
                {tab === "images" && <ImageIcon size={16} className="tab-icon" />}
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
          padding: 80px 0;
          min-height: 100vh;
          position: relative;
          background-image: url(/AMA1.jpeg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100vw;
          margin: 0;
          left: 0;
          right: 0;
          box-sizing: border-box;
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
          padding: 0 50px 0 24px;
          position: relative;
          z-index: 2;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #FF6B00;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          font-family: Poppins, sans-serif;
        }

        .subtitle {
          font-size: 1.3rem;
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
          margin-bottom: 40px;
          border-bottom: 1px solid #e0e0e0;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tab-button {
          padding: 14px 28px;
          margin: 0 5px;
          border: none;
          border-radius: 25px 25px 0 0;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          text-transform: capitalize;
          transition: all 0.3s ease;
          background-color: transparent;
          color: #666;
          border-bottom: 2px solid transparent;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: Poppins, sans-serif;
        }

        .tab-button.active {
          background-color: #FF6B00;
          color: white;
          border-bottom: 2px solid #FF6B00;
          text-shadow: 1px158px 2px rgba(0, 0, 0, 0.2);
        }

        .tab-icon {
          width: 16px;
          height: 16px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 30px;
        }

        .articles-grid {
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
        }

        .content-card {
          background-color: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .article-card {
          padding: 25px;
        }

        .video-container {
          position: relative;
        }

        .video-element {
          width: 100%;
          height: 320px;
          object-fit: cover;
        }

        .image-element {
          width: 100%;
          max-width: 100%; /* Ensure images don't overflow */
          height: 270px;
          object-fit: cover;
        }

        .duration-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .card-content {
          padding: 15px;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #333;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #666;
          font-size: 0.9rem;
          font-family: Poppins, sans-serif;
        }

        .likes {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .category-badge {
          display: inline-block;
          background-color: #FF6B00;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .article-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #333;
          line-height: 1.4;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        .article-excerpt {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 1rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          font-family: Poppins, sans-serif;
        }

        .article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999;
          font-size: 0.9rem;
          flex-wrap: wrap;
          gap: 10px;
          font-family: Poppins, sans-serif;
        }

        .read-more-btn {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #FF6B00;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-family: Poppins, sans-serif;
        }

        /* Extra Large Screens (1280px+) */
        @media (min-width: 1280px) {
          .container {
            padding: 0 70px 0 24px;
          }
          .title {
            font-size: 3.5rem;
          }
          .subtitle {
            font-size: 1.3rem;
            max-width: 700px;
          }
          .content-grid {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          }
          .articles-grid {
            grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          }
          .video-element {
            height: 320px;
          }
          .image-element {
            height: 270px;
            max-width: 100%;
          }
          .tab-button {
            padding: 14px 28px;
            font-size: 1.1rem;
          }
          .card-title {
            font-size: 1.2rem;
          }
          .article-title {
            font-size: 1.4rem;
          }
        }

        /* Large Screens (1024px–1280px) */
        @media (max-width: 1280px) {
          .container {
            padding: 0 60px 0 20px;
          }
          .title {
            font-size: 3rem;
          }
          .subtitle {
            font-size: 1.2rem;
          }
          .content-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          }
          .articles-grid {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }
          .video-element {
            height: 300px;
          }
          .image-element {
            height: 270px;
            max-width: 100%;
          }
          .tab-button {
            padding: 12px 24px;
            font-size: 1rem;
          }
          .card-title {
            font-size: 1.1rem;
          }
          .article-title {
            font-size: 1.3rem;
          }
        }

        /* Tablet/Medium Screens (768px–1024px) */
        @media (max-width: 1024px) {
          .entertainment-section {
            padding: 60px 0;
          }
          .container {
            padding: 0 40px 0 15px;
          }
          .title {
            font-size: 2.5rem;
          }
          .subtitle {
            font-size: 1.1rem;
            max-width: 90%;
          }
          .content-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }
          .articles-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          }
          .video-element {
            height: 250px;
          }
          .image-element {
            height: 270px;
            max-width: 100%;
          }
          .tab-button {
            padding: 10px 20px;
            font-size: 0.95rem;
          }
          .card-title {
            font-size: 1rem;
          }
          .article-title {
            font-size: 1.2rem;
          }
          .article-excerpt {
            font-size: 0.9rem;
          }
          .card-meta,
          .article-meta {
            font-size: 0.85rem;
          }
          .read-more-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }

        /* Mobile/Small Screens (480px–768px) */
        @media (max-width: 768px) {
          .entertainment-section {
            padding: 40px 0;
          }
          .container {
            padding: 0 25px 0 10px;
          }
          .header {
            margin-bottom: 40px;
          }
          .title {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1rem;
          }
          .tab-navigation {
            margin-bottom: 30px;
            gap: 5px;
          }
          .tab-button {
            padding: 10px 16px;
            font-size: 0.9rem;
            margin: 0 2px;
          }
          .content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .video-element {
            height: 200px;
          }
          .image-element {
            height: 270px;
            max-width: 100%;
          }
          .card-content {
            padding: 12px;
          }
          .card-title {
            font-size: 0.9rem;
          }
          .article-card {
            padding: 20px;
          }
          .article-title {
            font-size: 1.1rem;
          }
          .article-excerpt {
            font-size: 0.85rem;
          }
          .article-meta {
            font-size: 0.8rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .read-more-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
          .duration-badge {
            font-size: 0.7rem;
            padding: 3px 6px;
          }
        }

        /* Extra Small Screens (<480px) */
        @media (max-width: 480px) {
          .entertainment-section {
            padding: 32px 0;
            background-image: url(/AMA1-mobile.jpeg);
          }
          .container {
            padding: 0 20px 0 8px;
          }
          .title {
            font-size: 1.8rem;
          }
          .subtitle {
            font-size: 0.9rem;
          }
          .tab-button {
            padding: 8px 12px;
            font-size: 0.8rem;
          }
          .video-element {
            height: 180px;
          }
          .image-element {
            height: 270px;
            max-width: 100%;
          }
          .card-title {
            font-size: 0.85rem;
          }
          .article-title {
            font-size: 1rem;
          }
          .article-excerpt {
            font-size: 0.8rem;
          }
          .card-meta,
          .article-meta {
            font-size: 0.75rem;
          }
          .read-more-btn {
            padding: 6px 12px;
            font-size: 0.85rem;
          }
          .duration-badge {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </>
  )
}

export default EntertainmentSection