'use client'
 import React, { useEffect } from 'react';
import "./footer.css"
import  Image  from 'next/image';
const Footer = () => {
  useEffect(() => {
    //  Get the bubbles container
    const bubblesContainer = document.querySelector(".bubbles");

    // Create bubbles
    for (let i = 0; i < 128; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.setProperty("--size", `${2 + Math.random() * 3}rem`);
      bubble.style.setProperty("--distance", `${6 + Math.random() * 3}rem`);
      bubble.style.setProperty("--position", `${-5 + Math.random() * 100}%`);
      bubble.style.setProperty("--time", `${2 + Math.random() * 2}s`);
      bubble.style.setProperty("--delay", `${-1 * (2 + Math.random() * 2)}s`);
      bubblesContainer.appendChild(bubble);
    }

    
    return () => {
      bubblesContainer.innerHTML = "";
    };
  }, []); 
  return (
    <div>
      <footer className="footer mx-auto">
        <div className="bubbles"></div>
        <div className="footer-content">
          <div className="about-logo">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Your Logo"
            />
        
          </div>
          <div className="footer-section about">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer-section links">
            <h1>Quick Links</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#section3">Services</a>
              </li>
              <li>
                <a href="#section1">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h1>Contact Us</h1>
            <form action="{{ route('contact.store') }}" method="POST">
              <input
                type="text"
                name="name"
                className="text-input contact-input"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                className="text-input contact-input"
                placeholder="Your Email"
              />
              <textarea
                rows="4"
                name="message"
                className="text-input contact-input"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2023 Fiya | Created by Zaidan
        </div>
      </footer>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Footer;
