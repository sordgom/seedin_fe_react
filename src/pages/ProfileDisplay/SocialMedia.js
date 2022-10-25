import React from "react";
import github from "../../assets/img/githubIcon.png";
import website from "../../assets/img/websiteIcon.png";
import twitter from "../../assets/img/twitter.png";

function Socialmedia() {
  return (
    <div className="px-[10rem] mt-8 font-robotoMono">
      <div className="py-[2rem] px-14">
        <form>
          <div className="flex flex-row">
            <div>
              <img src={twitter} alt="" className="w-[30px] h-[30px]" />
            </div>
            <div>
              <img src={github} alt="" className="w-[30px] h-[30px]" />
            </div>
            <div>
              <img src={website} alt="" className="w-[30px] h-[30px]" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Socialmedia;
