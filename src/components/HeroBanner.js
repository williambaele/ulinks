import React from "react";

const HeroBanner = () => {
  return (
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 class="block text-7xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Create your link-in-bio <span class="text-blue-600">seamless.</span>
          </h1>
          <p class="mt-3 text-2xl text-gray-800 ">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>

          <div class="mt-7 w-full h-12">
            <form className="grid grid-cols-5 w-full h-full">
              <input
                placeholder="Your link"
                type="text"
                className="bg-gray-400 rounded-2xl rounded-r-none col-span-4 text-white"
              ></input>
              <button className="col-span-1 bg-purple-400 rounded-2xl rounded-l-none font-bold">
                Claim my link
              </button>
            </form>
          </div>
        </div>

        <div class="h-full bg-green-100 ml-4 w-full"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
