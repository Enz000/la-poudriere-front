import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ArrowDown = ({ color }) => {
  return (
    <motion.div
      className={` text-${color}  text-center`}
      animate={{ y: 5 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
    >
      <FontAwesomeIcon
        icon={faArrowDown}
        className="my-10 text-center text-3xl leading-none"
      />
    </motion.div>
  );
};

ArrowDown.propTypes = {
  color: PropTypes.string,
};
ArrowDown.defaultProps = {
  color: "cream",
};

export default React.memo(ArrowDown);
