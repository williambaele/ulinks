import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // GET USER'S LINK FROM HOMEPAGE
  const location = useLocation();
  const linkFromHeroBanner = location.state ? location.state.link : "";

  // SINGUP METHOD
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await createUser(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.code, error.message);
      if (error.code === "auth/weak-password") {
        setErrorMsg("Weak password (min 6 characters)");
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMsg("Email already used");
      } else {
        setErrorMsg(error.message);
      }
    }
  };
  return (
    <div class="bg-gray-100 flex h-screen  items-center md:py-16">
      <div class="w-full max-w-xl mx-auto p-6">
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
                  href="/login"
                >
                  Sign in here
                </a>
              </p>
            </div>

            <div class="mt-5">
              <form
                className="grid gap-4 md:grid-cols-2"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    onChange={(e) => setEmail(e.target.value)}
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

                <div className="md:col-span-2">
                  <input
                    type="password"
                    placeholder="Password"
                    class="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  class="md:col-span-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign up
                </button>
                {errormsg && (
                <p className="text-xs font-medium text-center text-red-600">
                  {errormsg}
                </p>
              )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
