import React from "react";
import Basicdetails from "./BasicDetails";
import JobListing from "./JobListing";
import Socialmedia from "./SocialMedia";
import Skills from "./skills";

function IndexProfileDisplay() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
      <form>
        <div>
          <div>
            <Basicdetails />
            <Socialmedia />
            <JobListing />
            <Skills />
          </div>
        </div>
      </form>
    </div>
  );
}

export default IndexProfileDisplay;
