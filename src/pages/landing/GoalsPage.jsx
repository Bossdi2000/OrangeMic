import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Users, Heart, Zap, Target } from "lucide-react"

const GoalsPage = () => {
  const [screenSize, setScreenSize] = useState('desktop')

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setScreenSize('mobile')
      } else if (width <= 768) {
        setScreenSize('tablet')
      } else if (width <= 1024) {
        setScreenSize('laptop')
      } else {
        setScreenSize('desktop')
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const isMobile = screenSize === 'mobile'
  const isTablet = screenSize === 'tablet'
  const isSmallScreen = isMobile || isTablet

  const highlights = [
    "King of Sign himself",
    "Billibash.sign and Fossito.Sign",
    "Sign Gamers founder Queenfavy",
    "Sign Heroes and Army",
    "Trans TP, Sign Nigeria, Truth",
    "Bold Sign influencer Blackdami"
  ]

  const keyPoints = [
    {
      icon: <Users size={isSmallScreen ? 20 : 24} />,
      title: "Real Connections",
      description: "From pixels to personal bonds"
    },
    {
      icon: <Heart size={isSmallScreen ? 20 : 24} />,
      title: "Genuine Community",
      description: "Warm hugs and spontaneous smiles"
    },
    {
      icon: <Zap size={isSmallScreen ? 20 : 24} />,
      title: "Electric Energy",
      description: "Something magical happens IRL"
    },
    {
      icon: <Target size={isSmallScreen ? 20 : 24} />,
      title: "Building Dynasty",
      description: "Together in every space"
    }
  ]

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FAFAFA",
        fontFamily: "'Inter', 'Poppins', sans-serif",
        margin: "0",
        padding: "0",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #FF6B00 0%, #E55A00 100%)",
          padding: `${isMobile ? '80px' : isTablet ? '100px' : '120px'} 0 ${isMobile ? '60px' : isTablet ? '80px' : '100px'} 0`,
          color: "white",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: isMobile ? "-20%" : "-10%",
            width: isMobile ? "200px" : "300px",
            height: isMobile ? "200px" : "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: isMobile ? "-20%" : "-10%",
            width: isMobile ? "250px" : "400px",
            height: isMobile ? "250px" : "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            filter: "blur(120px)",
          }}
        />

        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: `0 ${isMobile ? '16px' : isTablet ? '24px' : '40px'}`,
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: `${isMobile ? '6px 16px' : '8px 20px'}`,
                borderRadius: "25px",
                marginBottom: isMobile ? '24px' : isTablet ? '28px' : '32px',
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '1rem',
                fontWeight: "500",
              }}
            >
              🧡 Our Goals & Vision
            </div>
            
            <h1
              style={{
                fontSize: isMobile ? '2.2rem' : isTablet ? '3rem' : screenSize === 'laptop' ? '3.5rem' : '4rem',
                fontWeight: "700",
                margin: `0 0 ${isMobile ? '16px' : '24px'} 0`,
                lineHeight: "1.1",
                background: "linear-gradient(45deg, #FFFFFF, #FFE4D1)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                wordBreak: "break-word",
              }}
            >
              Beyond the Screens
            </h1>
            
            <p
              style={{
                fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.4rem',
                margin: "0",
                opacity: "0.95",
                fontWeight: "400",
                maxWidth: "100%",
                lineHeight: "1.6",
                padding: `0 ${isMobile ? '8px' : '0'}`,
              }}
            >
              The Power of Physical Connection in the Sign Community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Points Grid */}
      <section
        style={{
          padding: `${isMobile ? '60px' : isTablet ? '80px' : '100px'} 0`,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: `0 ${isMobile ? '16px' : isTablet ? '24px' : '40px'}`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile 
                ? "1fr" 
                : isTablet 
                ? "repeat(2, 1fr)" 
                : "repeat(4, 1fr)",
              gap: isMobile ? '24px' : isTablet ? '32px' : '40px',
              marginBottom: isMobile ? '60px' : isTablet ? '80px' : '100px',
              width: "100%",
            }}
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  textAlign: "center",
                  padding: isMobile ? '20px' : isTablet ? '24px' : '32px',
                  borderRadius: "16px",
                  border: "1px solid #FFE4D1",
                  backgroundColor: "#FFFBF8",
                  transition: "all 0.3s ease",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 107, 0, 0.15)"
                  e.currentTarget.style.borderColor = "#FF6B00"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.borderColor = "#FFE4D1"
                }}
              >
                <div
                  style={{
                    width: isMobile ? "50px" : "60px",
                    height: isMobile ? "50px" : "60px",
                    borderRadius: "50%",
                    backgroundColor: "#FF6B00",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                  }}
                >
                  {point.icon}
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.3rem',
                    fontWeight: "600",
                    color: "#FF6B00",
                    margin: "0 0 8px 0",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '1rem',
                    color: "#666",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        style={{
          padding: `0 0 ${isMobile ? '60px' : isTablet ? '80px' : '100px'} 0`,
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: `0 ${isMobile ? '16px' : isTablet ? '24px' : '40px'}`,
          }}
        >
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              backgroundColor: "white",
              padding: isMobile ? '32px 24px' : isTablet ? '48px 32px' : '60px 48px',
              borderRadius: "24px",
              boxShadow: "0 8px 40px rgba(0, 0, 0, 0.08)",
              border: "1px solid #F5F5F5",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.25rem',
                lineHeight: "1.8",
                color: "#333",
                fontWeight: "400",
              }}
            >
              <p style={{ margin: `0 0 ${isMobile ? '20px' : isTablet ? '24px' : '32px'} 0` }}>
                There's something <strong style={{ color: "#FF6B00" }}>electric</strong> about finally stepping out from behind the screen and into a room filled with familiar usernames, voices, and profile pictures, now with faces, laughter, and warmth. The <strong>Sign IRL event</strong> wasn't just a meetup. It was a movement. A shift. A heartfelt leap from the virtual into the tangible.
              </p>

              <p style={{ margin: `0 0 ${isMobile ? '20px' : isTablet ? '24px' : '32px'} 0` }}>
                For so long, we've connected through pixels, voice chats, DMs, spaces, and endless reposts. But on that remarkable day, <em style={{ color: "#FF6B00", fontStyle: "normal", fontWeight: "600" }}>body language spoke, eye contact hit differently</em>, and shared laughter filled the air in ways no emoji ever could. Real conversations replaced text bubbles, and what once felt like distant admiration turned into genuine human bonds.
              </p>

              <div
                style={{
                  backgroundColor: "#FFFBF8",
                  border: "1px solid #FFE4D1",
                  borderLeft: "4px solid #FF6B00",
                  padding: isMobile ? '16px' : isTablet ? '20px' : '24px',
                  borderRadius: "0 12px 12px 0",
                  margin: `${isMobile ? '24px' : isTablet ? '32px' : '40px'} 0`,
                  fontStyle: "italic",
                  color: "#555",
                  fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.1rem',
                }}
              >
                <p style={{ margin: "0" }}>
                  "There were moments that simply couldn't be captured online — warm hugs, spontaneous smiles, and eyes lighting up in recognition. That's the magic of IRL: it deepens trust, inspires collaboration, and roots our digital bonds in something real."
                </p>
              </div>

              <p style={{ margin: `0 0 ${isMobile ? '20px' : isTablet ? '24px' : '32px'} 0` }}>
                Meeting fellow builders, creators, and community leaders was a major highlight — from the <strong style={{ color: "#FF6B00" }}>king of Sign himself</strong> to main organizers like <strong>Billibash.sign and Fossito.Sign</strong>. 
              </p>

              {/* Highlights Section */}
              <div
                style={{
                  backgroundColor: "white",
                  border: "1px solid #FFE4D1",
                  borderRadius: "16px",
                  padding: isMobile ? '20px' : isTablet ? '24px' : '32px',
                  margin: `${isMobile ? '24px' : isTablet ? '32px' : '40px'} 0`,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    color: "#FF6B00",
                    fontSize: isMobile ? '1.1rem' : isTablet ? '1.2rem' : '1.4rem',
                    fontWeight: "600",
                    margin: "0 0 20px 0",
                    textAlign: "center",
                  }}
                >
                  Community Leaders We Met
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "12px",
                    width: "100%",
                  }}
                >
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: isMobile ? "8px 10px" : "8px 12px",
                        backgroundColor: "#FFFBF8",
                        borderRadius: "8px",
                        fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '1rem',
                        color: "#333",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <span
                        style={{
                          color: "#FF6B00",
                          marginRight: "8px",
                          fontWeight: "600",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ wordBreak: "break-word" }}>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <p style={{ margin: `0 0 ${isMobile ? '20px' : isTablet ? '24px' : '32px'} 0` }}>
                We <strong style={{ color: "#FF6B00" }}>danced in our Orange</strong>, built in belief, and walked away knowing one thing: the Sign community isn't just strong online — <em style={{ color: "#FF6B00", fontStyle: "normal", fontWeight: "600" }}>it's powerful in person too</em>.
              </p>

              <div
                style={{
                  textAlign: "center",
                  padding: `${isMobile ? '24px' : isTablet ? '32px' : '40px'} 0 0 0`,
                  borderTop: "1px solid #FFE4D1",
                  marginTop: isMobile ? '24px' : isTablet ? '32px' : '40px',
                }}
              >
                <h2
                  style={{
                    fontSize: isMobile ? '1.3rem' : isTablet ? '1.6rem' : '2rem',
                    fontWeight: "700",
                    color: "#FF6B00",
                    margin: "0 0 16px 0",
                  }}
                >
                  This is just the beginning.
                </h2>
                <p
                  style={{
                    fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.3rem',
                    color: "#333",
                    margin: "0 0 8px 0",
                    fontWeight: "500",
                  }}
                >
                  Let's create more memories, more hugs, and more breakthroughs,
                </p>
                <p
                  style={{
                    fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.3rem',
                    color: "#333",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  as we keep building this dynasty.
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    fontSize: isMobile ? '1.1rem' : isTablet ? '1.3rem' : '1.5rem',
                    fontWeight: "700",
                    color: "#FF6B00",
                  }}
                >
                  Together. In every space, and in real life. 🧡
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}

export default GoalsPage