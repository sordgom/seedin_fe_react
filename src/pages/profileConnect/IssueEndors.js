import React from "react";

function IssueEndors() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#E5E5E5]">
      <div className="flex flex-col justify-center items-center w-full mt-20">
        <div className="w-[50%] px-8 py-[6rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
          <p className="text-[4vh] font-bold text-center text-black uppercase font-robotoMono">
            Issue an Endorsement NFT
          </p>
          <div className="mt-10 px-20">
            <form>
              <div className="mb-2 text-left">
                <label
                  htmlFor="endorsing"
                  className="block text-sm font-bold text-[#000000]"
                >
                  Why are you endorsing? (his/her wallet address)
                </label>
                <input
                  type=""
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="endorsing"
                  className="block text-sm font-semibold text-black"
                >
                  Your endorsing
                </label>
                <input
                  type="text"
                  className="h-20 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-20">
                <button
                  type="button"
                  className="bg-white px-4 py-2 rounded-full font-bold"
                >
                  Mint and Transfer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueEndors;
