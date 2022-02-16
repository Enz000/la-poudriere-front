import React from "react";
import ArrowDown from "./ArrowDown";
import Button from "./Button";
import Markdown from "markdown-to-jsx";

const SectionNature = ({ sectionContent }) => {
  return (
    <div className="custom-background text-cream ">
      <div className="mx-4 pt-28 pb-14 md:mx-14 text-center h-full">
        <h2 className="font-bold  text-2xl md:text-4xl mb-12">
          {sectionContent.title}
        </h2>
        <div className=" font-medium leading-8 h-full w-4/5 md:w-1/2 mx-auto mb-12">
          <Markdown>{sectionContent.content}</Markdown>
        </div>
        <div className=" text-center relative">
          <ArrowDown />
          <div className=" hidden md:block absolute right-14  bottom-4 ">
            <Button content={"Prendre RDV"} buttonColor={"cream"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SectionNature);
