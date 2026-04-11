import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import ReceiptTable from "~/modules/ReceiptTable/ReceiptTable";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SletKvit, GetAllProductPrices } from "~/helpers/api/reciptapi";
import StatsCard from "~/modules/StatsCard";

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
    const apiData = await GetAllProductPrices();
    const json = await apiData.json();
    const total = getCombinedPrices(json);
    const formattedTotal = Number(total).toLocaleString("dk-DK");
    setCombinedPrices(parseFloat(formattedTotal));
    setNumberOfRecipts(json.length || 0);
  }

  return (
    <ProtectedRoute>
      <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 md:pt-16 pb-12">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Mine kvitteringer
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Administrer og få overblik over dine køb
        </p>
      </div>
      
      <button
        type="button"
        className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => navigate("/OpretKvittering")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Opret ny kvittering
      </button>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
      <StatsCard
        title="Total pris for alle genstande"
        value={combinedPrices}
      />
      <StatsCard
        title="Antal af kvitteringer"
        value={numberOfRecipts}
      />
    </div>

    {/* Table Section */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-1">
        <ReceiptTable />
      </div>
    </div>
  </div>
</div>
    </ProtectedRoute>
  );
}

export default Dashboard;
