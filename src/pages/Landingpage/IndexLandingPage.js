import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Navbar from "../../components/Navbar";

function IndexLandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
      <Navbar isNavEnabled={false} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default IndexLandingPage;
