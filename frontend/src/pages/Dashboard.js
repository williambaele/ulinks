import React from "react";
import UserHeader from "../components/UserHeader";
import IphoneMockup from "../components/IphoneMockup";
import LinksFactory from "../components/LinksFactory";
const Dashboard = ({ user, userActiveLinks, userLinks }) => {
  return (
    <div className="max-h-screen">
      <UserHeader user={user} />
      <div className="w-full h-[calc(100vh-64px)] grid md:grid-cols-5 gap-2 bg-[#f3f3f1]">
        <div className="md:border-r md:col-span-3">
          <LinksFactory user={user} userLinks={userLinks} />
        </div>
        <div className="items-center justify-center hidden md:flex md:col-span-2">
          <IphoneMockup user={user} userActiveLinks={userActiveLinks} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
