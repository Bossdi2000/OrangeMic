"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Tag, Users, Briefcase, Palette } from "lucide-react"

const CollaborationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedCollabId, setExpandedCollabId] = useState(null)

  const collaborationData = [
    {
      id: 1,
      title: "COC: Sign News and Entertainments",
      excerpt:
        "Becoming the central news and media hub of the Sign ecosystem—capturing culture, innovation, and evolution of our collective journey through high-quality, community-driven storytelling.",
      content:
        "Sometimes, connections spark in the most unexpected ways and for me, it all began with a passion and a mic. I never imagined that simply wanting to share my vision for The Orange Mic would lead me into a larger world of media, community, and impactful storytelling.\n\nBut that’s exactly what happened when I met Jus Hemmy, one of the brilliant co-founders of Sign News and Entertainment. At first, I reached out to him purely with the intention of introducing the Orange Mic—a platform I created to amplify community voices, host meaningful conversations, and cover real-time events with energy, passion, and authenticity. I didn’t know who he truly was in the Sign ecosystem; I just wanted to share my dream.\n\nWhat I didn’t know was that Sign News and Entertainment was already taking form, founded by JusHemmy and his partner Farmie. After our conversation, he told me something that gave me chills he saw potential. He said, “You have something powerful here, and I know exactly where you'd fit in.” That was the beginning of something special.\n\nThe Orange Mic became an extension of the Sign News brand. With my energy, drive, and love for community, I found myself representing the media arm of the Sign Network in a bold, fresh way. Whether it's covering IRL events, hosting spaces, or simply creating content that makes people feel seen and heard, I now proudly wear the Orange Mic as my badge and tool of expression.\n\nTogether, we’ve covered live events, interviewed builders, amplified stories, and connected deeply with people in the Sign ecosystem and beyond. And the best part? It’s all love, support, and winning energy in this team.\n\nToday, I’m proud to say we both have our independent platforms. The Orange Mic has its own website, and Sign News and Entertainment has theirs—but we’re beautifully affiliated, building something that uplifts creators, communities, and culture. It’s more than content. It’s family. It’s growth. It’s the start of a powerful media legacy. Amari, Founder of The Orange Mic 🎤🧡 Part of the Sign News & Entertainment Family, Grateful for the Family and the entire Team members.",
      image: "/NEWS.jpg",
      category: "partnership",
      collaborator: "Sign Ecosystem",
      date: "2024-07-16",
      duration: "Ongoing",
      status: "Active",
      impact: "Web3 Media Hub",
      featured: true,
    },
    {
      id: 2,
      title: "Dynamic DAO: A Gift of Belonging",
      excerpt:
        "Through the Orange Mic, connecting with Dynamic DAO community—a forward-thinking collective championing inclusivity, innovation, and sustainable decentralization.",
      content:
        "Through the Orange Mic, I had the honor of connecting with the Dynamic DAO community—a forward-thinking collective championing inclusivity, innovation, and sustainable decentralization. What began as conversations turned into genuine connection, and recently, I was gifted a Dynamic DAO NFT. A powerful symbol of recognition and welcome. I wear it with pride, not just as an asset but as a badge of community and belonging. It's a reminder of what Web3 truly offers, not just technology, but human-powered networks where value is felt and shared.",
      image: "/DAO.jpeg",
      category: "nft",
      collaborator: "Dynamic DAO",
      date: "2024-07-14",
      duration: "Community Bond",
      status: "Launched",
      impact: "Belonging & Recognition",
      featured: true,
    },
    {
      id: 5,
      title: "Educational Workshop Series",
      excerpt:
        "Collaborative workshops with educational institutions to teach interview skills and community engagement techniques.",
      content:
        "In today's episode of The Orange Mic Space, we explored the hard truth behind the topic: “Entitlement is a Killer” and what a powerful session it was!\n\nWe welcomed a host of vibrant and intelligent voices from various communities, sharing deeply personal, thought-provoking, and practical takes. Our guest speakers, @Alpha and Wensy, didn’t just scratch the surface; they dived in deep with insight, balance, and real-life relevance.\n\nThe conversation began with understanding what entitlement truly means. We defined it as expecting something from others without earning or reciprocating value, a mindset that often stems from pride, misplaced expectations, or emotional dependence.\n\nKey Points Highlighted: 🔸 Pride as a Sign: It was stated that pride is a major red flag when someone is overly entitled. Instead of demanding, it’s better to earn your place, earn your value, and respect mutual effort. 🔸 Managing Expectations: Contributors like A2, Innospark, and Profit emphasized the need to lower unrealistic expectations. As humans, we all wrestle with entitlement in subtle ways — but we must learn to manage our reactions, practice emotional intelligence, and develop healthier responses. 🔸 Entitlement in Loyalty & Relationships: A crucial angle was the thin line between loyalty and entitlement. When loyalty becomes an unspoken debt or expectation, it loses its meaning. Boundaries and mutual understanding are key. 🔸 How Entitlement Destroys: The session also dissected how unchecked entitlement can ruin friendships, relationships, kill opportunities, stifle self-awareness, and even break community structures. 🔸 Gender Dynamics, A Real Talk: Things got real when we entered the gender and relationship segment. It was voiced that some women mistakenly believe that sex is their only value in a relationship and thus feel entitled to all benefits from their partner. Our gentlemen speakers shared boldly that entitlement without contribution is empty. Meanwhile, the ladies confidently stated that a woman who leans entirely on a man and does not bring value will find it hard to command genuine respect.\n\nFrom every angle, emotional, relational, social, and community - the conclusion was clear: Entitlement is not just unhealthy. It is a silent killer.\n\nFinal Thoughts This space was filled with real talk, deep thoughts, healthy arguments, and collective learning. It wasn’t just a conversation. it was a mirror held up for us to reflect, grow, and do better as individuals and as a community. Big shoutout to The Orange Mic Community for always holding space for these raw and authentic conversations and to our speakers and contributors who brought the 🔥 today. See you in the next space! Let’s keep building with purpose.",
      image: "/Kill.jpeg",
      category: "education",
      collaborator: "Local Universities",
      date: "2024-07-08",
      duration: "4 months",
      status: "Completed",
      impact: "200+ Students",
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Collaborations", icon: <Users size={16} /> },
    { value: "partnership", label: "COC", icon: <Briefcase size={16} /> },
    { value: "nft", label: "NFT Projects", icon: <Palette size={16} /> },
    { value: "education", label: "Education", icon: "📚" },
  ]

  const filteredCollabs = collaborationData.filter(
    (collab) => selectedCategory === "all" || collab.category === selectedCategory,
  )

  const featuredCollabs = collaborationData.filter((collab) => collab.featured)
  const regularCollabs = filteredCollabs.filter((collab) => !collab.featured)

  const getCategoryColor = (category) => {
    const colors = {
      partnership: "#ff6b35",
      nft: "#28a745",
      media: "#6f42c1",
      brand: "#fd7e14",
      education: "#0d6efd",
      tech: "#20c997",
    }
    return colors[category] || "#6c757d"
  }

  const getStatusColor = (status) => {
    const colors = {
      Active: "#28a745",
      Launched: "#ff6b35",
      Completed: "#6c757d",
      "In Progress": "#ffc107",
    }
    return colors[status] || "#6c757d"
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const clamp = (min, vw, max) => {
    if (typeof window === "undefined") return max
    return Math.min(max, Math.max(min, (vw * window.innerWidth) / 100))
  }

  const toggleExpand = (id) => {
    setExpandedCollabId(expandedCollabId === id ? null : id)
  }

  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 80px) 0",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(15px, 4vw, 20px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 8vw, 60px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "clamp(15px, 3vw, 20px)",
              lineHeight: "1.2",
            }}
          >
            Collaborations
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.2rem)",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: "0 10px",
            }}
          >
            Discover the partnerships, projects, and collaborations that bring our community vision to life
          </p>
        </motion.div>
        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "clamp(8px, 2vw, 15px)",
            marginBottom: "clamp(30px, 6vw, 50px)",
            padding: "0 5px",
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "clamp(8px, 2vw, 10px) clamp(12px, 3vw, 20px)",
                border: selectedCategory === category.value ? "2px solid #ff6b35" : "2px solid #e0e0e0",
                backgroundColor: selectedCategory === category.value ? "#ff6b35" : "white",
                color: selectedCategory === category.value ? "white" : "#333",
                borderRadius: "25px",
                fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "clamp(4px, 1vw, 8px)",
                whiteSpace: "nowrap",
              }}
            >
              {typeof category.icon === "string" ? (
                <span style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>{category.icon}</span>
              ) : (
                category.icon
              )}
              <span
                style={{
                  display:
                    typeof window !== "undefined" && window.innerWidth > 480
                      ? "inline"
                      : category.value === "all"
                        ? "inline"
                        : "none",
                }}
              >
                {category.value === "all"
                  ? category.label
                  : typeof window !== "undefined" && window.innerWidth > 768
                    ? category.label
                    : ""}
              </span>
            </motion.button>
          ))}
        </div>
        {/* Featured Collaborations */}
        {selectedCategory === "all" && featuredCollabs.length > 0 && (
          <div style={{ marginBottom: "clamp(40px, 8vw, 60px)" }}>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: "700",
                color: "#333",
                marginBottom: "clamp(20px, 4vw, 30px)",
                textAlign: "center",
              }}
            >
              Featured Collaborations
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: "clamp(20px, 4vw, 30px)",
              }}
            >
              {featuredCollabs.map((collab, index) => (
                <motion.div
                  key={collab.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "clamp(15px, 3vw, 20px)",
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    border: "3px solid #ff6b35",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={collab.image || "/placeholder.svg"}
                      alt={collab.title}
                      style={{
                        width: "100%",
                        height: "clamp(180px, 25vw, 280px)",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "clamp(10px, 2vw, 20px)",
                        left: "clamp(10px, 2vw, 20px)",
                        backgroundColor: getCategoryColor(collab.category),
                        color: "white",
                        padding: "clamp(6px, 1.5vw, 8px) clamp(10px, 2.5vw, 16px)",
                        borderRadius: "20px",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        maxWidth: "calc(100% - 120px)",
                      }}
                    >
                      <Tag size={clamp(12, 2.5, 14)} />
                      <span
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {collab.category}
                      </span>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "clamp(10px, 2vw, 20px)",
                        right: "clamp(10px, 2vw, 20px)",
                        backgroundColor: "rgba(255, 107, 53, 0.9)",
                        color: "white",
                        padding: "clamp(6px, 1.5vw, 8px) clamp(10px, 2.5vw, 16px)",
                        borderRadius: "20px",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                        fontWeight: "600",
                      }}
                    >
                      FEATURED
                    </div>
                  </div>
                  <div style={{ padding: "clamp(20px, 4vw, 30px)" }}>
                    <h3
                      style={{
                        fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)",
                        fontWeight: "700",
                        marginBottom: "clamp(10px, 2.5vw, 15px)",
                        color: "#333",
                        lineHeight: "1.4",
                      }}
                    >
                      {collab.title}
                    </h3>
                    <div
                      style={{
                        color: "#666",
                        lineHeight: "1.6",
                        marginBottom: "clamp(15px, 3vw, 20px)",
                        fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                      }}
                    >
                      {expandedCollabId === collab.id
                        ? collab.content.split("\n\n").map((paragraph, pIndex) => (
                            <p key={pIndex} style={{ marginBottom: "1em" }}>
                              {paragraph}
                            </p>
                          ))
                        : collab.excerpt}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(8px, 2vw, 12px)",
                        marginBottom: "clamp(15px, 3vw, 20px)",
                        fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#666",
                        }}
                      >
                        <User size={clamp(14, 2.5, 16)} />
                        <span style={{ fontWeight: "600" }}>Partner:</span>
                        <span>{collab.collaborator}</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "clamp(15px, 3vw, 20px)",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: getStatusColor(collab.status),
                          color: "white",
                          padding: "clamp(4px, 1vw, 6px) clamp(10px, 2vw, 12px)",
                          borderRadius: "15px",
                          fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                          fontWeight: "600",
                        }}
                      >
                        {collab.status}
                      </div>
                      <div
                        style={{
                          color: "#ff6b35",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                          fontWeight: "600",
                        }}
                      >
                        {collab.impact}
                      </div>
                    </div>
                    <motion.button
                      onClick={() => toggleExpand(collab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: "100%",
                        padding: "clamp(10px, 2.5vw, 12px) 20px",
                        backgroundColor: "#ff6b35",
                        color: "white",
                        border: "none",
                        borderRadius: "25px",
                        fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        minHeight: "44px",
                      }}
                    >
                      {expandedCollabId === collab.id ? "Show Less" : "View Details"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        {/* Regular Collaborations */}
        <div>
          {selectedCategory !== "all" && (
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: "700",
                color: "#333",
                marginBottom: "clamp(20px, 4vw, 30px)",
                textAlign: "center",
              }}
            >
              {categories.find((cat) => cat.value === selectedCategory)?.label}
            </h3>
          )}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "clamp(20px, 4vw, 30px)",
            }}
          >
            {(selectedCategory === "all" ? regularCollabs : filteredCollabs).map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "clamp(12px, 2.5vw, 15px)",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={collab.image || "/placeholder.svg"}
                    alt={collab.title}
                    style={{
                      width: "100%",
                      height: "clamp(160px, 20vw, 200px)",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "clamp(10px, 2vw, 15px)",
                      left: "clamp(10px, 2vw, 15px)",
                      backgroundColor: getCategoryColor(collab.category),
                      color: "white",
                      padding: "clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)",
                      borderRadius: "15px",
                      fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    {collab.category}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "clamp(10px, 2vw, 15px)",
                      right: "clamp(10px, 2vw, 15px)",
                      backgroundColor: getStatusColor(collab.status),
                      color: "white",
                      padding: "clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)",
                      borderRadius: "15px",
                      fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)",
                      fontWeight: "600",
                    }}
                  >
                    {collab.status}
                  </div>
                </div>
                <div style={{ padding: "clamp(20px, 4vw, 25px)" }}>
                  <h3
                    style={{
                      fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
                      fontWeight: "700",
                      marginBottom: "clamp(10px, 2vw, 12px)",
                      color: "#333",
                      lineHeight: "1.4",
                    }}
                  >
                    {collab.title}
                  </h3>
                  <div
                    style={{
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "clamp(12px, 2.5vw, 15px)",
                      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    }}
                  >
                    {expandedCollabId === collab.id
                      ? collab.content.split("\n\n").map((paragraph, pIndex) => (
                          <p key={pIndex} style={{ marginBottom: "1em" }}>
                            {paragraph}
                          </p>
                        ))
                      : collab.excerpt}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "clamp(6px, 1.5vw, 8px)",
                      marginBottom: "clamp(12px, 2.5vw, 15px)",
                      fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                      color: "#666",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <User size={clamp(12, 2, 14)} />
                      <span style={{ fontWeight: "600" }}>Partner:</span>
                      <span>{collab.collaborator}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "clamp(12px, 2.5vw, 15px)",
                    }}
                  >
                    <div
                      style={{
                        color: "#ff6b35",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                        fontWeight: "600",
                      }}
                    >
                      {collab.impact}
                    </div>
                    <div
                      style={{
                        color: "#999",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                      }}
                    >
                      {formatDate(collab.date)}
                    </div>
                  </div>
                  <motion.button
                    onClick={() => toggleExpand(collab.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: "100%",
                      padding: "clamp(8px, 2vw, 10px) 15px",
                      backgroundColor: "#ff6b35",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      minHeight: "40px",
                    }}
                  >
                    {expandedCollabId === collab.id ? "Show Less" : "View Details"}
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
              textAlign: "center",
              padding: "clamp(40px, 10vw, 60px) 20px",
              color: "#666",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                marginBottom: "10px",
              }}
            >
              No collaborations found
            </h3>
            <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
              Try selecting a different category to see more collaborations.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default CollaborationPage
