"use client";

import React, { useState, useEffect } from "react";
import "./page.css"; // Create this CSS file for custom styles

const HomePage: React.FC = () => {
  // State for rotating image galleries

  const [treatIndex, setTreatIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);

  // Treat images
  const treats = [
    { src: "/gingerbread.jpeg", alt: "Gingerbread Cookies" },
    { src: "/hot-cocoa.jpeg", alt: "Hot Cocoa" },
    { src: "/fruitcake.jpeg", alt: "Fruitcake" },
    { src: "/eggnog.jpeg", alt: "Eggnog" },
  ];

  // Activity images
  const activities = [
    { src: "/ice-skating.jpeg", alt: "Ice Skating" },
    { src: "/caroling.jpeg", alt: "Caroling" },
    { src: "/s.jpeg", alt: "Family Photos" },
    { src: "/movie-marathon.jpeg", alt: "Movie Marathon" },
  ];

  // Auto-slide for treats
  useEffect(() => {
    const treatInterval = setInterval(() => {
      setTreatIndex((prev) => (prev + 1) % treats.length);
    }, 3000);
    return () => clearInterval(treatInterval); // Cleanup on unmount
  }, [treats.length]);

  // Auto-slide for activities
  useEffect(() => {
    const activityInterval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(activityInterval); // Cleanup on unmount
  }, [activities.length]);

  const handleScrollToDecorations = () => {
    const decorationsSection = document.getElementById("decorations-section");
    if (decorationsSection) {
      decorationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage" style={{ backgroundColor: "#f0f8ff" }}>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="title">Merry Christmas and Happy Holidays!</h1>
          <p className="subtitle">
            Experience the magic of the season with festive cheer, warm
            gatherings, and joyful celebrations.
          </p>
          <button className="cta-button" onClick={handleScrollToDecorations}>
            Explore the Festivities
          </button>
        </div>
      </header>
      <br></br>

      {/* About the Season */}
      <center>
        <section className="about">
          <h2 className = "h2_a">Why We Love Christmas</h2>
          <p>
          Christmas is a time for coming together, sharing love, and creating
          cherished memories.       <br></br>
                    From decorating the tree to baking cookies, every
          tradition brings us closer to those we hold dear.       <br></br>          Whether you're
          celebrating with family or enjoying a quiet holiday, the warmth of
          the season is universal.
          </p>
        </section>
      </center>
      <br></br>

      <br></br>

      <br></br>


      {/* Decorations Section */}
      <section id="decorations-section" className="decorations" style={{ backgroundColor: "#f0f8ff" }}>
        <h2>Festive Decorations</h2>
        <p>
          Transform your home into a winter wonderland! Here are some ideas to
          spark your creativity:
        </p>
        <div className="decoration-gallery">
          <div className="decoration-item">
            🎄 Christmas Tree - The heart of the holiday decor, adorned with
            twinkling lights and ornaments.
          </div>
          <div className="decoration-item">
            ❄️ Snowflakes - Add a frosty touch with paper or glitter snowflakes
            hanging from windows.
          </div>
          <div className="decoration-item">
            🎁 Gift Boxes - Beautifully wrapped presents that double as
            decorations until the big day.
          </div>
          <div className="decoration-item">
            🕯️ Candles - Warm, flickering lights that set a cozy and inviting
            ambiance.
          </div>
          <div className="decoration-item">
            🌟 Star Toppers - A symbol of hope and guidance, perfect for the top
            of your tree.
          </div>
        </div>
      </section>

      <section className="recipes">
        <h2>Delicious Holiday Treats</h2>
        <p>
          No holiday is complete without some festive treats to share! Here are
          some of our favorites:
        </p>
        <div className="rotating-gallery">
          <img
            src={treats[treatIndex].src}
            alt={treats[treatIndex].alt}
            className="gallery-image"
          />
          <p className="image-caption">{treats[treatIndex].alt}</p>
        </div>
      </section>

      <section className="activities">
        <h2>Holiday Activities</h2>
        <p>Make the season extra special with these fun-filled activities:</p>
        <div className="rotating-gallery">
          <img
            src={activities[activityIndex].src}
            alt={activities[activityIndex].alt}
            className="gallery-image"
          />
          <p className="image-caption">{activities[activityIndex].alt}</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          Made with ❤️ for the holidays. Wishing you a season filled with peace,
          love, and joy. Happy Christmas!
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
