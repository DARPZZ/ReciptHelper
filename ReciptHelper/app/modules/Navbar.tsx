import React, { useState } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { scrollToID } from "~/helpers/scroll";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 bg-gradient-to-r text-white from-blue-600 via-green-500 to-indigo-400  ">
      <div>
        <button className="w-1/3 px-6 py-4 text-xl font-bold " onClick={()=> navigate("/")}>
          Recipt Helper
        </button>
      </div>
      <div className="items-center w-full space-x-10  justify-end flex px-6 py-4">
        <button
          onClick={() => navigate("/Login")}
          className=" hover:text-gray-800"
        >
          Login
        </button>
        <button
          onClick={() => scrollToID("About")}
          className=" hover:text-gray-800"
        >
          About
        </button>
        <button
          onClick={() => scrollToID("Features")}
          className=" hover:text-gray-800"
        >
          Features
        </button>
      </div>
    </div>
  );
}

export default Navbar;
