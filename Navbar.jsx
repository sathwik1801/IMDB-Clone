import React from "react";
import logo from "../movielogo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={logo} alt="" />
      <Link className="text-blue-500 text-3xl font-bold" to="/">
        Movies
      </Link>
      <Link className="text-blue-500 text-3xl font-bold" to="/watchlist">
        Watchlist
      </Link>
    </div>
  );
}

export default Navbar;
