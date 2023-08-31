import React from "react";
import { useLocation } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const linkFromHeroBanner = location.state ? location.state.link : "";
  console.log("Link from HeroBanner in Signup:", linkFromHeroBanner);

  return (
    <div class="bg-gray-100 flex h-screen  items-center md:py-16">
      <main class="w-full max-w-xl mx-auto p-6">
        <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <a
                  class="text-blue-600 decoration-2 hover:underline font-medium"
                  href="../examples/html/signin.html"
                >
                  Sign in here
                </a>
              </p>
            </div>

            <div class="mt-5">
              <form className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Link"
                    value={linkFromHeroBanner}
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Confirm password"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>

               

                <button
                  type="submit"
                  class="md:col-span-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
