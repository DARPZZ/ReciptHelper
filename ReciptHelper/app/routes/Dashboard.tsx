import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import ReceiptTable from "~/modules/ReceiptTable/ReceiptTable";
import ProtectedRoute from "~/modules/ProtectedRoute";
import { SletKvit,GetAllProductPrices } from "~/helpers/api/reciptapi";
import StatsCard from "~/modules/StatsCard";

import api from "~/helpers/api";
import { list } from "postcss";
import { number } from "motion";
function Dashboard() {
  const [combinedPrices, setCombinedPrices] = useState(0);
  const [numberOfRecipts,setNumberOfRecipts] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    GetAllProductsPrice()
    SletKvit();
  },[]);
function getCombinedPrices(json:any){
  let fullPrice = 0
  for (let index = 0; index < json.length; index++) {
    const element = json[index];
    fullPrice = fullPrice + element
  }
  return fullPrice
}
async function GetAllProductsPrice() {
  const apiData = await GetAllProductPrices();
  const json = await apiData.json();
  const total = getCombinedPrices(json);
  setCombinedPrices(total);
  setNumberOfRecipts(json.length)
  
}

  return (
    <ProtectedRoute>
      <div className="w-full h-full mt-24 md:mt-16">
        <div className=" flex justify-center">
          <div className=" w-full items-center flex flex-col">
            <h1 className="text-2xl font-bold pb-5 font-serif">
              Mine kviteringer
            </h1>

            <button
              type="button"
              className="  items-center px-5 py-2.5 md:w-1/3 w-1/2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => navigate("/OpretKvittering")}
            >
              Opret ny kvittering
            </button>
            <div className="  text-center grid  sm:grid-cols-2 w-4/5 pt-5">
              <div className="px-14">
                <StatsCard title="Total pris for alle genstande" value={combinedPrices}></StatsCard>
              </div>
               <div className="px-14 md:mt-0 mt-2">
                <StatsCard title="Antal af kvitteringer" value={numberOfRecipts}></StatsCard>
              </div>  
            </div>
            <div className="pt-5">
              <ReceiptTable />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Dashboard;
