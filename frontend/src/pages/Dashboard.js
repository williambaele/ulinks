import React from 'react';
import UserHeader from '../components/UserHeader';

const Dashboard = ({ user }) => {
  return (
    <div className="w-full h-screen px-4 bg-red-100">
      <UserHeader user={user} />
    </div>
  );
};

export default Dashboard;
