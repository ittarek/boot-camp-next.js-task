// import Image from "next/image";
import Image from "next/image";
import Container from "./components/Container";
import LeftSide from "./components/topStories/LeftSide";
import MainSide from "./components/topStories/MainSide";
import RightSide from "./components/topStories/RightSide";
import Slider from "./gallary/Slider";
import LatestNews from "./latastNews/LatastNews";
import SlideNews from "./components/slideNews/SlideNews";
// import SlideNews from "./components/SlideNews/SlideNews";

// import LatestNews from './path-to-LatestNews-component/LatestNews';

// import LatestNews from "./latastNews/LatastNews";
export default function Home() {
  return (
    <main>
      <section className="banner ">
        <Image
          className="w-[400px]"
          width={500}
          height={500}
          src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           blurDataURL="data:..." 
           placeholder="blur"
          alt="Banner"
        />
        <div className="banner-content">
          <h2>Hello</h2>
          <p>
            I,m Gio, a talented frontend developer that loves creating immersive
            web experiences.
          </p>
        </div>
      </section>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="waves">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="#03ffff"
            fillOpacity=".2"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            fill="#03ffff"
            fillOpacity=".5"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            fill="#03ffff"
            fillOpacity=".9"
          />
        </g>
      </svg>
      <Container>
        {" "}
        <div className="bannarImage flex flex-col justify-center items-center">
          <h1 className="text-4xl text-black font-bold my-5 ">
            Next.js Framwork is learnning now
          </h1>
          <p className="w-3/4 text-white">
            Next.js is a popular open-source React framework that is used to
            build modern web applications. It was developed by Vercel and has
            gained significant traction in the web development community due to
            its efficiency, ease of use, and robust features.
          </p>
        </div>
      </Container>
      <Container>
        <section className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className=" grid-cols-3 ">
            <LeftSide></LeftSide>
          </div>
          <div className=" grid-cols-6">
            <MainSide></MainSide>
          </div>
          <div className=" grid-cols-3">
            <RightSide></RightSide>
          </div>
        </section>
      </Container>

      <Container>
        {" "}
        <div className="my-11">
          <LatestNews></LatestNews>
        </div>
      </Container>
      <Container>
        {" "}
        <div>
          <Slider />
        </div>
      </Container>
      <Container>
        {" "}
        <SlideNews></SlideNews>
      </Container>
    </main>
  );
}
