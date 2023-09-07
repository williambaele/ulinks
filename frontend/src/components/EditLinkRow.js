import React, { useState } from "react";
import { useLinksContext } from "../hooks/useLinksContext";

const EditLinkRow = ({ link, user, toggleIsEdit }) => {
  const [socialMedia, setSocialMedia] = useState(link.socialMedia);
  const [editLink, setEditLink] = useState(link.link);
  const [editTitle, setEditTitle] = useState(link.title);
  const { dispatch } = useLinksContext();
  const [active, setActive] = useState(link.active);
  const [isEdit, setIsEdit] = useState(false);

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
    if (e) {
      e.preventDefault();
    }
    if (!user) {
      return;
    }

    const updatedLink = {
      ...link,
      title: editTitle,
      link: editLink,
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
        toggleIsEdit();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="relative h-20 rounded-2xl ">
      <div className="absolute top-0 right-0 flex items-center justify-center w-16 h-8 gap-4 bg-white shadow-sm rounded-tr-2xl rounded-bl-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            // Call handleEdit to submit the form
            handleEdit();
            setActive(!active);
          }}
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-check2 hover:text-green-700 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </svg>
      </div>
      <div className="flex items-center h-full px-4 bg-white gap-x-4 rounded-2xl">
        <form className="flex items-center w-full h-20 gap-4">
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
        </form>
      </div>
    </div>
  );
};

export default EditLinkRow;
