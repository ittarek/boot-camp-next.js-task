"use client"
import "./Bannar.css"

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const Bannar = () =>{
const handleNextClick = () => {
    let lists = document.querySelectorAll('.itemSlide');
    document.getElementById('slides').appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    let lists = document.querySelectorAll('.itemSlide');
    document.getElementById('slides').prepend(lists[lists.length - 1]);
  };

 const imageUrl1 = 'https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
 const imageUrl2 = "https://plus.unsplash.com/premium_photo-1701178412626-ead96ec6ae45?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const imageUrl3 = "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const imageUrl4 = "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const imageUrl5 =
   "https://plus.unsplash.com/premium_photo-1661337152210-70d60c6c9710?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const imageUrl6 = "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const imageUrl7 = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
      <div className="swiperContainer mb-24 mx-auto">
        <div id="slides">
          <div
            className="itemSlide"
            style={{ backgroundImage: `url("${imageUrl1}")` }}
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
            className="itemSlide"
            style={{ backgroundImage: `url("${imageUrl2}")` }}
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
            className="itemSlide"
            style={{ backgroundImage: `url("${imageUrl3}")` }}
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
            className="itemSlide"
            style={{ backgroundImage: `url("${imageUrl4}")` }}
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
            className="itemSlide"
            style={{ backgroundImage: `url("${imageUrl5}")` }}
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
            className="itemSlide"
            style={{ backgroundImage: `url("${imageUrl6}")` }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div className="itemSlide"   style={{ backgroundImage: `url("${imageUrl7}")` }}>
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
        </div>
        <div className="Navigationbuttons">
          <button id="prev" onClick={handlePrevClick}>
            <FaAngleLeft />
          </button>
          <button id="next" onClick={handleNextClick}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    );
}


export default Bannar;