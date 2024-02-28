// import Image from "next/image";
import Image from "next/image";
import Container from "./components/Container";
import LeftSide from "./components/topStories/LeftSide";
import MainSide from "./components/topStories/MainSide";
import RightSide from "./components/topStories/RightSide";
import Slider from "./gallary/Slider";
import LatestNews from "./latastNews/LatastNews";
import SlideNews from "./components/slideNews/SlideNews";
import Bannar from "./components/bannar/Bannar";
// import SlideNews from "./components/SlideNews/SlideNews";

// import LatestNews from './path-to-LatestNews-component/LatestNews';

// import LatestNews from "./latastNews/LatastNews";
export default function Home() {
  return (
    <main>
      <Container>
      <Bannar></Bannar>
      </Container>
    
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
        <section className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4   ">
          <div className=" grid-cols-3 ">
            <LeftSide></LeftSide>
          </div>
          <div className=" grid-cols-6 ">
            <MainSide></MainSide>
          </div>
          <div className=" grid-cols-3 ">
            <RightSide></RightSide>
          </div>
        </section>
      </Container>

      <Container>
        {" "}
        <div className="my-[100px]">
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
