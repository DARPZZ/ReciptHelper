import React, { ChangeEvent, useEffect, useState } from "react";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SetSettings } from "~/helpers/api/reciptapi";
import { GetSettings } from "~/helpers/api/userapi";
function Settings() {
let [automatiskSletning, setAutomatiksSletning] = useState(Boolean);
const [formData, setFormData] = useState({
  value: automatiskSletning
  });

async function GetSettingsValues()
{
  const response = await GetSettings();
  const data = await response.json();
  let sletAutoKvit = data["sletAutomatiskKvitteringer"];
  setAutomatiksSletning(sletAutoKvit)
}
useEffect(()=>{
  GetSettingsValues()
},[])


async function skiftAutomatiskSletning() {
    automatiskSletning? setAutomatiksSletning(false) : setAutomatiksSletning(true);
    setFormData({
      value : automatiskSletning
      });
      
    const response = await SetSettings(formData);
  }
  return (
    <ProtectedRoute>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-1 px-11">
          <div className="flex p-4 flex-col border-solid border-4  rounded-lg border-blue-400 ">
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
