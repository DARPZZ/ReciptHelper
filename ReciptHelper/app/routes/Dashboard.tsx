import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ReceiptTable from "~/modules/ReceiptTable/ReceiptTable";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SletKvit, GetAllProductPrices } from "~/helpers/api/reciptapi";
import StatsCard from "~/modules/StatsCard";
import { GetSettings } from "~/helpers/api/userapi";

function Dashboard() {
  const [combinedPrices, setCombinedPrices] = useState(0);
  const [numberOfRecipts, setNumberOfRecipts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    GetAllProductsPrice();
    SletKvit();
  }, []);

  function getCombinedPrices(json: any) {
    let fullPrice = 0;
    for (let index = 0; index < json.length; index++) {
      const element = json[index];
      fullPrice = fullPrice + element;
    }
    return fullPrice;
  }

  async function GetAllProductsPrice() {
    const response = await GetSettings();
    const data = await response.json();
    let apiData;
    let visKvit = data["showOldKvitteringer"];

    if (visKvit === true) {
      apiData = await GetAllProductPrices("all");
    } else {
      apiData = await GetAllProductPrices("notold");
    }

    const json = await apiData.json();
    const total = getCombinedPrices(json);
    setCombinedPrices(total);
    setNumberOfRecipts(json.length || 0);
  }

  return (
    <ProtectedRoute>
      <div className="app-page">
        <div className="app-container">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                Dashboard
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
                Mine kvitteringer
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                Administrer og få overblik over dine køb, garantidatoer og
                kvitteringslinks.
              </p>
            </div>

            <button
              type="button"
              className="primary-button"
              onClick={() => navigate("/OpretKvittering")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Opret ny kvittering
            </button>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <StatsCard
              title="Samlet værdi"
              value={combinedPrices}
              suffix="DKK"
              description="Total pris for registrerede produkter"
            />
            <StatsCard
              title="Kvitteringer"
              value={numberOfRecipts}
              description="Antal kvitteringer i det aktuelle arkiv"
            />
          </div>

          <div className="panel overflow-hidden">
            <ReceiptTable />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Dashboard;
