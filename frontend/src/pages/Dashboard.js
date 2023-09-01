import React from "react";
import UserHeader from "../components/UserHeader";
import IphoneMockup from "../components/IphoneMockup";
const Dashboard = ({ user }) => {
  return (
    <div className="w-full h-screen px-4 bg-[#f3f3f1]">
      <UserHeader user={user} />
      <div className="w-full  h-[calc(100vh-64px)] grid md:grid-cols-5 gap-2">
        <div className="bg-purple-300 md:col-span-3">
            
        </div>
        <div className="flex items-center justify-center md:col-span-2">
          <IphoneMockup user={user}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
