// src/pages/landing/EntertainmentSection.jsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ImageIcon, FileText, Heart } from "lucide-react"

const EntertainmentSection = () => {
  const [activeTab, setActiveTab] = useState("videos")

  const entertainmentData = {
    videos: [
      {
        id: 1,
        role: "IRL EVENT Interview",
        title: "Interview with the KING OF SIGN DYNASTY (TAJUDEEN)",
        thumbnail: "/AMA2.mp4",
        duration: "12:45",
        date: "2024-07-15",
        views: "2.5K",
        likes: 120,
      },
      {
        id: 2,
        title: "Street Performance Special",
        thumbnail: "/AMA3.mp4",
        duration: "8:32",
        date: "2024-07-12",
        views: "1.8K",
        likes: 85,
      },
      {
        id: 3,
        title: "Sign Dynasty Behind the Scenes",
        thumbnail: "/AMA4.mp4",
        duration: "15:20",
        date: "2024-07-10",
        views: "3.2K",
        likes: 250,
      },
      {
        id: 4,
        title: "Community Spotlight Interview",
        thumbnail: "/AMA2.mp4",
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
        src: "/placeholder.svg?height=300&width=400",
        date: "2024-07-15",
        likes: 156,
      },
      {
        id: 2,
        title: "Interview Setup",
        src: "/placeholder.svg?height=300&width=400",
        date: "2024-07-12",
        likes: 89,
      },
      {
        id: 3,
        title: "Street Performance",
        src: "/placeholder.svg?height=300&width=400",
        date: "2024-07-10",
        likes: 203,
      },
      {
        id: 4,
        title: "Community Gathering",
        src: "/placeholder.svg?height=300&width=400",
        date: "2024-07-08",
        likes: 145,
      },
    ],
    articles: [
      {
        id: 1,
        title: "The Rise of Sign Dynasty: A Cultural Movement",
        excerpt:
          "Exploring how Sign Dynasty has become a voice for the community, bringing together diverse stories and perspectives through street interviews...",
        date: "2024-07-15",
        readTime: "5 min read",
        category: "Culture",
        likes: 45,
      },
      {
        id: 2,
        title: "Behind the Mic: The Art of Street Interviews",
        excerpt:
          "Learn about the techniques and approaches that make street interviews engaging and authentic, capturing real stories from real people...",
        date: "2024-07-12",
        readTime: "3 min read",
        category: "Entertainment",
        likes: 30,
      },
      {
        id: 3,
        title: "Community Voices: Impact of Street Entertainment",
        excerpt:
          "How street entertainment and impromptu interviews are changing the way we connect with our communities and share our stories...",
        date: "2024-07-10",
        readTime: "4 min read",
        category: "Community",
        likes: 60,
      },
    ],
  }

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

  return (
    <section
      style={{
        padding: "80px 0",
        minHeight: "100vh",
        position: "relative",
        backgroundImage: "url(/AMA1.jpeg)", // Added background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent White Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Matches HeroSection and EventsSection
          zIndex: 1,
        }}
      />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#FF6B00", // Changed for contrast
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Added for readability
            }}
          >
            Entertainment Hub
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#333", // Darker for contrast
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            Discover our collection of interviews, performances, and stories from the Sign Dynasty community
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
            borderBottom: "1px solid #e0e0e0",
            flexWrap: "wrap", // Added for responsiveness
            gap: "10px",
          }}
        >
          {["videos", "images", "articles"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variants={tabVariants}
              animate={activeTab === tab ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "12px 24px", // Adjusted for smaller screens
                margin: "0 5px",
                border: "none",
                borderRadius: "25px 25px 0 0",
                fontSize: "1rem", // Adjusted for responsiveness
                fontWeight: "600",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
                textShadow: activeTab === tab ? "1px 1px 2px rgba(0, 0, 0, 0.2)" : "none",
              }}
            >
              {tab === "videos" && <Play size={16} style={{ marginRight: "8px", display: "inline" }} />}
              {tab === "images" && <ImageIcon size={16} style={{ marginRight: "8px", display: "inline" }} />}
              {tab === "articles" && <FileText size={16} style={{ marginRight: "8px", display: "inline" }} />}
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {activeTab === "videos" && (
            <div
              className="content-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "30px",
              }}
            >
              {entertainmentData.videos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <video
                      src={video.thumbnail}
                      title={video.title}
                      controls
                      style={{
                        width: "100%",
                        height: "300px", // Adjusted for responsiveness
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        console.error(`Failed to load video: ${video.thumbnail}`);
                        e.target.poster = "https://via.placeholder.com/400x300";
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {video.duration}
                    </div>
                  </div>
                  <div style={{ padding: "15px" }}>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                        color: "#333",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {video.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Heart size={16} /> {video.likes} likes
                      </span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {activeTab === "images" && (
            <div
              className="content-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              {entertainmentData.images.map((image) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    style={{
                      width: "100%",
                      height: "250px", // Adjusted for responsiveness
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${image.src}`);
                      e.target.src = "/placeholder.svg?height=250&width=300";
                    }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                        color: "#333",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {image.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Heart size={16} /> {image.likes} likes
                      </span>
                      <span>{image.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {activeTab === "articles" && (
            <div
              className="content-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "30px",
              }}
            >
              {entertainmentData.articles.map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    padding: "25px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#FF6B00",
                      color: "white",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      marginBottom: "15px",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {article.category}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "15px",
                      color: "#333",
                      lineHeight: "1.4",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "#999",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Heart size={16} /> {article.likes} likes
                    </span>
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      marginTop: "20px",
                      padding: "10px 20px",
                      backgroundColor: "#FF6B00",
                      color: "white",
                      border: "none",
                      borderRadius: "25px",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Read More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Inline CSS for Responsive Design */}
      <style jsx>{`
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        @media (max-width: 1023px) {
          .content-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
          h2 {
            font-size: 2.5rem !important;
          }
          p {
            font-size: 1rem !important;
            max-width: 90% !important;
          }
          .content-grid > div {
            padding: 15px !important;
          }
          .content-grid video,
          .content-grid img {
            height: 250px !important;
          }
          .content-grid h3 {
            font-size: 1rem !important;
          }
          .content-grid p,
          .content-grid span {
            font-size: 0.85rem !important;
          }
          .content-grid button {
            padding: 8px 16px !important;
            font-size: 0.9rem !important;
          }
        }
        @media (max-width: 600px) {
          .content-grid {
            grid-template-columns: 1fr !important;
          }
          h2 {
            font-size: 2rem !important;
          }
          p {
            font-size: 0.9rem !important;
          }
          .content-grid video,
          .content-grid img {
            height: 200px !important;
          }
          .content-grid h3 {
            font-size: 0.9rem !important;
          }
          .content-grid p,
          .content-grid span {
            font-size: 0.8rem !important;
          }
          .content-grid button {
            padding: 8px 12px !important;
            font-size: 0.85rem !important;
          }
          .content-grid > div {
            padding: 10px !important;
          }
        }
        section {
          background-image: url(/AMA1.jpeg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (max-width: 600px) {
          section {
            background-image: url(/AMA1.jpeg); /* Use same image or add AMA1-mobile.jpeg */
          }
        }
      `}</style>
    </section>
  )
}

export default EntertainmentSection