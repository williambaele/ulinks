import React from "react";

const UserBio = () => {
  return (
    <div className="h-full ">
      <h3 className="text-xl h-1/4">Edit your bio</h3>
      <form className="bg-green-800 h-3/4 rounded-xl">
        <textarea className="w-full h-full p-2 shadow-sm rounded-xl" placeholder="Your meaningful bio"/>
      </form>
    </div>
  );
};

export default UserBio;
