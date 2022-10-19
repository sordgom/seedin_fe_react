import React from "react";
import logo from "../../assets/img/logoBig.png";
import email from "../../assets/img/email.png";
import google from "../../assets/img/google.png";
import near from "../../assets/img/near.png";

function Login() {
  return (
    <div className="relative  min-h-screen overflow-hidden bg-[#F2F2F2]">
      <div className="w-full flex flex-col ml-8 mt-4">
        <img src={logo} alt="" className="w-[200px] h-[70px]" />
        <p className="uppercase font-robotoMono text-left text-[4vh] ml-7 font-semibold">
          Learn. Build. Hire
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full px-14 py-10 m-auto bg-[#DAFF3E] rounded-3xl lg:max-w-lg font-robotoMono">
          <p className="text-5xl font-bold text-center text-black uppercase font-robotoMono">
            CONNECT
          </p>
          <div className="flex flex-col justify-center items-center mt-10 mx-[6rem]">
            <div>
              <button
                type="button"
                className="bg-white px-4 py-3 w-[230px] mb-4 rounded-2xl"
              >
                <div className="flex justify-between">
                  <div className="uppercase font-bold text-[25px]">
                    <p>email</p>
                  </div>
                  <div>
                    <img src={email} alt="" className="w-[35px] h-[35px] " />
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="bg-white px-4 py-3 w-[230px] mb-4 rounded-2xl"
              >
                <div className="flex justify-between">
                  <div className=" uppercase font-bold text-[25px]">
                    <p>google</p>
                  </div>
                  <div>
                    <img src={google} alt="" className="w-[35px] h-[35px]" />
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="bg-white px-4 py-3 w-[230px] mb-4 rounded-2xl"
              >
                <div className="flex justify-between">
                  <div className="uppercase font-bold text-[25px]">
                    <p>near</p>
                  </div>
                  <div>
                    <img src={near} alt="" className="w-[28px] h-[28px] mt-1" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="text-white text-xs mt-10 w-full">
            By continuing, you acknowledge that you have read, understood, and
            agree to our terms of service and privacy policy
          </div>
        </div>
      </div>
      <div className="relative pt-[3vh] ml-8">
        <div className="mt-[7vh] text-[1vh] font-robotoMono text-left">
          <p>
            <strong>SEEDIN WEB3 CAREER HUB</strong>
          </p>
          <p>© 2022 All Rights Reserved by SEEDWEB3 PTE. LTD.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
