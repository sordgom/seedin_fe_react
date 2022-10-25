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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<ProfileForm />} />
        <Route exact path="/displayprofile" element={<ProfileDisplay />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/issue" element={<IssueEndors />} />
        <Route exact path="/mintSuccess" element={<MintSuccess />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
