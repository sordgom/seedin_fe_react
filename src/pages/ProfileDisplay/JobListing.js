import React from "react";
// import image from "../../assets/img/image.png";

function JobListing() {
  return (
    <div className="px-[10rem] py-[3rem] mt-8 font-robotoMono">
      <div className="py-[2rem]">
        <form>
          <div>
            <div className="mb-2 text-left px-[6rem]">
              <div className="flex flex-row">
                <div className="text-xl">
                  <b>JOB LISTING</b>
                </div>
                <div className="px-3">
                  <button
                    type="button"
                    className="bg-white border-solid border-2 border-black text-[#000000] px-5 py-1 rounded-full font-bold"
                  >
                    List a Job
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-black border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="flex flex-row mx-[5rem]">
              {/* CONTENT 1 */}
              <div className="flex flex-col">
                <div className="text-left block px-7 py-2 mt-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                  <div className="">Maximoz Team</div>
                  <div className="py-3 font-bold text-xl">Programmer</div>
                  <div className="flex flex-row pb-7">
                    <div className="flex flex-col">
                      <div>$14,000 - $25,000</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-right">London, England</div>
                    </div>
                  </div>
                  <div className="pb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </div>
                  <div className="flex flex-row">
                    <div className="pr-4">
                      <button
                        type="button"
                        className="bg-[#DAFF3E] text-black px-5 py-1 rounded-full font-bold"
                      >
                        FAST APPLY
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="bg-black text-[#DAFF3E] px-5 py-1 rounded-full"
                      >
                        REFER & GET N500
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* CONTENT 2 */}
              <div className="flex flex-col">
                <div className="text-left block px-7 py-2 mt-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                  <div className="">Maximoz Team</div>
                  <div className="py-3 font-bold text-xl">Programmer</div>
                  <div className="flex flex-row pb-7">
                    <div className="flex flex-col">
                      <div>$14,000 - $25,000</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-right">London, England</div>
                    </div>
                  </div>
                  <div className="pb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </div>
                  <div className="flex flex-row">
                    <div className="pr-4">
                      <button
                        type="button"
                        className="bg-[#DAFF3E] text-black px-5 py-1 rounded-full font-bold"
                      >
                        FAST APPLY
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="bg-black text-[#DAFF3E] px-5 py-1 rounded-full"
                      >
                        REFER & GET N500
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobListing;
