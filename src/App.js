import Home from "./pages/Home";
import Story from "./pages/Story";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page404 from "./pages/Page404";
import MentionsLegales from "./pages/MentionsLegales";
import ContactInformation from "./components/ContactInformation";
import Footer from "./components/Footer";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App relative scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="*" element={<Page404 codeError={404} />} />
          <Route path="/" element={<Home title={"Accueil"} />} />
          <Route
            path="/notre-histoire"
            element={<Story title={"Notre histoire"} />}
          />
          <Route path="/prix" element={<Price title={"Tarifs"} />} />
          <Route path="/contact" element={<Contact title={"Contact"} />} />
          <Route
            path="/mentions-legales"
            element={<MentionsLegales title={"Mentions Légales"} />}
          />
        </Routes>
        <ContactInformation />
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default React.memo(App);
