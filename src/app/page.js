// import Image from "next/image";
import Slider from "./gallary/Slider";
import LatastNews from "./latastNews/LatastNews";
export default function Home() {
  return (
    <main>
    
 <section className="banner ">
      <img src="https://avatars.githubusercontent.com/u/7092023?v=4" alt="Banner" />
      <div className="banner-content">
        <h2>Hello</h2>
        <p>
          I,m Gio, a talented frontend developer that loves creating immersive
          web experiences.
        </p>
      </div>
    </section> 
    
     <svg className="wave"
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
        <use xlinkHref="#gentle-wave" x="50" y="0" fill="#03ffff" fillOpacity=".2" />
        <use xlinkHref="#gentle-wave" x="50" y="3" fill="#03ffff" fillOpacity=".5" />
        <use xlinkHref="#gentle-wave" x="50" y="6" fill="#03ffff" fillOpacity=".9" />
      </g>
    </svg>
      <div className="bannarImage flex flex-col justify-center items-center">
        <h1 className="text-4xl text-black font-bold my-5 ">
          Next.js Framwork is learnning now
        </h1>
        <p className="w-3/4 text-white">
          Next.js is a popular open-source React framework that is used to build
          modern web applications. It was developed by Vercel  and has gained significant traction in the web development
          community due to its efficiency, ease of use, and robust features.
        </p>
      </div>

<div className="my-11">
  <LatastNews/>
</div>
      <div>
<Slider/>

      </div>
    </main>
  );
}
