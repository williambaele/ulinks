import React from "react";
import LinkRow from "./LinkRow";
import { useAutoAnimate } from '@formkit/auto-animate/react'


const LinksShowroom = ({ userActiveLinks, user }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
    <div  className="flex flex-col gap-2" ref={parent}>
      {userActiveLinks && userActiveLinks.length > 0 ? (
        userActiveLinks.map((link) => <LinkRow key={link.id} link={link} user={user} />)
      ) : (
        <p className="text-center tex-sm">No links available</p>
      )}
    </div>
  );
};

export default LinksShowroom;
