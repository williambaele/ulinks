import React from "react";
import UserHeader from "../components/UserHeader";

const Dashboard = ({ user }) => {
  return (
    <div className="w-full h-screen px-4 bg-red-100">
      <UserHeader user={user} />
      <div className="w-full bg-green-200 h-[calc(100vh-64px)] grid md:grid-cols-5 gap-2">
        <div className="bg-purple-300 md:col-span-3"></div>
        <div className="bg-yellow-300 md:col-span-2"></div>

      </div>
    </div>
  );
};

export default Dashboard;
