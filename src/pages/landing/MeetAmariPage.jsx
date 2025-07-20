import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Mic,
  Heart,
  Users,
  Zap,
  Globe,
  Headphones,
  Video,
  MapPin,
  Radio,
  Star,
} from "lucide-react";

const MeetAmariPage = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 480) setScreenSize("mobile");
      else if (width <= 768) setScreenSize("tablet");
      else if (width <= 1024) setScreenSize("laptop");
      else setScreenSize("desktop");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";
  const isSmallScreen = isMobile || isTablet;

  const orangeMicFeatures = [
    {
      icon: <Star size={isSmallScreen ? 20 : 24} />,
      title: "A stage for authenticity",
      description: "Where real voices shine",
    },
    {
      icon: <Radio size={isSmallScreen ? 20 : 24} />,
      title: "A channel for unheard voices",
      description: "Amplifying those who matter",
    },
    {
      icon: <Zap size={isSmallScreen ? 20 : 24} />,
      title: "A hub for real-time education",
      description: "Learning through conversation",
    },
    {
      icon: <Globe size={isSmallScreen ? 20 : 24} />,
      title: "A cultural connector",
      description: "Bridging diverse Web3 communities",
    },
  ];

  const bigDreamItems = [
    {
      icon: <Headphones size={isSmallScreen ? 18 : 20} />,
      text: "A podcast or Web3 audio series",
    },
    {
      icon: <Users size={isSmallScreen ? 18 : 20} />,
      text: "Exclusive conversations with founders and creators",
    },
    {
      icon: <Heart size={isSmallScreen ? 18 : 20} />,
      text: "Partnered campaigns that amplify real humans behind the hype",
    },
    {
      icon: <MapPin size={isSmallScreen ? 18 : 20} />,
      text: "Physical meetups where the mic goes IRL",
    },
    {
      icon: <Video size={isSmallScreen ? 18 : 20} />,
      text: "A studio for meet-ups and amazing conversation and connections",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "#FAFAFA",
        fontFamily: "'Inter', 'Poppins', sans-serif",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #FF6B00 0%, #FF8F42 50%, #E55A00 100%)",
          padding: `${isMobile ? "80px" : isTablet ? "100px" : "120px"} 0 ${
            isMobile ? "60px" : isTablet ? "80px" : "100px"
          } 0`,
          color: "white",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Animated Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: isMobile ? "-15%" : "-5%",
            width: isMobile ? "150px" : isTablet ? "200px" : "250px",
            height: isMobile ? "150px" : isTablet ? "200px" : "250px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.15)",
            filter: "blur(60px)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: isMobile ? "-15%" : "-8%",
            width: isMobile ? "180px" : isTablet ? "250px" : "320px",
            height: isMobile ? "180px" : isTablet ? "250px" : "320px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            filter: "blur(80px)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
          `}
        </style>

        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: `0 ${isMobile ? "16px" : isTablet ? "24px" : "48px"}`,
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Mic Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                width: isMobile ? "60px" : isTablet ? "80px" : "120px",
                height: isMobile ? "60px" : isTablet ? "80px" : "120px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px auto",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Mic size={isMobile ? 28 : isTablet ? 36 : 52} color="white" />
            </motion.div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                padding: `${isMobile ? "6px 16px" : "8px 20px"}`,
                borderRadius: "30px",
                marginBottom: isMobile ? "20px" : "24px",
                fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem",
                fontWeight: "600",
                backdropFilter: "blur(10px)",
              }}
            >
              🎙️ Meet the Voice Behind The Orange Mic
            </div>

            <h1
              style={{
                fontSize: isMobile ? "2rem" : isTablet ? "2.8rem" : screenSize === "laptop" ? "3.5rem" : "4.5rem",
                fontWeight: "800",
                margin: `0 0 ${isMobile ? "16px" : "24px"} 0`,
                lineHeight: "1.1",
                background: "linear-gradient(45deg, #FFFFFF, #FFE4D1, #FFFFFF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 20px rgba(0,0,0,0.1)",
              }}
            >
              Hey, I'm Amari
            </h1>

            <p
              style={{
                fontSize: isMobile ? "0.9rem" : isTablet ? "1.1rem" : "1.4rem",
                margin: "0 auto",
                opacity: "0.95",
                fontWeight: "500",
                maxWidth: "700px",
                lineHeight: "1.6",
              }}
            >
              Building bridges through voice, culture, and connection in Web3
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                marginTop: isMobile ? "32px" : "48px",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["🌟 Community Builder", "🎙️ Space Host", "📖 Storyteller", "🌍 Cultural Connector"].map((tag, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    padding: `${isMobile ? "6px 12px" : "8px 16px"}`,
                    borderRadius: "25px",
                    fontSize: isMobile ? "0.7rem" : "0.8rem",
                    fontWeight: "500",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {tag}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: `${isMobile ? "60px" : isTablet ? "80px" : "100px"} 0`,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: `0 ${isMobile ? "16px" : isTablet ? "24px" : "48px"}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: "#FFFBF8",
              padding: isMobile ? "32px 16px" : isTablet ? "48px 32px" : "64px 48px",
              borderRadius: "24px",
              border: "2px solid #FFE4D1",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "6px",
                background: "linear-gradient(90deg, #FF6B00, #FF8F42, #FFB366)",
                borderRadius: "24px 24px 0 0",
              }}
            />

            <div
              style={{
                textAlign: "center",
                marginBottom: isMobile ? "32px" : "48px",
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.5rem",
                  fontWeight: "700",
                  color: "#FF6B00",
                  margin: "0 0 12px 0",
                }}
              >
                My Story
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#FF6B00",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              />
            </div>

            <div
              style={{
                fontSize: isMobile ? "1rem" : isTablet ? "1.1rem" : "1.2rem",
                lineHeight: "1.8",
                color: "#333",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              <p style={{ margin: `0 0 ${isMobile ? "20px" : "24px"} 0` }}>
                A <strong style={{ color: "#FF6B00" }}>first daughter</strong> from the family of 8 (parents inclusive) and from the <strong>Igbo tribe</strong> (Imo state to be precise) navigating life with courage and purpose.
              </p>

              <p style={{ margin: `0 0 ${isMobile ? "20px" : "24px"} 0` }}>
                With growing responsibilities and limited income from my 9–5, I've chosen to step into the world of <strong style={{ color: "#FF6B00" }}>Web3</strong>, not because I know it all, but because I believe in the power of <em>learning, growing, and creating</em> a better future for myself, my family, and my community.
              </p>

              <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #FF6B00",
                  borderRadius: "16px",
                  padding: isMobile ? "20px" : "24px",
                  margin: `${isMobile ? "24px" : "32px"} 0`,
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#FF6B00",
                    color: "white",
                    padding: "6px 16px",
                    borderRadius: "12px",
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  ✨ My Mission
                </div>
                <p
                  style={{
                    margin: "16px 0 0 0",
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    fontWeight: "500",
                    color: "#FF6B00",
                  }}
                >
                  I'm here to build skills, learn and unlock opportunities.
                </p>
              </div>

              <p style={{ margin: "0", textAlign: "center", fontStyle: "italic", color: "#666" }}>
                A vibrant community builder, space host, moderator, and storyteller who found purpose at the intersection of <strong style={{ color: "#FF6B00" }}>voice, culture, and connection</strong> in Web3.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Orange Mic Vision Section */}
      <section
        style={{
          padding: `${isMobile ? "60px" : isTablet ? "80px" : "100px"} 0`,
          background: "linear-gradient(180deg, #FAFAFA 0%, white 100%)",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto",
            padding: `0 ${isMobile ? "16px" : isTablet ? "24px" : "48px"}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: isMobile ? "48px" : "64px" }}
          >
            <h2
              style={{
                fontSize: isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem",
                fontWeight: "800",
                color: "#FF6B00",
                margin: "0 0 20px 0",
                background: "linear-gradient(45deg, #FF6B00, #FF8F42)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🧡 The Orange Mic Vision
            </h2>
            <p
              style={{
                fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
                color: "#555",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.7",
                fontWeight: "500",
              }}
            >
              Born from one simple but powerful realization: <br />
              <em style={{ color: "#FF6B00", fontSize: "1.1em" }}>
                "There are voices that need to be heard, and spaces that need to feel like home."
              </em>
            </p>
          </motion.div>

          {/* Orange Mic Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: isMobile ? "20px" : isTablet ? "28px" : "36px",
              marginBottom: isMobile ? "48px" : "64px",
            }}
          >
            {orangeMicFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundColor: "white",
                  padding: isMobile ? "24px 16px" : "32px 20px",
                  borderRadius: "16px",
                  textAlign: "center",
                  border: "2px solid #FFE4D1",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(255, 107, 0, 0.2)";
                  e.currentTarget.style.borderColor = "#FF6B00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#FFE4D1";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "4px",
                    background: `linear-gradient(90deg, #FF6B00, #FF8F42)`,
                    borderRadius: "16px 16px 0 0",
                  }}
                />

                <div
                  style={{
                    width: isMobile ? "50px" : "60px",
                    height: isMobile ? "50px" : "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF6B00, #FF8F42)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                    boxShadow: "0 6px 20px rgba(255, 107, 0, 0.3)",
                  }}
                >
                  {feature.icon}
                </div>

                <h3
                  style={{
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    fontWeight: "700",
                    color: "#FF6B00",
                    margin: "0 0 10px 0",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    color: "#666",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* The Big Dream Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              backgroundColor: "white",
              padding: isMobile ? "32px 16px" : isTablet ? "48px 32px" : "64px 48px",
              borderRadius: "24px",
              border: "2px solid #FF6B00",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "6px",
                background: "linear-gradient(90deg, #FF6B00, #FF8F42, #FFB366, #FF8F42, #FF6B00)",
                backgroundSize: "200% 100%",
                animation: "gradientShift 3s ease-in-out infinite",
              }}
            />

            <style>
              {`
                @keyframes gradientShift {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                }
              `}
            </style>

            <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
              <h3
                style={{
                  fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.5rem",
                  fontWeight: "800",
                  color: "#FF6B00",
                  margin: "0 0 16px 0",
                }}
              >
                🌟 Imagine: The Big Dream
              </h3>
              <p
                style={{
                  fontSize: isMobile ? "0.9rem" : "1.1rem",
                  color: "#555",
                  margin: "0",
                  fontStyle: "italic",
                }}
              >
                The Orange Mic as a recognized digital media brand
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "16px",
                marginBottom: isMobile ? "32px" : "48px",
              }}
            >
              {bigDreamItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: isMobile ? "12px 16px" : "16px 20px",
                    backgroundColor: "#FFFBF8",
                    borderRadius: "12px",
                    border: "1px solid #FFE4D1",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FF6B00",
                      color: "white",
                      padding: "8px",
                      borderRadius: "50%",
                      marginRight: "12px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: isMobile ? "0.85rem" : "1rem",
                      color: "#333",
                      fontWeight: "500",
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              style={{
                textAlign: "center",
                padding: `${isMobile ? "24px" : "32px"} 0 0 0`,
                borderTop: "2px solid #FFE4D1",
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  fontWeight: "700",
                  color: "#FF6B00",
                  margin: "0 0 12px 0",
                }}
              >
                At the heart of it all remains Amari's signature style:
              </p>
              <div
                style={{
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  fontWeight: "800",
                  color: "#333",
                  letterSpacing: "1px",
                }}
              >
                Real people. Real talk. Real vibes.
              </div>
            </div>
          </motion.div>

          {/* Why Orange Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              marginTop: isMobile ? "48px" : "64px",
              textAlign: "center",
              padding: isMobile ? "48px 16px" : "64px 32px",
              background: "linear-gradient(135deg, #FF6B00 0%, #FF8F42 100%)",
              borderRadius: "24px",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40%",
                right: "-15%",
                width: isMobile ? "200px" : "300px",
                height: isMobile ? "200px" : "300px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                filter: "blur(80px)",
              }}
            />

            <h3
              style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                fontWeight: "800",
                margin: "0 0 24px 0",
                position: "relative",
                zIndex: 2,
              }}
            >
              🧡 Why Orange?
            </h3>

            <p
              style={{
                fontSize: isMobile ? "1.1rem" : "1.3rem",
                lineHeight: "1.8",
                maxWidth: "600px",
                margin: "0 auto 30px auto",
                fontWeight: "500",
                position: "relative",
                zIndex: 2,
              }}
            >
              Because it represents <strong>warmth, creativity, energy, and boldness</strong> — everything Amari brings into every conversation she leads.
            </p>

            <div
              style={{
                fontSize: isMobile ? "1.4rem" : "1.7rem",
                fontWeight: "800",
                letterSpacing: "1px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div>The Orange Mic isn't just a brand.</div>
              <div style={{ margin: "12px 0" }}>It's a heartbeat.</div>
              <div>It's a home for voices that matter.</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MeetAmariPage;