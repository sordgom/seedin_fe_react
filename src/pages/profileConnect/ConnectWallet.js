import React from "react";
import logo from "../../assets/img/logoBig.png";
import near from "../../assets/img/near.png";

function Wallet() {
  return (
    <div className="relative  min-h-screen overflow-hidden bg-[#E5E5E5]">
      <div className="w-full flex flex-col ml-8 mt-4">
        <img src={logo} alt="" className="w-[200px] h-[70px]" />
        <p className="uppercase font-robotoMono text-left text-[4vh] ml-7 font-semibold">
          Learn. Build. Hire
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-[30%] px-8 py-[7rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
          <p className="text-[5vh] font-bold text-center text-black uppercase font-robotoMono">
            CONNECT WALLET TO ENDORSE
          </p>
          <div className="flex flex-col justify-center items-center mt-28 mx-[6rem]">
            <div>
              <button
                type="button"
                className="bg-white px-6 py-3 w-[230px] mb-4 rounded-2xl"
              >
                <div className="flex justify-between">
                  <div className="uppercase font-bold text-[3vh]">
                    <p>near</p>
                  </div>
                  <div>
                    <img src={near} alt="" className="w-[28px] h-[28px] mt-1" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-[3vh] ml-8 fixed bottom-6">
        <div className="mt-[3vh] text-[1vh] font-robotoMono text-left">
          <p>
            <strong>SEEDIN WEB3 CAREER HUB</strong>
          </p>
          <p>© 2022 All Rights Reserved by SEEDWEB3 PTE. LTD.</p>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
