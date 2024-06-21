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

      });
  }, []);
  return (
    <section>
      {topData?.slice(0, 3).map((data, index) => (
        <Link
          href={`/readMore/${data._id}`}
          key={data._id}
          className={`block w-full mx-auto h-full duration-500  ${
            index === 0
              ? "mb-11 w-full  h-100"
              : "flex gap-3 justify-between items-start  mb-6"
          } ${index === 0 ? "" : ""}`} //
        >
           <div className={`hover:opacity-80 duration-500 ${index === 0 ? "" : "w-[150px]"}`}>
            <Image
              className={`${index === 0 ? "" : "w-[500px]"}`}
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
                index === 0 ? "ml-0" : "ml-1"
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

export default MainSide;
