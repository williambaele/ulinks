import React from "react";
import { Link } from "react-router-dom";

const IphoneMockup = ({ user, userActiveLinks }) => {
  return (
    <div class="z-0 relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] md:h-[600px] h-[350px] md:w-[300px] w-[180px]">
      <div class="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"></div>
      <Link to={`/${user.pseudo}`}>
        <p className="absolute left-0 right-0 font-bold text-center bottom-10">
          ulinks.me/{user.pseudo}
        </p>
      </Link>
      <p className="absolute left-0 right-0 font-bold text-center top-32">
        {userActiveLinks.length}
      </p>
      <p className="absolute left-0 right-0 p-2 text-xl font-bold text-center border-2 top-10 rounded-3xl">
        {user.pseudo}
      </p>
    </div>
  );
};

export default IphoneMockup;
