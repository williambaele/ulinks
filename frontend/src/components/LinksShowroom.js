import React from 'react';

const LinksShowroom = ({ userLinks }) => {
  return (
    <div>
      {userLinks && userLinks.length > 0 ? (
        userLinks.map((link) => (
          <div
            key={link.id} 
            className="flex items-center justify-center h-16 my-1 bg-white rounded shadow-sm"
          >
            {link.socialMedia}
          </div>
        ))
      ) : (
        <p>No user links available.</p>
      )}
    </div>
  );
};

export default LinksShowroom;
