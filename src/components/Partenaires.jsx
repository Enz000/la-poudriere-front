import React from "react";

const Partenaires = ({ data }) => {
  return (
    <section className=" bg-kaki">
      <div className="flex flex-col mx-4  items-center pt-14 pb-14 ">
        <h3 className=" text-cream mb-5 font-medium text-2xl text-center">
          Nos Partenaires
        </h3>
        <div className="sm:flex flex-row w-full  ">
          {data.map(({ attributes }, index) => (
            <img
              key={index}
              src={attributes.url}
              alt="Logo de nos partenaires"
              className="mx-auto  w-1/2 sm:w-1/5 md:w-1/6 lg:w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Partenaires);
