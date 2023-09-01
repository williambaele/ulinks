import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import AppsSection from "../components/AppsSection";
import Footer from "../components/Footer";
import Faq from "../components/Faq";


const Home = ({user}) => {
  return (
    <>
      <div className="flex flex-col bg-[#f3f3f1] px-4">
        <Header user={user}/>
        <HeroBanner />
        <AppsSection />
        <Faq/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
