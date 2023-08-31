import React, { useState } from "react";

const Faq = () => {
  const questions = [
    {
      title: "Lorem",
      content:
        "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
    },
    {
      title: "Lorem",
      content:
        "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
    },
    {
      title: "Lorem",
      content:
        "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
    },
    {
      title: "Lorem",
      content:
        "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
    },
    {
      title: "Lorem",
      content:
        "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState("");
  return (
    <div class="w-full px-4 mx-auto h-screen bg-purple-200 flex items-center">
      <div class="grid md:grid-cols-5 gap-10 bg-green-200">
        <div class="md:col-span-2">
          <div class="max-w-xs">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Frequently
              <br />
              asked questions
            </h2>
            <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div class="md:col-span-3">
          <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
            {questions.map((question, index) => (
              <div
                key={index}
                class="hs-accordion pb-3 active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                >
                  {question.title}
                  <svg
                    class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p class="text-gray-600 dark:text-gray-400">
                    {question.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;