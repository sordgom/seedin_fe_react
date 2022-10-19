import React from "react";

import image from "../../assets/img/image.png";

function Bio() {
  return (
    <div className="relative  min-h-screen overflow-x-hidden bg-[#E5E5E5] font-robotoMono">
      <div className="w-full px-[10rem] mt-12 ">
        <div className="uppercase font-robotoMono text-[4vh] font-semibold text-left">
          <p>my web3 profile</p>
        </div>
        <div className="bg-[#DAFF3E]">
          <div className="mx-[5rem]">
            <div>
              <p>BIO</p>
            </div>
            <form>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div>
                    <img src={image} alt="" />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="bg-black text-[#DAFF3E] px-4 py-1 rounded-full"
                    >
                      UPLOAD
                    </button>
                  </div>
                </div>
                <div className="mb-2 text-left">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    NAME
                  </label>
                  <input
                    type=""
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  HANDLE
                </label>
                <input
                  type=""
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  ONE-LINER BIO
                </label>
                <input
                  type=""
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  LOCATION
                </label>
                <input
                  type=""
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
