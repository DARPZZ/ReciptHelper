import React, { ChangeEvent, useEffect, useState } from "react";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SetSettings, SetSettingsForOldRecipts } from "~/helpers/api/reciptapi";
import { GetSettings } from "~/helpers/api/userapi";
import Reciptbutton from "~/modules/ReceiptTable/reciptbutton";
import SettingComp from "~/modules/SettingsComps/SettingComp";

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

 async function skiftVisGamleKvitteringer(){
    visGamleKvitteringer? setVisGamleKvitteringer(false) : setVisGamleKvitteringer(true);
    await SetSettingsForOldRecipts(!visGamleKvitteringer);
  }
  return (
    <ProtectedRoute>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-14 px-11">
          <SettingComp 
            text="Slet automatik Kvitteringer efter 2 år"
            activeText = {automatiskSletning}
            oncClickEvent={skiftAutomatiskSletning}
            >
          </SettingComp>
          <SettingComp 
            text="Vis gamle kvitteringer"
            activeText= {visGamleKvitteringer}
            oncClickEvent={skiftVisGamleKvitteringer}
            >
          </SettingComp>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Settings;
