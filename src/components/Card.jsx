import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Card = ({ data }) => {
  const [plainHtml, setPlainHtml] = useState("");
  const plainText_html_test = data.data.selftext_html;

  useEffect(() => {
    if (plainText_html_test) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = plainText_html_test;
      const plainText = tempElement.textContent;
      setPlainHtml(plainText);
    }
  }, [plainText_html_test]);

  return (
    <>
      <div className="card mt-5 lg:m-2 xl:m-5">
        <div className="block p-6 rounded-lg shadow hover:bg-gray-100 bg-gray-700 dark:border-gray-700 dark:hover:dark:bg-[#360f51] transition">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.data.title}
          </h1>
          {plainText_html_test && (
            <div className="w-full bg-black p-2 rounded-lg">
              <div
                dangerouslySetInnerHTML={{ __html: plainHtml }}
                style={{ maxHeight: "200px", overflowY: "auto" }}
              ></div>
            </div>
          )}
          <hr className="border-t-2 w-full border-purple-500 my-4" />
          <a
            href={data.data.url}
            target="_blank"
            className="font-normal text-gray-700 dark:text-gray-400"
          >
            URL:{" "}
            <span className="underline break-words hover:text-red-500 transition">
              {data.data.url}
            </span>
          </a>
          <div className="flex mt-4 gap-4">
            <div className="justify-center flex align-middle text-center">
              <p className="text-[20px] font-extrabold">Score</p>
            </div>
            <div className="w-10 h-10 bg-white rounded-xl flex justify-center align-middle text-center">
              <p className="text-black font-mono align-middle text-center justify-center font-extrabold text-[26px]">
                {data.data.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
