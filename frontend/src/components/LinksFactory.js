import React from "react";

const LinksFactory = () => {
  return (
    <div className="w-full h-full px-2 py-10">
      <div className="space-y-4 bg-purple-300">
        <p className="text-lg">Your bio</p>
        <form className="w-full">
          <input type="text" className="w-full"></input>
        </form>
      </div>
      <div className="flex justify-end">
        <button className="flex items-center gap-2 p-2 px-5 font-bold text-gray-800 bg-[#ffc971] rounded-2xl">
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
    </div>
  );
};

export default LinksFactory;
