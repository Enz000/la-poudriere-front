import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
/**
 *
 * @param {Object} variant
 * @returns
 */

const Animate = ({ children, thresholdValue }) => {
  const animate = useAnimation();
  const [ref, inView] = useInView({
    threshold: thresholdValue,
  });

  const variant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: -100 },
  };

  useEffect(() => {
    if (inView) {
      animate.start("visible");
    }
  }, [animate, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={animate} variants={variant}>
      {children}
    </motion.div>
  );
};

Animate.propTypes = {
  children: PropTypes.node.isRequired,
  thresholdValue: PropTypes.number,
};
Animate.defaultProps = {
  thresholdValue: null,
};

export default Animate;
