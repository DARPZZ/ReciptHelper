import React, { useEffect, useState } from "react";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SetSettings, SetSettingsForOldRecipts } from "~/helpers/api/reciptapi";
import { GetSettings } from "~/helpers/api/userapi";
import SettingComp from "~/modules/SettingsComps/SettingComp";

function Settings() {
  let [automatiskSletning, setAutomatiksSletning] = useState(false);
  let [visGamleKvitteringer, setVisGamleKvitteringer] = useState(false);

  async function GetSettingsValues() {
    const response = await GetSettings();
    const data = await response.json();
    let sletAutoKvit = data["sletAutomatiskKvitteringer"];
    let visKvit = data["showOldKvitteringer"];
    setAutomatiksSletning(sletAutoKvit);
    setVisGamleKvitteringer(visKvit);
  }

  useEffect(() => {
    const fetchSettings = async () => {
      await GetSettingsValues();
    };
    fetchSettings();
  }, []);

  async function skiftAutomatiskSletning() {
    const newValue = !automatiskSletning;
    setAutomatiksSletning(newValue);
    await SetSettings({ value: newValue });
  }

  async function skiftVisGamleKvitteringer() {
    visGamleKvitteringer
      ? setVisGamleKvitteringer(false)
      : setVisGamleKvitteringer(true);
    await SetSettingsForOldRecipts(!visGamleKvitteringer);
  }

  return (
    <ProtectedRoute>
      <div className="app-page">
        <div className="mx-auto w-full max-w-4xl">
          <header className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Konto
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              Indstillinger
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Tilpas hvordan gamle kvitteringer vises og ryddes op i arkivet.
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <SettingComp
              text="Automatisk sletning"
              description="Slet automatisk kvitteringer efter 2 år."
              activeText={automatiskSletning}
              oncClickEvent={skiftAutomatiskSletning}
            />
            <SettingComp
              text="Vis gamle kvitteringer"
              description="Inkluder udløbne kvitteringer i dashboard og søgning."
              activeText={visGamleKvitteringer}
              oncClickEvent={skiftVisGamleKvitteringer}
            />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Settings;
