import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import AppsSection from "../components/AppsSection";
// import AppsSection from "../components/AppsSection";

const Home = () => {
  return (
    <div className="flex flex-col bg-[#f3f3f1] px-4">
      <Header />
      <HeroBanner />
      <AppsSection />
    </div>
  );
};

export default Home;

