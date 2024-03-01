"use client";
import "./ContinueNews.css";
import React, { useEffect, useState } from "react";
const ContinueNews = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`News-footer mt-[60px]  ${isSticky ? "sticky-top" : ""}`}>
      <div className="news">
        <span id="news-head">
          <b>News</b>
        </span>
      </div>
      <p className="N-text">
        <marquee direction="left">
          Manchester United conceded two own goals and lost Lisandro sdsds
          <span>•US defence secretary launches intelligence review</span>
          <span>
            • Sadio Mane: Bayern Munich suspend forward after claims he punched
            Leroy Sane
          </span>
          <span>
            • Constantine Hatzidakis: No further action against assistant
            referee for Andy Robertson incident
          </span>
        </marquee>
      </p>
    </div>
  );
};

export default ContinueNews;
