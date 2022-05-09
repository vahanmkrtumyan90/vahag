import React from "react";
import Head from "next/head";
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
      <Head>
        <title>David&#39;s Sub-Zero, Viking and Wolf repair</title>
        <meta
          property="og:description"
          content=" Sub-Zero, Viking and Wolf Repair Service in Glendale, Tarzana, Encino, Sherman Oaks, Studio City, and more..."
        />
      </Head>
      <Layout>
        <HeaderOne />
        <Brands />
        <div id="about">
          <AboutOne />
        </div>
        <FeatureOne />
        <Appliances />
        <div id="whyChooseUs">
          <AboutTwo />
        </div>
        <div id="testimonials">
          <TestimonialsOne />
        </div>
          <ContactOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
