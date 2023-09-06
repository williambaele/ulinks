import React from 'react';

const UserPage = ({user}) => {
    return (
        <div>
            <p>{user.pseudo}</p>
        </div>
    );
};

export default UserPage;