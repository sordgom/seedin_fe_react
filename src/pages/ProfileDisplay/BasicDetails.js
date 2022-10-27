import React from "react";
import image from "../../assets/img/image.png";
import share from "../../assets/img/shareIcon.png";

function Basicdetails() {
  return (
    <div className="px-[10rem] mt-8 font-robotoMono">
      <div className="px-14">
        <form>
          <div className="flex flex-row justify-center">
            <div>
              <img src={image} className="mx-auto" alt="" />
              <div className="flex flex-row">
                <div className="flex flex-col">Afifah</div>
                <div className="flex flex-col pl-5">
                  <img src={share} className="w-[30px] h-[30px]" alt="" />
                </div>
              </div>
              <div>@ Handleafifah</div>
              <div className="py-[2rem]">Joined 2022</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Basicdetails;
