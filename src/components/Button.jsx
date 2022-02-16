import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Button = ({ link, content, buttonColor, type }) => {
  return (
    <a href={link}>
      <motion.button
        type={type}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className={
          (buttonColor === "brown" &&
            `bg-${buttonColor}  hover:bg-kaki text-cream font-semibold py-2 px-4 border-none  rounded transition-all duration-500 ease-in-out`) ||
          (buttonColor === "kaki" &&
            `bg-${buttonColor}  hover:bg-brown text-cream font-semibold py-2 px-4 border-none  rounded transition-all duration-500 ease-in-out `) ||
          `bg-cream  hover:bg-brown text-kaki hover:text-cream font-semibold py-2 px-4 border-none  rounded transition-all duration-500 ease-in-out`
        }
      >
        {content}
      </motion.button>
    </a>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  content: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "submit",
  link: "#",
};

export default React.memo(Button);
