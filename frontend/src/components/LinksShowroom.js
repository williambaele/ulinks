import React from "react";
import LinkRow from "./LinkRow";

const LinksShowroom = ({ userLinks, user }) => {
  return (
    <div  className="grid gap-2">
      {userLinks && userLinks.length > 0 ? (
        userLinks.map((link) => <LinkRow key={link.id} link={link} user={user} />)
      ) : (
        <p>No user links available.</p>
      )}
    </div>
  );
};

export default LinksShowroom;
