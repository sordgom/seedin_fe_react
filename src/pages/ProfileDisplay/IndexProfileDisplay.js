import React from "react";
import Basicdetails from "./BasicDetails";
import JobListing from "./JobListing";
import Socialmedia from "./SocialMedia";
import Skills from "./skills";

function IndexProfileDisplay() {
  return (
    <form>
      <div className="relative min-h-screen overflow-x-hidden p-[2rem] bg-[#DAFF3E]">
        <div>
          <div>
            <Basicdetails />
            <Socialmedia />
            <Skills />
            <JobListing />
          </div>
        </div>
      </div>
    </form>
  );
}

export default IndexProfileDisplay;
