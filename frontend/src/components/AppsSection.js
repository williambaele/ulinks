import React from "react";

const AppsSection = () => {
  const avantages = [
    "Add howmuch links you want",
    "Easily customisable",
    "Fast loading and rendering",
    "Free to use and will stay free",
  ];
  
  return (
    <div  id="avantages" href="#avantages" class="w-full h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img
            class="rounded-xl"
            src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
            alt="Ulinks promotional"
          />
        </div>

        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-3xl lg:text-5xl text-gray-800 ">
                Share your social links in a second
              </h2>
              <p class="text-gray-500">
                Besides working with start-up enterprises as a partner for
                digitalization, we have built enterprise products for common
                pain points that we have encountered in various products and
                projects.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              {avantages.map((avantage, index) => (
                <li class="flex space-x-3" key={index}>
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-[#ffc971]"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span class="text-md sm:text-base text-gray-500">
                    <span class="font-bold">{avantage}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsSection;
