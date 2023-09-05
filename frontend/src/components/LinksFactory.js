import React, { useState } from "react";
import LinksCreator from "./LinksCreator";
import LinksShowroom from "./LinksShowroom";
import UserBio from "./UserBio";


const LinksFactory = ({ user, userActiveLinks }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [socialMedia, setSocialMedia] = useState("");
  const [visibleLinks, setVisibleLinks] = useState(true);
  return (
    <div className="w-full h-[calc(100vh-64px)] px-4 py-10 space-y-6">
      <div className="h-4/5">
        <div className="h-full">
          <div className="flex items-center justify-center h-1/6">
            <button
              onClick={() => {
                setVisibleLinks(!visibleLinks)
                setIsVisible(!isVisible); // Close the media selection
                setSocialMedia(""); // Set the selected media to null to disable the div
              }}
              className="h-10 flex items-center gap-4 p-2 px-20 font-bold text-gray-800 bg-[#ffc971] rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                strokeWidth="4"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
              <p>Link</p>
            </button>
          </div>
          <div className="grid overflow-scroll h-5/6">
            {visibleLinks === true ? (
              <LinksShowroom user={user} userActiveLinks={userActiveLinks} />
            ) : (
              <LinksCreator user={user} userActiveLinks={userActiveLinks} setVisibleLinks={setVisibleLinks} />
              )}
          </div>
        </div>
      </div>
      <div className="h-1/5">
        <UserBio/>
      </div>
    </div>
  );
};

export default LinksFactory;
