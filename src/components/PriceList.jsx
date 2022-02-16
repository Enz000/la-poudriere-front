import { motion } from "framer-motion";
import React from "react";
import { useQueryPrice } from "../hooks/useQuery";
import Page404 from "../pages/Page404";
import { variantBouncyY } from "../utils/animateVariant";
import Loader from "./Loader";
import PriceCard from "./PriceCard";
//TODO VOIR POUR FAIRE DES CARDSLIST , FETCH SUR GRAPHQL , FAIRE UN COMPOSANT CARDS
const PriceList = () => {
  const { error, data, loading } = useQueryPrice();
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const price = data.prices.data;
  return (
    <section className=" my-10 mx-5  ">
      <div>
        <h1 className=" text-kaki text-center text-2xl font-bold mb-10">
          Nos Tarifs
        </h1>
      </div>
      <motion.div
        {...variantBouncyY}
        className="  container bg-kaki mx-auto lg:w-3/4 xl:w-1/2 2xl:w-1/3 p-8 gap-8 grid sm:grid-cols-2 grid-cols-1"
      >
        {price.map(({ attributes }, index) => (
          <PriceCard
            key={index}
            title={attributes.title_card}
            content={attributes.content}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(PriceList);
