import React from "react";

const Header = ({ user }) => {
  const anchor = (area) => {
    window.location.href = `#${area}`;
  };
  return (
    <header className="sticky top-0 flex w-full h-16 text-sm">
      <nav className="w-full h-full px-2 bg-white shadow-sm md:flex md:py-0 md:px-6 lg:px-8 xl:mx-auto">
        <div className="flex items-center justify-between h-full">
          <a
            href="/"
            className="flex-none text-xl font-semibold"
            aria-label="Brand"
          >
            uLinks
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border shadow-sm md:hidden rounded-xl hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
        <div className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block">
          <div className="flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <div
              onClick={() => anchor("avantages")}
              className="font-medium text-gray-500 cursor-pointer hover:text-gray-400 md:py-6"
            >
              Avantages
            </div>
            <div
              onClick={() => anchor("faq")}
              className="font-medium text-gray-500 cursos-pointer hover:text-gray-400 md:py-6"
            >
              FAQ
            </div>
            {!user ? (
              <div className="h-full p-3 px-5 bg-[#ffc971] rounded-full">
                <a
                  href="/login"
                  className="flex items-center font-medium text-gray-700 "
                >
                  Log in
                </a>
              </div>
            ) : (
              <div className="h-full p-3 px-5 bg-[#ffc971] rounded-full">
                <a
                  href="/dashboard"
                  className="flex items-center font-medium text-gray-700 "
                >
                  Dashboard
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
