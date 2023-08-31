import React from 'react';
import UserHeader from '../components/UserHeader';

const Dashboard = ({user}) => {
    return (
        <div className="w-full h-screen bg-red-100">
            <UserHeader user={user}/>
        </div>
    );
};

export default Dashboard;