import { useNavigate } from "@remix-run/react";
import React from "react";
import ReceiptTable from "~/modules/ReceiptTable/ReceiptTable";
import ProtectedRoute from "~/modules/ProtectedRoute";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <ProtectedRoute>
      <div className="w-full h-full">
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
            <div className="w-full flex  justify-center"></div>
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
