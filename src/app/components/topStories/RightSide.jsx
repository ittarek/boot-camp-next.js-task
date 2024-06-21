"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./Stories.css";
import Link from "next/link";

const LeftSide = () => {
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-ittarek.vercel.app/news")
      .then(res => res.json())
      .then(data => {
        setTopData(data);
        // console.log(data);
      });
  }, []);
  return (
    <section>
      {topData?.slice(5, 9).map((data, index) => (
        <Link
          href={`/readMore/${data._id}`}
          key={data._id}
          className={`block w-full mx-auto h-full duration-500  ${
            index === 0
              ? "mb-11 w-full  h-100"
              : "flex gap-3 justify-between items-start  mb-6"
          } ${index === 0 ? "" : ""}`} //
        >
          <div
            className={`hover:opacity-80 duration-500 ${
              index === 0 ? "" : "w-[250px]"
            }`}
          >
            <Image
              className={`${index === 0 ? "" : ""}`}
              width={index === 0 ? 100 : 50}
              height={index === 0 ? 100 : 50}
              src={data?.image_url}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <h2
              className={`font-bold text-black cursor-pointer hover:underline ${
                index === 0 ? "ml-0" : "ml-1 text-sm text-slate-600"
              }`}
            >
              {data.title}
            </h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default LeftSide;



// "use client"
// import React, { useEffect } from 'react';
// import "./RightSide.css";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaTiktok,
//   FaYoutube,
// } from "react-icons/fa";
// const RightSide = () => {

//   return (
//     // sticky top-[65px] 
//     <section className="w-full mx-auto ">
//       <div className="social-container transition-style ">
//         <h2>Join With Us</h2>
//       </div>

//       <div id="wrapper" className=" grid grid-cols-3 justify-center items-center gap-0 mx-auto w-full">
//         <a className="item twitter">
//           <i className="fa fa-twitter"></i>
//           <span className="count"></span>Twitter
//         </a>
//         <a className="item facebook">
//           <i className="fa fa-facebook"></i>
//           <span className="count"></span>Facebook
//         </a>
//         <a className="item instagram">
//           <i className="fa fa-instagram"></i>
//           <span className="count"> </span>Youtube
//         </a>
//         <a className="item google">
//           <i className="fa fa-google-plus"></i>
//           <span className="count"></span>Instragam
//         </a>
    
//         <a className="item linkedin">
//           <i className="fa fa-linkedin"></i>
//           <span className="count"></span>LinkedIn
//         </a>
//         <a className="item youtube">
//           <i className="fa fa-youtube"></i>
//           <span className="count"></span>Subscribers
//         </a>
     
     
     
//         <a className="item pinterest">
//           <i className="fa fa-pinterest"></i>
//           <span className="count"></span>Followers
//         </a>
//         <a className="item dribbble">
//           <i className="fa fa-dribbble"></i>
//           <span className="count"></span>Followers
//         </a>
     
//         <a className="item github">
//           <i className="fa fa-github"></i>
//           <span className="count"></span>Followers
//         </a>
     
    
      
//       </div>
//     </section>
//   );
// };

// export default RightSide;
