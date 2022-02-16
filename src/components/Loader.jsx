import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  return (
    <div className="h-screen flex items-center flex-col justify-center ">
      <h1 className=" text-2xl text-kaki font-medium pb-2 ">Chargement ...</h1>
      <motion.div
        variants={loaderVariants}
        animate="animationOne"
        className=" w-4 h-4 mt-10 rounded-lg bg-brown "
      ></motion.div>
    </div>
  );
};

export default React.memo(Loader);
