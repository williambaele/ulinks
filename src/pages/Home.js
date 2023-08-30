import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-[#f3f3f1] px-4">
      <Header />
      <div className="flex-grow bg-red-200 flex items-center justify-center my-10">
        <HeroBanner/>
      </div>
    </div>
  );
};

export default Home;
