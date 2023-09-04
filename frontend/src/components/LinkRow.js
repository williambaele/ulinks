import React, { useState } from "react";
import { useLinksContext } from "../hooks/useLinksContext";
import EditLinkRow from "./EditLinkRow";
import NormalLinkRow from "./NormalLinkRow";

const LinkRow = ({ link, user }) => {
  const [active, setActive] = useState(false);
  //DELETE LINK
  const { dispatch } = useLinksContext();
  const handleDeleteTask = async (linkId) => {
    if (!user) {
      console.log("You must be logged in");
      return;
    }
    const response = await fetch(`/api/links/${linkId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      dispatch({ type: "DELETE_LINK", payload: { _id: linkId } });
    } else {
      console.log("Error deleting the link.");
    }
  };

  

  //EDIT LOGIC
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="relative h-20 transition-shadow duration-700 bg-red-100 rounded-2xl ">
      <div className="absolute top-0 right-0 flex items-center justify-center w-32 h-8 gap-4 bg-white shadow-sm rounded-tr-2xl rounded-bl-2xl">
        <div>
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-toggle-off cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setActive(!active)}
            >
              <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="green"
              class="bi bi-toggle-on cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setActive(!active)}
            >
              <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
          )}
        </div>
        {isEdit ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsEdit(!isEdit)}
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check2 hover:text-green-700 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </svg>
        ) : (
          <svg
            onClick={() => setIsEdit(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            class="bi bi-pencil-square cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        )}
        <svg
          onClick={() => handleDeleteTask(link._id)}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-trash3 cursor-pointer hover:text-red-400"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
        </svg>
      </div>
      <div className="flex items-center h-full px-4 bg-white gap-x-4 rounded-2xl">
        {isEdit ? <EditLinkRow link={link} /> : <NormalLinkRow link={link} />}
       
      </div>
    </div>
  );
};

export default LinkRow;
