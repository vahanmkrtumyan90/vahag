import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
import AboutTwo from "@/components/about-two";
import TestimonialsOne from "@/components/testimonials-one";
import ContactOne from "@/components/contact-one";
import Brands from "@/components/brands";
import Appliances from "@/components/appliances";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <Layout>
        <HeaderOne />
        <div id="about">
          <AboutOne />
        </div>
        <FeatureOne />
        <Appliances />
        <div id="whyChooseUs">
          <AboutTwo />
        </div>
        <Brands />
        <div id="testimonials">
          <TestimonialsOne />
        </div>
        <div id="contact">
          <ContactOne />
        </div>
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
