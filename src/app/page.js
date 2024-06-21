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
import MainSlide from "./components/Gallary-news/MainSlide";
import SideSlide1 from "./components/Gallary-news/SideSlide1";
import SideSlide2 from "./components/Gallary-news/SideSlide2";
import SectionTitle from "./components/SharedComponents/SectionTitle";
import EditorChioce from "./components/editorChoice/EditorChioce";
import MeddleEeastNews from "./components/MiddelEeastnews/MeddleEeastNews";
import TechStart from "./components/Teach&Startup/TechStart";
import Subscription from "./components/Subscription/Subscription";
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
        <div className="bannarImage flex flex-col justify-center items-center my-24 w-full">
          <h1 className="text-4xl text-black font-bold my-5 ">
            Next.js Frame Work is Running now
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
        <SectionTitle sectionHeading="Top News"></SectionTitle>
        <section className="mx-auto lg:flex justify-center w-[100%]  gap-[2%] ">
          <div className="w-full lg:w-[23%] mx-auto">
            <LeftSide></LeftSide>
          </div>
          <div className="mx-auto w-full  lg:w-[50%] ">
            <MainSide></MainSide>
          </div>
          <div className="w-full lg:w-[23%] mx-auto">
            <RightSide></RightSide>
          </div>
        </section>
      </Container>
      <Container>
        <EditorChioce></EditorChioce>
      </Container>
      <Container>
        <MeddleEeastNews></MeddleEeastNews>
      </Container>
        <TechStart
      ></TechStart>
      <Container>
        <SectionTitle sectionHeading="Latest News"></SectionTitle>
        <LatestNews></LatestNews>
      </Container>
      <Subscription> </Subscription>
      <Container>

        <div>
          <SectionTitle sectionHeading="Photo Gallary"></SectionTitle>
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
