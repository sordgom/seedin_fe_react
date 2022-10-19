import React from "react";

import Bio from "./Bio";
import logo from "../../assets/img/logoSmall.png";

function EditProfile() {
  return (
    <div className="relative max-w-screen min-h-screen overflow-x-hidden bg-[#E5E5E5]">
      <div className="w-full flex ml-8 mt-4">
        <img src={logo} alt="" className="w-[140px] h-[40px]" />
      </div>
      <Bio />
    </div>
  );
}

export default EditProfile;
