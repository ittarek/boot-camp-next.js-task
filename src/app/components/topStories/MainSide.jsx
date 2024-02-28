"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./Stories.css"
import Link from "next/link"
const MainSide = () => {
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-ittarek.vercel.app/news")
      .then(res => res.json())
      .then(data => {
        setTopData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="w-full mx-auto border-2">
      <h2>Top Stories</h2>
      <div>
        {topData?.slice(0, 6).map((data, index) => (
          <div key={data._id} className="card">
            <div className="card-img">
              <Image className="mx-auto" width={400} height={250} src={data.image_url} alt="image"/>
            </div>
            <div className="card-content">
              <div className="content-capsules">
                <span>Topic 1</span>
                <span> Topic 2 </span>
              </div>
              <div className="content-head">
                <h2>Card Heading</h2>
              </div>
              <div className="content-body">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum debitis aut sequi quaerat. Nobis deleniti quibusdam
                  perspiciatis perferendis dicta. Dicta, quia voluptas. Quos
                  amet cupiditate pariatur perspiciatis ipsa optio accusamus.
                  Dignissimos dolore incidunt deleniti, illo quam quis quas
                  reprehenderit aliquid tenetur sapiente aperiam ea, ex facere
                  nisi soluta nostrum voluptatem perferendis asperiores libero,
                  at sint mollitia?
                </p>
              </div>
              <div className="button">
                <button>
                  <Link href={`/readMore/${data._id}`}><b>Read More</b></Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSide;
