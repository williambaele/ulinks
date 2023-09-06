import React, { useState } from "react";
import LinksCreator from "./LinksCreator";
import LinksShowroom from "./LinksShowroom";
import UserBio from "./UserBio";

const LinksFactory = ({ user, userLinks }) => {
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
                setVisibleLinks(!visibleLinks);
                setIsVisible(!isVisible); // Close the media selection
                setSocialMedia(""); // Set the selected media to null to disable the div
              }}
              className="h-10 flex items-center gap-4 p-2 px-20 font-bold text-gray-800 bg-[#ffc971] rounded-2xl"
            >
              {visibleLinks === true ? (
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              )}
              <p>{visibleLinks === true ? "Link" : "Close"}</p>
            </button>
          </div>
          <div className="grid h-full overflow-scroll">
            {visibleLinks === true ? (
              <LinksShowroom user={user} userLinks={userLinks} />
            ) : (
              <LinksCreator user={user} setVisibleLinks={setVisibleLinks} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksFactory;
