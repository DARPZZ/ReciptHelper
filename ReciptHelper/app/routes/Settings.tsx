import React, { ChangeEvent, useEffect, useState } from "react";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SetSettings, SetSettingsForOldRecipts } from "~/helpers/api/reciptapi";
import { GetSettings } from "~/helpers/api/userapi";
import Reciptbutton from "~/modules/ReceiptTable/reciptbutton";

function Settings() {
let [automatiskSletning, setAutomatiksSletning] = useState(Boolean);
let [visGamleKvitteringer,setVisGamleKvitteringer] = useState(Boolean)
const [formData, setFormData] = useState({
  value: automatiskSletning
  });
const [visGamleKvitteringerformData, setVisGamleKvitteringerformData] = useState({
  value: visGamleKvitteringer
  });

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
  GetSettingsValues()
},[])


async function skiftAutomatiskSletning() {
  setFormData({
      value : automatiskSletning
      });
    automatiskSletning? setAutomatiksSletning(false) : setAutomatiksSletning(true);
    const response = await SetSettings(formData);
  }
  async function skiftVisGamleKvitteringer() {
      setVisGamleKvitteringerformData({
    value : visGamleKvitteringer
    });
    visGamleKvitteringer? setVisGamleKvitteringer(false) : setVisGamleKvitteringer(true);
    const response = await SetSettingsForOldRecipts(visGamleKvitteringerformData);
  }

  return (
    <ProtectedRoute>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-14 px-11">
          <Reciptbutton
            header="Slet automatik Kvitteringer efter 2 år"
            onClickEvent={skiftAutomatiskSletning}
            text={automatiskSletning}>
          </Reciptbutton>
          <Reciptbutton
            header="Vis gamle kvitteringer"
            onClickEvent={skiftVisGamleKvitteringer} 
            text={visGamleKvitteringer}>
          </Reciptbutton>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Settings;
