import ContactForm from "../components/ContactForm";
import React from "react";
import PropTypes from "prop-types";
import useChangeTitle from "../hooks/useChangeTitle";
const Contact = ({ title }) => {
  useChangeTitle(title);
  return (
    <>
      <ContactForm />
    </>
  );
};
Contact.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Contact);
