import React, { useState } from "react";

const HeroBanner = () => {

    const [link, setLink] = useState("ulinks.me/")
  return (
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-[calc(100vh-64px)]">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className="space-y-10">
          <h1 class="block text-7xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Create your link-in-bio <span class="text-blue-600">seamless.</span>
          </h1>
          <p class="text-2xl text-gray-800 ">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>

          <div class=" w-full h-12">
            <form className="grid w-full h-full grid-cols-5">
              <input
                placeholder="Your link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="text"
                className="col-span-4 pl-4 text-gray-400 bg-white rounded-r-none outline-none rounded-2xl"
              ></input>
              <button className="col-span-1 bg-[#ffc971] rounded-2xl rounded-l-none font-bold text-gray-700">
                Claim my link
              </button>
            </form>
          </div>
        </div>

        <div class="h-full bg-gray-200 ml-4 w-full rounded-xl"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
