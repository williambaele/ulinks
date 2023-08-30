import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import AppsSection from "../components/AppsSection";

const Home = () => {
  return (
    <div className="flex flex-col bg-[#f3f3f1] px-4">
      <Header />
      <div>
        <div className="absolute inset-0">
          <HeroBanner />
        </div>
        <div className="h-screen">
          <AppsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
