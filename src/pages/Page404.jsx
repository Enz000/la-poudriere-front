import React from "react";

import Button from "../components/Button";
const Page404 = () => {
  return (
    <section>
      <div className="flex items-center justify-center w-screen h-screen ">
        <div className="px-4 lg:py-12 ">
          <div className="lg:gap-4">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-kaki text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-brown">Oups!</span> Une erreur est
                survenue ...
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                La page que vous essayez de consulter n'est pas disponible
              </p>
              <Button
                content="Retourner à l'accueil"
                buttonColor="kaki"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Page404);
