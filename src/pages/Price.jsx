import React from "react";
import useChangeTitle from "../hooks/useChangeTitle";
import PropTypes from "prop-types";
import PriceList from "../components/PriceList";

const Price = ({ title }) => {
  useChangeTitle(title);
  return <PriceList />;
};

Price.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Price);
