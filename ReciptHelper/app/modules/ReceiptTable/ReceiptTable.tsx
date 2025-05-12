import React, { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import GetReceiptByEmail, { sletkvitEach } from "~/helpers/api/reciptapi";
import ReceiptTablePc from "./ReceiptTablePc";
import ReceiptTableMobile from "./ReceiptTableMobile";

function ReceiptTable() {
  const [receipts, setReceipts] = useState<reciptinterface[]>([]);
  const [filtredReceipts, setFiltredReceipts] = useState<reciptinterface[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const fetchReceipts = async () => {
    try {
        const response = await GetReceiptByEmail();
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: reciptinterface[] = await response.json();
        setReceipts(data);
        setFiltredReceipts(data);
    } catch (error) {
      console.error("Error fetching scammers:", error);
    }
  };
  
  useEffect(() => {
    const filteredrecipt = receipts.filter((receipts) =>
      receipts.produktNavn.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltredReceipts(filteredrecipt);
  }, [searchTerm]);

  useEffect(() => {
    fetchReceipts();
  }, []);
  return (
    <div className="w-full">
      <div className=" flex justify-center w-full pb-5">
        <div className="pt-10 w-full md:w-4/5">
          <form
            className="max-w mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              form="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block placeholder:text-white text-white w-full p-4 ps-10 text-sm border animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Søg efter et produkt"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <ReceiptTablePc receipts={filtredReceipts}></ReceiptTablePc>
      <ReceiptTableMobile receipts={filtredReceipts}></ReceiptTableMobile>
    </div>
  );
}

export default ReceiptTable;
