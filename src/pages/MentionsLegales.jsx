import React from "react";
import useChangeTitle from "../hooks/useChangeTitle";
import PropTypes from "prop-types";

const MentionsLegales = ({ title }) => {
  useChangeTitle(title);
  return <section></section>;
};

MentionsLegales.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(MentionsLegales);
