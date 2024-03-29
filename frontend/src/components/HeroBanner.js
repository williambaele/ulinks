import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const [link, setLink] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  //CHECK FORM BEFORE SENDING
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!link) {
      setErrorMsg("Please enter a valid link");
      return
    }
    navigate("/signup",  {state: { link: link }});
  };
  return (
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full md:h-[calc(100vh-64px)] py-20 md:py-0">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className="space-y-10">
          <h1 class="block text-5xl md:text-7xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Create your link-in-bio <span class="text-blue-600">seamless.</span>
          </h1>
          <p class="text-2xl text-gray-800 ">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>

          <div class=" w-full h-12">
            <form
              className="grid w-full h-full grid-cols-5 shadow-sm rounded-2xl"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center h-full col-span-4 gap-1 pl-4 bg-white rounded-r-none rounded-2xl">
              <p>ulinks.me/</p>
              <input
                placeholder="your link"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                  setErrorMsg("");
                }}
                type="text"
                className="w-full h-full text-gray-400 bg-white rounded-r-none outline-none"
                />
                </div>
            
              <button
                className="text-sm md:text-lg flex items-center justify-center col-span-1 bg-[#ffc971] rounded-2xl rounded-l-none font-bold text-gray-700"
                type="submit"
              >
                Claim my link
              </button>
            </form>
            {errorMsg && <p className="pl-2 text-red-500">{errorMsg}</p>}
          </div>
        </div>

        <div class="h-full w-full rounded-xl object-center object-none	hidden md:block">
          <img
            className="object-cover rounded-xl"
            src="https://images.pexels.com/photos/5081925/pexels-photo-5081925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Sharing social networks"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
