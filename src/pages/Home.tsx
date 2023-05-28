import React, { useEffect, useState } from "react";
import FlashSales from "../components/Flash/Flash";
import Hero from "../components/Hero/Hero";

function Home() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Simulating content loading delay
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 300);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isContentLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Hero />
      <FlashSales />
    </div>
  );
}

export default Home;
