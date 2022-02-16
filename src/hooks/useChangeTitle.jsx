import { useEffect } from "react";

const useChangeTitle = (title) => {
  let currentTitle = "La Poudrière - Salon de coiffure sur Strasbourg";
  useEffect(() => {
    document.title = `${title} | ${currentTitle}`;
  });
};

export default useChangeTitle;
