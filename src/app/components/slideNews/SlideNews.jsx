"use client";
import React, { useRef, useEffect } from "react";
import "./SlideNews.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; 
import Container from "../Container";

const SlideShow = () => {
    const slideRef = useRef();
  const handleNextClick = () => {
    const lists = document.querySelectorAll(".items");
    slideRef.current.appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    const lists = document.querySelectorAll(".items");
    slideRef.current.prepend(lists[lists.length - 1]);
  };

  return (
  <Container>  
    <div className="container my-24 hidden w-full mx-auto ">
      <div id="slide" ref={slideRef}>
        <div
          className="items"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1693166757401-d9b192f3a0c6?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="items"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1693166757401-d9b192f3a0c6?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="items"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1693166757401-d9b192f3a0c6?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="items"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1693166757401-d9b192f3a0c6?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="items"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1693166757401-d9b192f3a0c6?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="items"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>
      <div className="buttonsNavigation">
        <button id="prev" onClick={handlePrevClick}>
          {" "}
          prev
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNextClick}>
          next
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div></Container>
  );
};

export default SlideShow;
