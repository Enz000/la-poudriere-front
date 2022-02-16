import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { formatTime } from "../utils/formatTime";
import { useQueryHours } from "../hooks/useQuery";
import { motion } from "framer-motion";
import { variantTitle, variantImage } from "../utils/animateVariant";
const ContactInformation = () => {
  const { loading, error, data } = useQueryHours();
  if (loading) return null;
  if (error) return null;
  return (
    <section className="px-4 lg:px-14 text-kaki">
      <div className="py-20  text-center lg:text-left lg:pl-14">
        <h3 className="text-center font-bold text-3xl mb-12">
          Où nous trouver ?
        </h3>
        <div className=" lg:flex justify-evenly">
          {/* Hours, number, adress part */}
          <motion.div {...variantTitle} className="lg:w-1/2">
            <p className="underline mb-8">HORAIRES D'OUVERTURE</p>
            <ul className=" font-medium mb-8">
              {data.hours.data.map(
                ({ attributes: { day, open_hours, closed_hours } }, index) => {
                  return (
                    <li key={index}>
                      {day} : {open_hours ? formatTime(open_hours) : "Fermé"}{" "}
                      {closed_hours ? `- ${formatTime(open_hours)}` : ""}
                    </li>
                  );
                }
              )}
            </ul>
            <a className="font-semibold" href="tel:0388750516">
              📞 03.88.75.05.16
            </a>
            <p className=" mt-8">
              7, rue Jacques Peirotes, <br />
              67000 Strasbourg
            </p>
          </motion.div>
          {/* Hours, number, adress part  END*/}
          {/* Google map part*/}
          <motion.div {...variantImage} className=" mb-4  lg:w-1/2 lg:pr-14 ">
            <iframe
              title="google maps"
              className=" rounded mx-auto mt-8 w-full h-80 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.7029021412463!2d7.753655115862028!3d48.57723882841512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c9aae8f389af%3A0x44c18c1563d858e1!2s7%20Rue%20Jacques%20Peirotes%2C%2067000%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1640022831798!5m2!1sfr!2sfr"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
          {/* Google map part END*/}
        </div>
        <div className="flex  justify-evenly items-center">
          <div className=" flex-1 text-3xl">
            <a
              href="https://www.facebook.com/LaPoudriereStrasbourg"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className=" text-blue-700 mr-4"
              />
            </a>
            <a
              href="https://www.instagram.com/lapoudrierestrasbourg/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className=" text-pink-500" />
            </a>
          </div>
          <div className="flex-1">
            <Button
              buttonColor={"brown"}
              content={"Prendre RDV"}
              link={"https://www.planity.com/la-poudriere-67000-strasbourg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactInformation);
