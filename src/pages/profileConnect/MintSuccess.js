import React from "react";

function MintSuccess() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#E5E5E5]">
      <div className="flex flex-col justify-center items-center w-full mt-20">
        <div className="w-[50%] px-8 py-[6rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
          <div className="font-bold mt-[10rem] text-[5vh]">
            Minting is Successful!
          </div>
          <div className="mt-[10rem]">
            <button
              type="button"
              className="bg-black px-4 py-2 rounded-full font-bold text-[#DAFF3E]"
            >
              Back To Your Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintSuccess;
