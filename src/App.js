import React from "react";
import Banner from "./JSX/Banner/Banner";
import Companies from "./JSX/Companies/Companies";
import Contact from "./JSX/Contact/Contact";
import Deals from "./JSX/Deals/Deals";
import Footer from "./JSX/Footer/Footer";
import Section2 from "./JSX/Section 2/Section2";
import SocialLinks from "./JSX/Social Media Links/SocialLinks";

function App() {
  return (
    <>
      <Banner />
      <Section2 />
      <Companies />
      <SocialLinks />
      <Deals />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
