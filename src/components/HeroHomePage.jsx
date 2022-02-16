import Button from "./Button";
import React from "react";
import Markdown from "markdown-to-jsx";
import ArrowDown from "./ArrowDown";
import { motion } from "framer-motion";
import {
  variantBouncyY,
  variantImage,
  variantTitle,
} from "../utils/animateVariant";

const Hero = ({ heroSection: { title, content, img } }) => {
  return (
    <section>
      <div className="  relative  px-4 pt-20 md:pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8">
        <div className="max-w-xl mb-24 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <motion.h1
            {...variantTitle}
            className="max-w-lg text-4xl font-bold leading-none tra cking-tight text-kaki sm:text-5xl md:mx-auto"
          >
            {title}
          </motion.h1>
          <div>
            <motion.p
              {...variantTitle}
              className="inline-block px-3 py-px mb-8 text-xs font-semibold tracking-wider text-kaki uppercase rounded-full "
            >
              [poudrihair]
            </motion.p>
          </div>
          <motion.div {...variantBouncyY}>
            <Markdown className="text-base font-medium text-kaki md:text-lg">
              {content}
            </Markdown>
          </motion.div>
        </div>
        <div className=" hidden sm:grid items-center rounded  max-w-screen-lg gap-8 row-gap-5 mb-12 sm:grid-cols-3 lg:grid-cols-3 sm:mx-auto">
          {img.map(({ attributes }, index) => (
            <motion.img
              {...variantImage}
              key={index}
              className="object-cover w-full mx-auto h-56 rounded shadow-lg"
              src={process.env.REACT_APP_URI + attributes.url}
              alt={`cliente coiffure ${index++}`}
            />
          ))}
        </div>
        <motion.div
          {...variantImage}
          className="flex items-center h-1/5  justify-evenly sm:justify-evenly  md:w-1/2 m-auto "
        >
          <Button
            content={"Notre histoire"}
            buttonColor={"brown"}
            link={"#story"}
          />
          <Button
            content={"Prendre RDV"}
            buttonColor={"brown"}
            link={"https://www.planity.com/la-poudriere-67000-strasbourg"}
          />
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <ArrowDown color="kaki" />
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
