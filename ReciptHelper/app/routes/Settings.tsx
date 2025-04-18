import React, { ChangeEvent, useState } from "react";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SetSettings } from "~/helpers/api/reciptapi";
function Settings() {
const [automatiskSletning, setAutomatiksSletning] = useState(Boolean);
const [formData, setFormData] = useState({
    email: "",
    value: false,
  });



async function skiftAutomatiskSletning() {
    automatiskSletning? setAutomatiksSletning(false) : setAutomatiksSletning(true);
    setFormData({
      email : localStorage.getItem("email") || "",
      value : automatiskSletning
      });
      
    const response = await SetSettings(formData);
    var data = await response.json();
  }
  return (
    <ProtectedRoute>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 px-11">
          <div className="flex flex-col ">
            <h2>Slet automatik Kvitteringer efter 2 år </h2>
            <button
              onClick={skiftAutomatiskSletning}
              className=" mt-2 border border-spacing-1 rounded-xl font-bold text-xl"
            >
              {automatiskSletning ? "Deaktivere" : "Aktivere"}
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Settings;
