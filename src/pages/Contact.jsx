import ContactForm from "../components/ContactForm";
import React from "react";
import PropTypes from "prop-types";
import useChangeTitle from "../hooks/useChangeTitle";
//TODO  VOIR FORMIK , VALIDATION ERROR POUR LE MESSAGE , AJOUTER DES ANIMATIONS FRAMER MOTION
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
