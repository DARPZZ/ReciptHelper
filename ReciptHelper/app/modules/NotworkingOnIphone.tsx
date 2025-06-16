import React from "react";
import { Link, Outlet } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
function NotworkingOnIphone() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center">
      <h2 className="pb-2">Bruger du en iPhone eller iPad?</h2>
      <button
        onClick={() => navigate("/help")}
        className=" justify-center  border w-1/4 rounded-lg"
      >
        klik her
      </button>
    </div>
  );
}

export default NotworkingOnIphone;
