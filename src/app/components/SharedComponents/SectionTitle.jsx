import Image from "next/image";
import React from "react";
import "./SectionTitle.css"
const SectionTitle = ({ sectionHeading }) => {
  return (
    <div className=" w-full    my-11 flex justify-center items-center gap-1 sectionTitle mx-auto">
 
      <p className="text-center  section-heading">{sectionHeading}</p>
     
    </div>
  );
};

export default SectionTitle;
