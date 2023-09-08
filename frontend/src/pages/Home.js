import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import AppsSection from "../components/AppsSection";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Home = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <div className="flex flex-col bg-[#f3f3f1]">
        <HeroBanner />
        <AppsSection />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Home;
