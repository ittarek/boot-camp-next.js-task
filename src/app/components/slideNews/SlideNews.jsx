"use client";
// SlideNews.js
import React, { useEffect } from "react";
// import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation.css';
// import 'swiper/css/bundle.css';
import "./SlideNews.css";
import SwiperCore, { Navigation } from "swiper";
import Swiper from "swiper";

SwiperCore.use([Navigation]);

const SlideNews = () => {
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 2.7,
      centeredSlides: true,
      breakpoints: {
        1440: {
          slidesPerView: 2.6,
        },
        1439: {
          slidesPerView: 1.45,
        },
        1024: {
          slidesPerView: 1.45,
        },
        1023: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        568: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        414: {
          slidesPerView: 1.09,
          spaceBetween: 3,
        },
        320: {
          slidesPerView: 1.09,
          spaceBetween: 3,
        },
      },
    });

   

    mySwiper.on("onSlideChangeStart", () => {
      if (contentContainer.classList.contains("sl--card-reveal")) {
        const contentWrapper = document.querySelector(".sl--content-wrapper");
        contentContainer.classList.remove("sl--card-reveal");
        contentContainer.classList.add("sl--card-hide");
        navGFX.classList.remove("sl--close-card-info");
        navGFX.classList.add("sl--show-card-info");
        contentWrapper.classList.remove("sl--content-wrapper-active");
        contentWrapper.classList.add("sl--content-wrapper-inactive");
      }
    });

    const windowWidth = window.innerWidth;
    if (windowWidth === 320) {
      // Media Query for 320
    }
    if (windowWidth === 375) {
      // Media Query for 375
    }
    if (windowWidth === 414) {
      // Media Query for 414
    }
    if (windowWidth === 768) {
      // Media Query for 768
    }
    if (windowWidth === 1024) {
      // Media Query for 1024
    }

    return () => {
      mySwiper.destroy();
    };
  }, []); 


  return (
    <div className="main-wrapper">
      <div className="sl-main-container">
        <div className="sl-header-wrapper">
          <h4> Connect with Our </h4>
          <h3>Preferred Partners</h3>
          <p>
            Explore our Preferred Partners – trusted experts bringing a wealth
            of experience to enhance your home journey. From skilled builders to
            seasoned realtors, discover a network dedicated to ensuring a
            seamless and successful experience for every homeowner.
          </p>
          {/* <!-- If we need navigation buttons --> */}
          <div className="sl-nav">
            <div className="swiper-button-next">
              <svg
                id="nextBtn"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 65"
              >
                <style>fill= #04b7ac;</style>
                <path d="M32.5 0A32.5 32.5 0 1 0 65 32.5 32.5 32.5 0 0 0 32.5 0zm0 62A29.5 29.5 0 1 1 62 32.5 29.53 29.53 0 0 1 32.5 62zm-5.22-40.28L38.06 32.5 27.28 43.28l2.12 2.12 12.9-12.9-12.9-12.9z" />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="prevBtn"
                data-name="Layer 1"
                viewBox="0 0 65 65"
              >
                <style>fill = #04b7ac;</style>
                <path d="M0 32.5A32.5 32.5 0 1 0 32.5 0 32.5 32.5 0 0 0 0 32.5zm3 0A29.5 29.5 0 1 1 32.5 62 29.53 29.53 0 0 1 3 32.5zm32.6-12.9L22.7 32.5l12.9 12.9 2.12-2.12L26.94 32.5l10.78-10.78z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="sl-wrapper">
          {/* <!-- Slider main container --> */}
          <div className="swiper-container">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}

              <div className="swiper-slide sl--slide">
                <div className="slide-cover"></div>
                <div className="sl-card-wrapper">
                  <div className="sl-gradient"></div>
                  <div className="sl-img-1 sl-bkg-img"></div>
                  <div className="sl--content-wrapper sl--content-wrapper-inactive">
                    <div className="sl--content-container sl--card-hide">
                      <p className="sl--sub-text">Jeff Kelly</p>
                      <h2>Keller Williams Realty</h2>
                      <p className="sl--card-content">
                        Jeff Kelly, with a decade of Realtor experience and
                        expertise in land development, mortgage, and insurance,
                        collaborates with John Hunter Home Builders. Jeff and
                        his team list John Hunter homes and represent buyers. If
                        you are unrepresented, Jeff offers a discounted rate to
                        list your current home upon closing a new John Hunter
                        Home Builders home. Experience seamless transactions
                        with Jeff and John Hunter Home Builders. role model for
                        men and women everywhere.
                      </p>
                      <div className="sl--link">More Info</div>
                    </div>

                    {/* <!-- Card Nav GRP --> */}
                    <div className="sl--card-nav-container">
                      {/* <!-- Reveal info btn --> */}
                      <div className="sl--content-btn content-reveal-btn">
                        <svg
                          className="card-nav-gfx sl--show-card-info"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 113.63 113.63"
                        >
                          <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
                        </svg>
                      </div>
                    </div>
                    {/* <!-- END: Card Nav GRP --> */}
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="slide-cover"></div>
                <div className="sl-card-wrapper">
                  <div className="sl-gradient"></div>
                  <div className="sl-img-2 sl-bkg-img"></div>
                  <div className="sl--content-wrapper sl--content-wrapper-inactive">
                    <div className="sl--content-container sl--card-hide">
                      <p className="sl--sub-text">Mike Turk</p>
                      <h2>
                        Certainty
                        <br />
                        Home Lending
                      </h2>
                      <p className="sl--card-content">
                        Jeff Kelly, with a decade of Realtor experience and
                        expertise in land development, mortgage, and insurance,
                        collaborates with John Hunter Home Builders. Jeff and
                        his team list John Hunter homes and represent buyers. If
                        you are unrepresented, Jeff offers a discounted rate to
                        list your current home upon closing a new John Hunter
                        Home Builders home. Experience seamless transactions
                        with Jeff and John Hunter Home Builders.
                      </p>
                      <div className="sl--link">Learn More</div>
                    </div>

                    {/* <!-- Card Nav GRP --> */}
                    <div className="sl--card-nav-container">
                      {/* <!-- Reveal info btn --> */}
                      <div className="sl--content-btn content-reveal-btn">
                        <svg
                          className="card-nav-gfx sl--show-card-info"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 113.63 113.63"
                        >
                          <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
                        </svg>
                      </div>
                    </div>
                    {/* <!-- END: Card Nav GRP --> */}
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="slide-cover"></div>
                <div className="sl-card-wrapper">
                  <div className="sl-gradient"></div>
                  <div className="sl-img-3 sl-bkg-img"></div>

                  <div className="sl--content-wrapper sl--content-wrapper-inactive">
                    <div className="sl--content-container sl--card-hide">
                      <p className="sl--sub-text">Falon Carpenter</p>
                      <h2>Truly Title</h2>
                      <p className="sl--card-content">
                        Since 2003, Falon Carpenter has excelled in the title
                        industry. With precision and a focus on accuracy, she
                        ensures smooth closings and values open communication
                        among all parties. Falon finds joy in seeing customers
                        smiles on closing day, whether they have built a custom
                        home or downsized for retirement. Beyond work, she
                        cherishes time with family and friends, enjoying
                        vacations and reading.
                      </p>
                      <div className="sl--link">More Info</div>
                    </div>

                    {/* <!-- Card Nav GRP --> */}
                    <div className="sl--card-nav-container">
                      {/* <!-- Reveal info btn --> */}
                      <div className="sl--content-btn content-reveal-btn">
                        <svg
                          className="card-nav-gfx sl--show-card-info"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 113.63 113.63"
                        >
                          <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
                        </svg>
                      </div>
                    </div>
                    {/* <!-- END: Card Nav GRP --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* <!-- END: .sl-wrapper --> */}
      </div>
    </div>
  );
};

export default SlideNews;
