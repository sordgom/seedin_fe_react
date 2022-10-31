import React from "react";
import logo from "../assets/img/logoSmall.png";

const navigation = [
  { name: "My Profile", href: "/displayprofile", current: false },
  { name: "Jobs", href: "#", current: true },
  { name: "Career Hub", href: "#", current: false },
  { name: "Rent Talent", href: "#", current: false },
  { name: "Academy", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavButton(props) {
  return (
    <li>
      <a
        className={classNames(
          props.current
            ? "bg-black text-[#DAFF3E]"
            : "border-black text-black hover:bg-[#DAFF3E]",
          "border-2 rounded-full px-4 py-2 font-bold"
        )}
        href={props.href}
      >
        {props.name}
      </a>
    </li>
  );
}

function NavsEnabled() {
  return (
    <>
      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-1 font-robotoMono">
            {navigation.map((e) => NavButton(e))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4 font-robotoMono text-bold">
          <a
            className="rounded-md bg-[#BD33FF] px-5 py-2.5 text-bold text-white"
            href="/"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a className="rounded-md bg-black px-5 py-2.5 text-white" href="/">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar(props) {
  return (
    <header aria-label="SEED Header">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="" className="w-[140px] h-[40px]" />
            </a>
          </div>

          {props.isNavEnabled && <NavsEnabled />}
        </div>
      </div>
    </header>
  );
}
