import React from "react";
// import image from "../../assets/img/image.png";

function Skills() {
  return (
    <div className="px-[10rem] py-[3rem] mt-8 font-robotoMono mx-auto">
      <div className="mb-2 text-left px-[6rem]">
        <form>
          <div className="flex flex-row">
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="flex flex-col px-3">
              <div className="text-xl pb-3">
                <b>Main Skills</b>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-black border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full"
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
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="flex flex-col">
              <div className="text-xl pb-3">
                <b>Other Skills</b>
              </div>
              <div>
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
                  className="bg-white border-solid border-2 border-black text-[#000000] px-5 py-1 rounded-full font-bold"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Skills;
