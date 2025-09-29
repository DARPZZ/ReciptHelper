import React, { ChangeEvent, useEffect, useState } from "react";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SetSettings, SetSettingsForOldRecipts } from "~/helpers/api/reciptapi";
import { GetSettings } from "~/helpers/api/userapi";
import Reciptbutton from "~/modules/ReceiptTable/reciptbutton";

function Settings() {
let [automatiskSletning, setAutomatiksSletning] = useState(false);
let [visGamleKvitteringer,setVisGamleKvitteringer] = useState(false)

async function GetSettingsValues()
{
  const response = await GetSettings();
  const data = await response.json();
  let sletAutoKvit = data["sletAutomatiskKvitteringer"];
  let visKvit = data["showOldKvitteringer"]
  setAutomatiksSletning(sletAutoKvit)
  setVisGamleKvitteringer(visKvit)
}
useEffect(()=>{
  const fetchSettings = async () => {
    await GetSettingsValues();
  };
  fetchSettings()
},[])


async function skiftAutomatiskSletning() {
  const newValue = !automatiskSletning;
  setAutomatiksSletning(newValue);
  await SetSettings({ value: newValue });
}

async function skiftVisGamleKvitteringer() {
  const newValue = !visGamleKvitteringer;
  setVisGamleKvitteringer(newValue);
  await SetSettingsForOldRecipts({ value: newValue });
}
  return (
    <ProtectedRoute>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-14 px-11">
          <div className="flex p-4 flex-col border-solid border-4  rounded-lg border-blue-400 ">
            <h2>Slet automatik Kvitteringer efter 2 år </h2>
            <button
              onClick={skiftAutomatiskSletning}
              className=" mt-2 border border-spacing-1 rounded-xl font-bold text-xl"
            >
              {automatiskSletning ? "Deaktivere" : "Aktivere"}
            </button>
          </div>
           <div className="flex p-4 flex-col border-solid border-4  rounded-lg border-blue-400 ">
            <h2>Vis gamle kvitteringer </h2>
            <button
              onClick={skiftVisGamleKvitteringer}
              className=" mt-2 border border-spacing-1 rounded-xl font-bold text-xl"
            >
              {visGamleKvitteringer ? "Deaktivere" : "Aktivere"}
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Settings;
