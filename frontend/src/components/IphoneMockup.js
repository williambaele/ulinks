import React from "react";
import { Link } from "react-router-dom";
import ClientRow from "./ClientRow";

const IphoneMockup = ({ user, userActiveLinks }) => {
  return (
    <div class="z-10 relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] md:h-[600px] h-[350px] md:w-[300px] w-[180px]">
      <div class="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div class="z-10 rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-[#f3f3f1]">
        <div className="flex items-center justify-center h-1/5">
          <p className="text-xl font-bold">
            {user.pseudo}
          </p>
        </div>
        <div className="flex flex-col gap-1 px-2 py-2 overflow-scroll h-3/5">
          {userActiveLinks.map((link) =>
          <ClientRow link={link} key={link._id}/>
          )}
        </div>
        <div className="flex items-center justify-center h-1/5">
          <Link to={`/${user.pseudo}`}>
            <p className="font-bold text-center bottom-10">
              ulinks.me/{user.pseudo}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IphoneMockup;
