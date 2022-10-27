import React from "react";
// import image from "../../assets/img/image.png";

function Skills() {
  return (
    <div className="px-[10rem] mt-8 font-robotoMono mx-auto">
      <div className="mb-2 text-left px-[6rem]">
        <form>
          <div className="flex flex-row">
            <div className="flex flex-col pr-[2rem]">
              <div className="pb-[1rem]">Main Skills</div>
              <div className="grid grid-cols-3 grid-flow-row gap-1">
                <div className="bg-black border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full">
                  Database Design
                </div>
                <div className="bg-black border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full">
                  Database Design
                </div>
                <div className="bg-black border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full">
                  Database Design
                </div>
                <div className="bg-black border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full">
                  Database Design
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="pb-[1rem]">Other Skills</div>
              <div className="grid grid-cols-3 grid-flow-row gap-1">
                <div className="bg-white border-solid border-2 border-black text-[#000000] p-auto rounded-full font-bold">
                  Database Design
                </div>
                <div className="bg-white border-solid border-2 border-black text-[#000000] px-1 py-1 rounded-full font-bold">
                  Database Design Design
                </div>
                <div className="bg-white border-solid border-2 border-black text-[#000000] px-5 py-1 rounded-full font-bold">
                  Database Design Design
                </div>
                <div className="bg-white border-solid border-2 border-black text-[#000000] px-5 py-1 rounded-full font-bold">
                  Database Design
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Skills;
