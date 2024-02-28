"use client"
import React, { useEffect } from 'react';
import "./RightSide.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
const RightSide = () => {

  return (
    // sticky top-[65px] 
    <div className=" ">
      <div className="social-container transition-style ">
        <h2>Join With Us</h2>
      </div>

      <div id="wrapper" className="square">
        <a className="item twitter">
          <i className="fa fa-twitter"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item facebook">
          <i className="fa fa-facebook"></i>
          <span className="count"></span>Likes
        </a>
        <a className="item instagram">
          <i className="fa fa-instagram"></i>
          <span className="count"> </span>Followers
        </a>
        <a className="item google">
          <i className="fa fa-google-plus"></i>
          <span className="count"></span>Followers
        </a>
    
        <a className="item linkedin">
          <i className="fa fa-linkedin"></i>
          <span className="count"></span>Connections
        </a>
        <a className="item youtube">
          <i className="fa fa-youtube"></i>
          <span className="count"></span>Subscribers
        </a>
     
     
     
        <a className="item pinterest">
          <i className="fa fa-pinterest"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item dribbble">
          <i className="fa fa-dribbble"></i>
          <span className="count"></span>Followers
        </a>
     
        <a className="item github">
          <i className="fa fa-github"></i>
          <span className="count"></span>Followers
        </a>
     
    
      
      </div>
    </div>
  );
};

export default RightSide;
