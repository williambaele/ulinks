import React, { useState } from "react";
import { useLinksContext } from "../hooks/useLinksContext";
import LinksCreator from "./LinksCreator";
import LinksShowroom from "./LinksShowroom";

const LinksFactory = ({ user, userLinks }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [socialMedia, setSocialMedia] = useState("");
  const [visibleComponent, setVisibleComponent] = useState("links");
  return (
    <div className="w-full h-[calc(100vh-64px)] px-4 py-10 bg-red-100">
      <div className="bg-green-100 h-4/5">
        <div className="h-full">
          <div className="flex justify-center h-1/6">
            <button
              onClick={() => {
                setVisibleComponent("")
                setIsVisible(!isVisible); // Close the media selection
                setSocialMedia(""); // Set the selected media to null to disable the div
              }}
              className="h-10 flex items-center gap-4 p-2 px-10 font-bold text-gray-800 bg-[#ffc971] rounded-2xl"
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
              <p>Linak</p>
            </button>
          </div>
          <div className="grid overflow-scroll h-5/6">
            {visibleComponent === "links" ? (
              <LinksShowroom userLinks={userLinks} />
            ) : (
              <LinksCreator user={user} userLinks={userLinks} />
            )}
          </div>
        </div>
      </div>
      <div className="bg-orange-100 h-1/5"></div>
    </div>
  );
};

export default LinksFactory;
