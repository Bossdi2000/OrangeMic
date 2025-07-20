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
  const isLaptop = screenSize === 'laptop'
  const isSmallScreen = isMobile || isTablet

  // Responsive values
  const getResponsiveValue = (mobile, tablet, laptop, desktop) => {
    if (isMobile) return mobile
    if (isTablet) return tablet
    if (isLaptop) return laptop
    return desktop
  }

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
      icon: <Users size={getResponsiveValue(18, 20, 22, 24)} />,
      title: "Real Connections",
      description: "From pixels to personal bonds"
    },
    {
      icon: <Heart size={getResponsiveValue(18, 20, 22, 24)} />,
      title: "Genuine Community",
      description: "Warm hugs and spontaneous smiles"
    },
    {
      icon: <Zap size={getResponsiveValue(18, 20, 22, 24)} />,
      title: "Electric Energy",
      description: "Something magical happens IRL"
    },
    {
      icon: <Target size={getResponsiveValue(18, 20, 22, 24)} />,
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
          padding: `${getResponsiveValue('60px', '80px', '100px', '120px')} 0 ${getResponsiveValue('40px', '60px', '80px', '100px')} 0`,
          color: "white",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          minHeight: getResponsiveValue('auto', 'auto', '70vh', '80vh'),
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: getResponsiveValue("-30%", "-20%", "-15%", "-10%"),
            width: getResponsiveValue("150px", "200px", "250px", "300px"),
            height: getResponsiveValue("150px", "200px", "250px", "300px"),
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-25%",
            left: getResponsiveValue("-30%", "-20%", "-15%", "-10%"),
            width: getResponsiveValue("200px", "250px", "350px", "400px"),
            height: getResponsiveValue("200px", "250px", "350px", "400px"),
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
            padding: `0 ${getResponsiveValue('20px', '32px', '40px', '60px')}`,
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
                padding: `${getResponsiveValue('8px 16px', '10px 18px', '12px 20px', '14px 24px')}`,
                borderRadius: "30px",
                marginBottom: getResponsiveValue('20px', '24px', '28px', '32px'),
                fontSize: getResponsiveValue('0.8rem', '0.85rem', '0.9rem', '1rem'),
                fontWeight: "500",
                backdropFilter: "blur(10px)",
              }}
            >
              🧡 Our Goals & Vision
            </div>
            
            <h1
              style={{
                fontSize: getResponsiveValue('2rem', '2.5rem', '3.2rem', '4rem'),
                fontWeight: "700",
                margin: `0 0 ${getResponsiveValue('12px', '16px', '20px', '24px')} 0`,
                lineHeight: "1.1",
                background: "linear-gradient(45deg, #FFFFFF, #FFE4D1)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                wordBreak: "break-word",
                maxWidth: "100%",
              }}
            >
              Beyond the Screens
            </h1>
            
            <p
              style={{
                fontSize: getResponsiveValue('0.95rem', '1.1rem', '1.25rem', '1.4rem'),
                margin: "0",
                opacity: "0.95",
                fontWeight: "400",
                maxWidth: getResponsiveValue("100%", "90%", "80%", "70%"),
                lineHeight: "1.6",
                marginLeft: "auto",
                marginRight: "auto",
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
          padding: `${getResponsiveValue('50px', '70px', '90px', '100px')} 0`,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: `0 ${getResponsiveValue('20px', '32px', '40px', '60px')}`,
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
              gap: getResponsiveValue('20px', '24px', '32px', '40px'),
              marginBottom: getResponsiveValue('50px', '70px', '90px', '100px'),
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
                  padding: getResponsiveValue('18px', '22px', '28px', '32px'),
                  borderRadius: getResponsiveValue("12px", "14px", "16px", "18px"),
                  border: "1px solid #FFE4D1",
                  backgroundColor: "#FFFBF8",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
                whileHover={{
                  scale: isSmallScreen ? 1.02 : 1.05,
                  y: -4
                }}
                onMouseEnter={(e) => {
                  if (!isSmallScreen) {
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 107, 0, 0.15)"
                    e.currentTarget.style.borderColor = "#FF6B00"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSmallScreen) {
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)"
                    e.currentTarget.style.borderColor = "#FFE4D1"
                  }
                }}
              >
                <div
                  style={{
                    width: getResponsiveValue("44px", "50px", "56px", "60px"),
                    height: getResponsiveValue("44px", "50px", "56px", "60px"),
                    borderRadius: "50%",
                    backgroundColor: "#FF6B00",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: `0 auto ${getResponsiveValue('12px', '14px', '16px', '18px')} auto`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {point.icon}
                </div>
                <h3
                  style={{
                    fontSize: getResponsiveValue('0.95rem', '1rem', '1.15rem', '1.3rem'),
                    fontWeight: "600",
                    color: "#FF6B00",
                    margin: `0 0 ${getResponsiveValue('6px', '8px', '10px', '12px')} 0`,
                    lineHeight: "1.3",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: getResponsiveValue('0.8rem', '0.85rem', '0.9rem', '1rem'),
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
          padding: `0 0 ${getResponsiveValue('50px', '70px', '90px', '100px')} 0`,
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: `0 ${getResponsiveValue('20px', '32px', '40px', '60px')}`,
          }}
        >
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              backgroundColor: "white",
              padding: getResponsiveValue('24px 20px', '36px 28px', '48px 40px', '60px 48px'),
              borderRadius: getResponsiveValue("16px", "20px", "24px", "24px"),
              boxShadow: "0 8px 40px rgba(0, 0, 0, 0.08)",
              border: "1px solid #F5F5F5",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontSize: getResponsiveValue('0.95rem', '1rem', '1.15rem', '1.25rem'),
                lineHeight: "1.8",
                color: "#333",
                fontWeight: "400",
              }}
            >
              <p style={{ margin: `0 0 ${getResponsiveValue('18px', '22px', '28px', '32px')} 0` }}>
                There's something <strong style={{ color: "#FF6B00" }}>electric</strong> about finally stepping out from behind the screen and into a room filled with familiar usernames, voices, and profile pictures, now with faces, laughter, and warmth. The <strong>Sign IRL event</strong> wasn't just a meetup. It was a movement. A shift. A heartfelt leap from the virtual into the tangible.
              </p>

              <p style={{ margin: `0 0 ${getResponsiveValue('18px', '22px', '28px', '32px')} 0` }}>
                For so long, we've connected through pixels, voice chats, DMs, spaces, and endless reposts. But on that remarkable day, <em style={{ color: "#FF6B00", fontStyle: "normal", fontWeight: "600" }}>body language spoke, eye contact hit differently</em>, and shared laughter filled the air in ways no emoji ever could. Real conversations replaced text bubbles, and what once felt like distant admiration turned into genuine human bonds.
              </p>

              <div
                style={{
                  backgroundColor: "#FFFBF8",
                  border: "1px solid #FFE4D1",
                  borderLeft: "4px solid #FF6B00",
                  padding: getResponsiveValue('16px', '20px', '24px', '28px'),
                  borderRadius: "0 12px 12px 0",
                  margin: `${getResponsiveValue('24px', '28px', '36px', '40px')} 0`,
                  fontStyle: "italic",
                  color: "#555",
                  fontSize: getResponsiveValue('0.9rem', '0.95rem', '1rem', '1.1rem'),
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: getResponsiveValue('12px', '16px', '20px', '24px'),
                    right: getResponsiveValue('12px', '16px', '20px', '24px'),
                    fontSize: getResponsiveValue('1.2rem', '1.4rem', '1.6rem', '1.8rem'),
                    color: "#FF6B00",
                    opacity: 0.3,
                  }}
                >
                  "
                </div>
                <p style={{ margin: "0", paddingRight: getResponsiveValue('20px', '24px', '28px', '32px') }}>
                  "There were moments that simply couldn't be captured online — warm hugs, spontaneous smiles, and eyes lighting up in recognition. That's the magic of IRL: it deepens trust, inspires collaboration, and roots our digital bonds in something real."
                </p>
              </div>

              <p style={{ margin: `0 0 ${getResponsiveValue('18px', '22px', '28px', '32px')} 0` }}>
                Meeting fellow builders, creators, and community leaders was a major highlight — from the <strong style={{ color: "#FF6B00" }}>king of Sign himself</strong> to main organizers like <strong>Billibash.sign and Fossito.Sign</strong>. 
              </p>

              {/* Highlights Section */}
              <div
                style={{
                  backgroundColor: "white",
                  border: "1px solid #FFE4D1",
                  borderRadius: getResponsiveValue("12px", "14px", "16px", "16px"),
                  padding: getResponsiveValue('18px', '22px', '28px', '32px'),
                  margin: `${getResponsiveValue('24px', '28px', '36px', '40px')} 0`,
                  width: "100%",
                  boxSizing: "border-box",
                  boxShadow: "0 2px 8px rgba(255, 107, 0, 0.05)",
                }}
              >
                <h3
                  style={{
                    color: "#FF6B00",
                    fontSize: getResponsiveValue('1rem', '1.1rem', '1.25rem', '1.4rem'),
                    fontWeight: "600",
                    margin: `0 0 ${getResponsiveValue('16px', '18px', '20px', '24px')} 0`,
                    textAlign: "center",
                  }}
                >
                  Community Leaders We Met
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: getResponsiveValue("10px", "12px", "14px", "16px"),
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
                        padding: getResponsiveValue("10px 12px", "12px 14px", "14px 16px", "16px 18px"),
                        backgroundColor: "#FFFBF8",
                        borderRadius: getResponsiveValue("6px", "8px", "8px", "10px"),
                        fontSize: getResponsiveValue('0.8rem', '0.85rem', '0.9rem', '1rem'),
                        color: "#333",
                        width: "100%",
                        boxSizing: "border-box",
                        transition: "background-color 0.2s ease",
                      }}
                      whileHover={{
                        backgroundColor: "#FFF5F0"
                      }}
                    >
                      <span
                        style={{
                          color: "#FF6B00",
                          marginRight: getResponsiveValue("6px", "8px", "10px", "12px"),
                          fontWeight: "600",
                          flexShrink: 0,
                          fontSize: getResponsiveValue('0.9rem', '1rem', '1.1rem', '1.2rem'),
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ wordBreak: "break-word", lineHeight: "1.4" }}>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <p style={{ margin: `0 0 ${getResponsiveValue('18px', '22px', '28px', '32px')} 0` }}>
                We <strong style={{ color: "#FF6B00" }}>danced in our Orange</strong>, built in belief, and walked away knowing one thing: the Sign community isn't just strong online — <em style={{ color: "#FF6B00", fontStyle: "normal", fontWeight: "600" }}>it's powerful in person too</em>.
              </p>

              <div
                style={{
                  textAlign: "center",
                  padding: `${getResponsiveValue('24px', '28px', '36px', '40px')} 0 0 0`,
                  borderTop: "1px solid #FFE4D1",
                  marginTop: getResponsiveValue('24px', '28px', '36px', '40px'),
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  style={{
                    fontSize: getResponsiveValue('1.2rem', '1.4rem', '1.8rem', '2rem'),
                    fontWeight: "700",
                    color: "#FF6B00",
                    margin: `0 0 ${getResponsiveValue('12px', '14px', '16px', '18px')} 0`,
                    lineHeight: "1.2",
                  }}
                >
                  This is just the beginning.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  style={{
                    fontSize: getResponsiveValue('0.95rem', '1rem', '1.15rem', '1.3rem'),
                    color: "#333",
                    margin: `0 0 ${getResponsiveValue('6px', '8px', '8px', '10px')} 0`,
                    fontWeight: "500",
                    lineHeight: "1.5",
                  }}
                >
                  Let's create more memories, more hugs, and more breakthroughs,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  style={{
                    fontSize: getResponsiveValue('0.95rem', '1rem', '1.15rem', '1.3rem'),
                    color: "#333",
                    margin: "0",
                    fontWeight: "500",
                    lineHeight: "1.5",
                  }}
                >
                  as we keep building this dynasty.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  style={{
                    marginTop: getResponsiveValue("20px", "22px", "24px", "28px"),
                    fontSize: getResponsiveValue('1rem', '1.2rem', '1.4rem', '1.5rem'),
                    fontWeight: "700",
                    color: "#FF6B00",
                    lineHeight: "1.3",
                  }}
                >
                  Together. In every space, and in real life. 🧡
                </motion.div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}

export default GoalsPage