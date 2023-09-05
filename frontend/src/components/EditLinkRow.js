import React, { useState } from "react";

const EditLinkRow = ({ link }) => {
  const [socialMedia, setSocialMedia] = useState(link.socialMedia);
  const [editLink, setEditLink] = useState(link.link);
  const [editTitle, setEditTitle] = useState(link.title);

  const socialMediaAvailable = ["Instagram", "TikTok", "Facebook"];
  return (
    <div className="flex items-center w-full h-20 gap-4">
      <div className="flex items-center w-1/6 w-full h-full">
        <select
          className="w-full p-2 bg-[#f3f3f1] rounded-xl"
          onChange={(e) => setSocialMedia(e.target.value)}
        >
          {socialMediaAvailable.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center w-3/6 h-full bg-red-200">
        <input
          type="text"
          className="w-full p-2 bg-[#f3f3f1] rounded-xl"
          onChange={(e) => setEditTitle(e.target.value)}
          value={editTitle}
        />
      </div>
      <div className="flex items-center w-2/6 h-full bg-green-200">
      <input
          type="text"
          className="w-full p-2 bg-[#f3f3f1] rounded-xl"
          onChange={(e) => setEditLink(e.target.value)}
          value={editLink}
        />
      </div>
    </div>
  );
};

export default EditLinkRow;
