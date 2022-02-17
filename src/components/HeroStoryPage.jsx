import React from "react";
import PropTypes from "prop-types";
import { animate, motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import { variantBouncyY, variantBouncyX } from "../utils/animateVariant";
const HeroStoryPage = ({
  heroStoryObject: { img, singleContent, singleTitle },
}) => {
  return (
    <div className=" bg-kaki">
      <div className="px-4 pt-28 pb-14  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:pt-28">
        <div className="grid gap-20 lg:gap-40 lg:grid-cols-2">
          <motion.div
            {...variantBouncyY}
            className="flex items-center justify-center -mx-4 lg:pl-8"
          >
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-64 w-28 sm:w-52 xl:w-64"
                src={img.data[0].attributes.url}
                alt={img.data[0].attributes.alt}
              />
              <img
                className="object-cover w-32 h-32 rounded shadow-lg sm:h-48 xl:h-80 sm:w-56 xl:w-80"
                src={img.data[1].attributes.url}
                alt={img.data[1].attributes.alt}
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={img.data[2].attributes.url}
                alt={img.data[2].attributes.alt}
              />
            </div>
          </motion.div>
          <motion.div
            {...variantBouncyX}
            className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-4xl"
          >
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg px-10 mb-14 text-center  lg:block  md:text-justify text-3xl font-bold tracking-tight text-cream sm:text-4xl sm:leading-none">
                {singleTitle}
              </h2>

              <Markdown className=" px-10 lg:pr-0 text-sm md:text-base w-full  break-words text-cream md:text-md  ">
                {singleContent}
              </Markdown>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

HeroStoryPage.propTypes = {};

export default HeroStoryPage;
