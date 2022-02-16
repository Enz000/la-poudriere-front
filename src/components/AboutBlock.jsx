import React from "react";
import ArrowDown from "./ArrowDown";
import Button from "./Button";
import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";
const AboutBlock = ({ AboutContent }) => {
  return (
    <section id="story" className=" bg-kaki text-cream">
      <div className=" flex  flex-col lg:flex-row items-center py-28 lg:py-48 xl:py-28 px-4">
        <div className="hidden lg:block w-1/2  ">
          <img
            className=" w-2/5 m-auto rounded"
            src={process.env.REACT_APP_URI + AboutContent.img}
            alt=" brushing"
          />
        </div>
        <div className=" w-3/4 md:w-1/2   ">
          <h3 className=" font-bold text-3xl text-center lg:text-left mb-10 lg:mb-24">
            {AboutContent.title}
          </h3>
          {/* Mobile part */}
          <div className=" lg:hidden mb-8 ">
            <img
              className="  w-4/5 m-auto rounded"
              src={process.env.REACT_APP_URI + AboutContent.img}
              alt="brushing"
            />
          </div>
          {/* Mobile Part End  */}
          <div className=" lg:mr-20 text-sm : md:text-base">
            <Markdown
              options={{
                forceWrapper: false,
              }}
            >
              {AboutContent.content}
            </Markdown>
          </div>
        </div>
      </div>
      <div>
        <div className=" text-center relative px-4">
          <ArrowDown color={"cream"} />
          <div className=" hidden md:block absolute right-24  bottom-14 ">
            <Button
              content={"Prendre RDV"}
              buttonColor={"cream"}
              link={"https://www.planity.com/la-poudriere-67000-strasbourg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutBlock.propTypes = {
  AboutContent: PropTypes.shape(
    PropTypes.arrayOf({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default React.memo(AboutBlock);
