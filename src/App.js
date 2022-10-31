import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/home";
import Login from "./pages/authentication/Login";
import ProfileForm from "./pages/profileForm/IndexProfileForm";
import ProfileDisplay from "./pages/ProfileDisplay/IndexProfileDisplay";
import Wallet from "./pages/profileConnect/ConnectWallet";
import IssueEndors from "./pages/profileConnect/IssueEndors";
import MintSuccess from "./pages/profileConnect/MintSuccess";
import EmailLogin from "./pages/authentication/EmailLogin";
import LandingPage from "./pages/Landingpage/IndexLandingPage";
import IndexJobListing from "./pages/JobList/IndexJobListing";
import ListJobDisplay from "./pages/JobList/ListJobDisplay";
import IndexRentTalent from "./pages/RentTalent/IndexRentTalent";
import IndexIssueNft from "./pages/IssueNFT/IndexIssueNft";
import NftLink from "./pages/IssueNFT/NftLink";
import BatchMint from "./pages/IssueNFT/BatchMint";
import JobListing from "./pages/ProfileDisplay/JobListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        {/* Landing Page */}
        <Route exact path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/emailogin" element={<EmailLogin />} />

        {/* Profile Display */}
        <Route exact path="/profiledisplay" element={<ProfileDisplay />} />
        <Route exact path="/joblisting" element={<JobListing />} />

        {/* Profile Form */}
        <Route exact path="/profileForm" element={<ProfileForm />} />

        {/* Job Listing */}
        <Route exact path="/listjobdisplay" element={<ListJobDisplay />} />
        <Route exact path="/listjob" element={<IndexJobListing />} />

        {/* NFT Endorsement */}
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/issue" element={<IssueEndors />} />
        <Route exact path="/mintSuccess" element={<MintSuccess />} />

        {/* Rent Talent */}
        <Route exact path="/rentalent" element={<IndexRentTalent />} />

        {/* Issue NFT */}
        <Route exact path="/indexissuenft" element={<IndexIssueNft />} />
        <Route exact path="/nftlink" element={<NftLink />} />

        {/* Batch Minting */}
        <Route exact path="/batchmint" element={<BatchMint />} />
      </Routes>
    </div>
  );
}

export default App;
