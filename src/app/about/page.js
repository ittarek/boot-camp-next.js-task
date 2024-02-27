
import "./about.css";
import CountUp from "../components/CountUp"
import Image from "next/image";
// import NavBar from "./components/NavBar";

const aboutPage  = () =>{



    return(
        <section>
      <div>
        {/* Page heading */}
        <h1 className="text-4xl font-bold text-purple-400 text-center">
          About Us
        </h1>

        {/* Main content container */}
        <div className="lg:flex my-10 gap-10">
          {/* Image container */}
          <div className="col">
            <div
              className="about__img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
         
              <Image width={100} height={100}
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="image"
                className="w-100 mx-2" 
              />
            </div>
          </div>

          {/* Content container */}
          <div>
            <div
              className="about__content"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              {/* About Us heading */}
              <h2>About Us</h2>

              {/* About Us description */}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              {/* Counters section */}
              <div className="about__counter flex gap-24 mt-10">
                {/* First set of counters */}
                <div className="">
                  <div className="single__counter">
                    <span className="counter mb-10">
                      <CountUp start={0} end={25} duration={7} suffix="K" />
                    </span>
                    <p className="counter__title">Completed News</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={7} suffix="M" />
                    </span>
                    <p className="counter__title">News Around World</p>
                  </div>
                </div>

                {/* Second set of counters */}
                <div className="">
                  <div className="single__counter">
                    <span className="counter mb-10">
                      <CountUp start={0} end={95} duration={7} suffix="M" />
                    </span>
                    <p className="counter__title">Ideas Raised News</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={7} suffix="K" />
                    </span>
                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default aboutPage;