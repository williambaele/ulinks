import React, { useState } from "react";

const EditLinkRow = ({ link }) => {
  const [socialMedia, setSocialMedia] = useState(link.socialMedia);
  const [editLink, setEditLink] = useState(link.link);
  const socialMediaAvailable = ["Instagram", "TikTok", "Facebook"];
  return (
    <div className="grid items-center w-full h-20 grid-cols-5 gap-4">
      <div className="flex items-center w-full h-full ">
        <select
          className="w-full p-2 bg-[#f3f3f1] rounded-xl"
          onChange={(e) => setSocialMedia(e.target.value)}
        >
          {socialMediaAvailable.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center h-full col-span-3 bg-red-200">
        <input
          type="text"
          className="w-full p-2 bg-[#f3f3f1] rounded-xl"
          onChange={(e) => setEditLink(e.target.value)}
          value={editLink}
        />
      </div>
      <div className="flex items-center h-full bg-green-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clipboard cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
      </div>
    </div>
  );
};

export default EditLinkRow;
