"use client";
import React, { useEffect, useState } from "react";
import "./techStart.css";
import SectionTitle from "../SharedComponents/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
const TechStart = () => {
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-ittarek.vercel.app/news")
      .then(res => res.json())
      .then(data => {
        setTopData(data);
       
      });
  }, []);
  return (
    <Container>
      {" "}
      <section className="bg-[#EAECF0]">
        <SectionTitle sectionHeading="Tech & Startup"></SectionTitle>
        <div className=" mx-auto lg:flex justify-center gap-[1%]">
          <div className="leftSide mx-auto w-full  lg:w-[40%] ">
            {" "}
            {topData?.slice(11, 14).map((data, index) => (
              <Link
                href={`/readMore/${data._id}`}
                key={data._id}
                className={`block w-full mx-auto  duration-500  ${
                  index === 0
                    ? "mb-11 w-full  h-100"
                    : "flex gap-3 justify-between items-start  mb-6"
                } ${index === 0 ? "" : ""}`} //
              >
                <div
                  className={`hover:opacity-80 duration-500 ${
                    index === 0 ? "" : "w-[150px]"
                  }`}
                >
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
          </div>

          <div className="centerSide w-full lg:w-[31%] mx-auto ">
            {" "}
            {topData?.slice(19, 25).map((data, index) => (
              <>
                {" "}
                <Link
                  href={`/readMore/${data._id}`}
                  key={data._id}
                  className="flex justify-between items-center mb-11  group duration-500  gap-1 border-b-2 border-slate-400   
       
          "
                >
                  <div>
                    <h2
                      className=" text-[1.25rem] leading-[1.25] cursor-pointer hover:underline "
                      style={{ fontWeight: "600" }}
                    >
                      {data.title}
                    </h2>
                  </div>
                  <div className="hover:opacity-80 w-[200px]  duration-500 transition ">
                    <Image
                      width={0}
                      height={0}
                      className="rounded-lg  duration-500   
          object-cover 
              group-hover:scale-110 
              transition "
                      src={data?.image_url}
                      alt="image"
                      sizes=""
                      layout="responsive"
                    />
                  </div>
                </Link>
              </>
            ))}
          </div>

          <div className="rightSide w-full lg:w-[20%] mx-auto">
            {" "}
            {topData?.slice(15, 16).map((data, index) => (
              <Link
                href={`/readMore/${data._id}`}
                key={data._id}
                className="block w-full mx-auto duration-500 "
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
                    className={`font-bold cursor-pointer text-[1.25rem] mb-3 hover:underline ${
                      index === 0 ? "ml-0" : "ml-1 text-sm text-slate-600"
                    }`}
                  >
                    {data.title}
                  </h2>
                  <p className="text-[#475467] leading-11 font-[1rem] ">
                    {data?.details.slice(0, 150)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TechStart;
