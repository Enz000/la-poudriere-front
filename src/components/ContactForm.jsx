import Button from "../components/Button";
import { useFormik } from "formik";
import { formSchema } from "../Validations/FormValidation";
import React from "react";
import { motion } from "framer-motion";
import { variantBouncyY, variantBouncyX } from "../utils/animateVariant";
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
    validationSchema: formSchema,
  });

  return (
    <section>
      <h1 className=" text-2xl text-center mt-16 font-bold text-kaki">
        Contactez nous
      </h1>

      <form
        method="POST"
        name="contact-form"
        data-netlify-recaptcha="true"
        className="w-full max-w-lg mt-5 md:mt-16 px-2 mx-auto"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <input type="hidden" name="form-name" value="contact-form" />
          <motion.div
            variant={variantBouncyY}
            initial={variantBouncyY.initial}
            transition={variantBouncyY.transition}
            animate={variantBouncyY.animate}
            className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
          >
            <label
              className="block uppercase tracking-wide text-kaki text-xs font-bold mb-2"
              htmlFor="grid-first-name"
              name="firstname"
            >
              Votre prénom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-kaki border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-brown focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jean"
              {...formik.getFieldProps("firstname")}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <p className=" text-red-500">{formik.errors.firstname}</p>
            ) : null}
          </motion.div>
          <motion.div {...variantBouncyY} className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-kaki text-xs font-bold mb-2"
              htmlFor="grid-last-name"
              name="lastname"
            >
              Nom de famille
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-kaki border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brown"
              id="grid-last-name"
              type="text"
              placeholder="Dupont"
              {...formik.getFieldProps("lastname")}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <p className=" text-red-500">{formik.errors.lastname}</p>
            ) : null}
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <motion.div {...variantBouncyX} className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-kaki text-xs font-bold mb-2"
              htmlFor="grid-password"
              name="email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-kaki border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-brown"
              id="email"
              type="email"
              placeholder="jeandupont@monsupermail.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className=" text-red-500">{formik.errors.email}</p>
            ) : null}
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <motion.div {...variantBouncyY} className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-kaki text-xs font-bold mb-2"
              htmlFor="grid-password"
              name="message"
            >
              Message
            </label>
            <motion.textarea
              {...variantBouncyY}
              className=" no-resize appearance-none block w-full bg-gray-200 text-kaki border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-brown h-48 resize-none"
              id="message"
              placeholder="Salut la poudrière !"
              {...formik.getFieldProps("message")}
            ></motion.textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className=" text-red-500">{formik.errors.message}</p>
            ) : null}
          </motion.div>
        </div>
        <div>
          <motion.div {...variantBouncyX} className="text-center">
            <div data-netlify-recaptcha="true"></div>
            <Button
              buttonColor={"brown"}
              disabled={!(formik.isValid && formik.dirty)}
              content={"Envoyer"}
              type="submit"
            />
          </motion.div>
        </div>
      </form>
    </section>
  );
};

ContactForm.propTypes = {};

export default React.memo(ContactForm);
