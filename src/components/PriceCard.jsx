import React from "react";
import PropTypes from "prop-types";

const PriceCard = ({ title, content }) => {
  return (
    <div className=" border-borderKaki  text-cream  h-full  mx-auto  border-4 text-center  ">
      <h3 className=" font-semibold text-xl text-center mx-5  mt-3 mb-10">
        {title}
      </h3>
      {content.map(
        (
          {
            title_prestation,
            content_prestation,
            content_prestation2,
            price,
            price2,
          },
          index
        ) => (
          <div className="text-left mx-5 my-5" key={index}>
            <span className=" underline font-semibold">{title_prestation}</span>
            {content_prestation2 ? (
              <>
                <p className=" relative text-sm sm:text-md  font-light mb-4">
                  {content_prestation}
                  <span className=" absolute right-0 font-semibold">
                    {price}€
                  </span>
                </p>
                <p className=" relative text-sm sm:text-md font-light mb-4">
                  {content_prestation2}
                  <span className=" absolute right-0 font-semibold">
                    {price2}€
                  </span>
                </p>
              </>
            ) : (
              <>
                <p className=" text-sm sm:text-md font-light mb-4">
                  {content_prestation}
                </p>
                <p className="  font-semibold">{price}€</p>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title_prestation: PropTypes.string.isRequired,
      content_prestation: PropTypes.string.isRequired,
      content_prestation2: PropTypes.string,
      price: PropTypes.number.isRequired,
      price2: PropTypes.number,
    }).isRequired
  ).isRequired,
};
PriceCard.defaultProps = {
  content_prestation2: null,
  price2: null,
};

export default PriceCard;
