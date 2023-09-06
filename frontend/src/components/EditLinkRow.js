import React, { useState } from "react";
import { useLinksContext } from "../hooks/useLinksContext";

const EditLinkRow = ({ link, user }) => {
  const [socialMedia, setSocialMedia] = useState(link.socialMedia);
  const [editLink, setEditLink] = useState(link.link);
  const [editTitle, setEditTitle] = useState(link.title);
  const { dispatch } = useLinksContext();

  const socialMediaAvailable = [
    "Instagram",
    "TikTok",
    "Facebook",
    "Twitter",
    "Youtube",
    "Whatsapp",
    "Other",
  ];


  //EDIT LINK DATA
  const handleEdit = async (e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const updatedLink = {
      ...link,
      active: true,
    };

    try {
      const response = await fetch(`/api/links/${link._id}`, {
        method: "PATCH",
        body: JSON.stringify(updatedLink),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.ok) {
        dispatch({ type: "UPDATE_LINK", payload: updatedLink });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="flex items-center w-full h-20 gap-4">
      <div className="flex items-center w-1/6 h-full">
        <select
          value={socialMedia}
          className="w-full p-2 bg-[#f3f3f1] rounded-xl"
          onChange={(e) => setSocialMedia(e.target.value)}
        >
          {socialMediaAvailable.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center w-3/6 h-full ">
        <input
          type="text"
          className="w-full p-2 bg-[#f3f3f1] rounded-xl outline-none"
          onChange={(e) => setEditTitle(e.target.value)}
          value={editTitle}
        />
      </div>
      <div className="flex items-center w-2/6 h-full ">
        <input
          type="text"
          className="w-full p-2 bg-[#f3f3f1] rounded-xl outline-none"
          onChange={(e) => setEditLink(e.target.value)}
          value={editLink}
        />
      </div>
    </div>
  );
};

export default EditLinkRow;
