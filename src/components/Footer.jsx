import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" absolute bottom-0  w-full bg-kaki text-sm">
      <div className=" text-cream mx-4 py-3 sm:py-2 flex flex-wrap flex-col-reverse md:flex-row items-center leading-none justify-around">
        <a href="/" target="_blank" rel="noreferer">
          <span className="my-2 sm:my-0">made with by enzosantamaria</span>
        </a>
        <span className="my-2 sm:my-0">
          Copyright lapoudrièrestrasbourg.com
        </span>
        <Link to="/mentions-legales">
          <span className=" cursor-pointer my-2 sm:my-0">Mentions légales</span>
        </Link>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
