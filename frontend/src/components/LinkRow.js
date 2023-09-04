import React, { useState } from "react";

const LinkRow = ({ link }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative h-20 bg-red-100 rounded-2xl">
      <div className="absolute top-0 right-0 flex items-center justify-center w-20 h-10 bg-white shadow-sm rounded-tr-2xl rounded-bl-2xl">
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
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
            width="22"
            height="22"
            fill="green"
            class="bi bi-toggle-on cursor-pointer"
            viewBox="0 0 16 16"
            onClick={() => setActive(!active)}

          >
            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </svg>
        )}
      </div>
      {link.link}
    </div>
  );
};

export default LinkRow;
