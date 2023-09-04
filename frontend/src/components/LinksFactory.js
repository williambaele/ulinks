import React, { useState } from "react";
import { useLinksContext } from "../hooks/useLinksContext";
import LinksCreator from "./LinksCreator";

const LinksFactory = ({ user, userLinks }) => {

  




  return (
    <div className="w-full h-[calc(100vh-64px)] px-4 py-10 bg-red-100">
      <div className="bg-green-100 h-4/5">
        <LinksCreator user={user} userLinks={userLinks}/>
      </div>
      <div className="bg-orange-100 h-1/5">
      </div>
    </div>
  );
};

export default LinksFactory;

{
  /* <div className="space-y-4 bg-purple-300 h-1/5">
        <p className="text-lg">Your bio</p>
        <form className="w-full">
          <input type="text" className="w-full"></input>
        </form>
      </div>
      <div className="bg-green-500 h-4/5">
       
      </div> */
}
