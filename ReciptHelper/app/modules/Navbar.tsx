import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { scrollToID } from "~/helpers/scroll";
function Navbar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isOnRootPath, setIsOnRootPath] = useState(true);
  useEffect(() => {
    let email = sessionStorage.getItem("login");
    email != null ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false);
    GetCurrentPath();
  });
  function GetCurrentPath() {
    const currentPath = window.location.pathname;
    currentPath == "/ReciptHelper/" ? setIsOnRootPath(true) : setIsOnRootPath(false);
    
  }

  function LogUserOut() {
    sessionStorage.removeItem("login");
    navigate("/");
  }
  return (
    <div className="grid font-bold w-full text-xl fixed z-50   grid-cols-2 bg-gradient-to-r text-white from-blue-600 via-green-500 to-indigo-400  ">
      <div>
        {isUserLoggedIn ? (
          <button
            className="w-1/3 px-6 py-4 text-xl font-bold  "
            onClick={() => navigate("Dashboard")}
          >
            Recipt Helper
          </button>
        ) : (
          <button
            className="w-1/3 px-6 py-4 text-xl font-bold "
            onClick={() => navigate("/")}
          >
            Recipt Helper
          </button>
          
        )}
      </div>
      <div className="items-center w-full space-x-5  justify-end flex px-6 py-4">
        {isUserLoggedIn ? (
          <div className="space-x-5 flex flex-row">
            <button
             className=" hover:text-gray-800"
             onClick={()=> navigate("Settings")}
             >Settings</button>
             
            <button
              onClick={() => LogUserOut()}
              className=" hover:text-gray-800"
            >
              Logud
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className=" hover:text-gray-800"
          >
            Login
          </button>
        )}
        {isOnRootPath == true && (
          <div className="space-x-5 flex flex-row">
             <button
              onClick={() => scrollToID("Features")}
              className=" hover:text-gray-800"
            >
              Features
            </button>
            <button
              onClick={() => scrollToID("About")}
              className=" hover:text-gray-800"
            >
              About
            </button>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
