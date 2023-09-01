import React, { useState } from "react";

const UserHeader = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="sticky inset-x-0 z-50 flex flex-wrap w-full h-16 text-sm top-4 md:justify-start md:flex-nowrap">
      <nav className="relative w-full px-4 py-3 mx-2 bg-white border border-gray-200 rounded-full md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="flex-none text-xl font-semibold"
            aria-label="Brand"
          >
            uLinks
          </a>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-full shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-4 h-4 hs-collapse-open:hidden"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hidden w-4 h-4 hs-collapse-open:block"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block"
        >
          <div className="flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <a
              href="/"
              className="font-medium text-gray-500 md:py-6 "
              aria-current="page"
            >
              Apps
            </a>
            <a
              href="/#avantages"
              className="font-medium text-gray-500 hover:text-gray-400 md:py-6"
            >
              Avantages
            </a>
            <a
              href="/"
              className="font-medium text-gray-500 hover:text-gray-400 md:py-6"
            >
              FAQ
            </a>
            <div className="relative inline-block">
              <p
                onClick={toggleDropdown}
                className="flex items-center font-medium text-gray-700 uppercase"
              >
                {user.email.charAt(0)}
              </p>
              {isDropdownOpen && (
                <div
                id="dropdown"
                className="absolute right-0 z-50 p-2 mt-2 bg-white rounded-lg shadow-md top-full w-max"
              >
                  <div class="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg ">
                    <p class="text-sm text-gray-500 ">Signed in as</p>
                    <p class="text-sm font-medium text-gray-800 dark:text-gray-300">
                      james@site.com
                    </p>
                  </div>
                  <div class="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="/"
                    >
                      <svg
                        class="flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                      Downloads
                    </a>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="/"
                    >
                      <svg
                        class="flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                      Team Account
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UserHeader;
