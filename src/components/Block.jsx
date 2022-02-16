import Markdown from "markdown-to-jsx";
import React from "react";
import PropTypes from "prop-types";

const Block = ({ block }) => {
  return (
    <div
      className={
        block.index % 2
          ? `bg-kaki text-cream  py-28 px-14`
          : `bg-cream text-kaki  py-28 px-14`
      }
    >
      <h3 className="text-center font-bold text-xl mb-14 md:text-3xl">
        {block.title}
      </h3>
      <div className="mx-auto w-full md:w-10/12 lg:w-1/2 text-sm lg:text-base ">
        <Markdown className=" break-words  ">{block.content}</Markdown>
      </div>
    </div>
  );
};

Block.propTypes = {
  block: PropTypes.shape(
    PropTypes.arrayOf({
      title: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default React.memo(Block);
