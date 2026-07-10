import React, { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import GetReceiptByEmail, {
  GetReceiptByEmailNotOld,
  getReceiptByIndex,
} from "~/helpers/api/reciptapi";
import ReceiptTablePc from "./ReceiptTablePc";
import ReceiptTableMobile from "./ReceiptTableMobile";
import { ToastContainer } from "react-toastify";
import { GetSettings } from "~/helpers/api/userapi";

function ReceiptTable() {
  const [receipts, setReceipts] = useState<reciptinterface[]>([]);
  const [filtredReceipts, setFiltredReceipts] = useState<reciptinterface[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [offset, setOffset] = useState(0);

  async function GetSettingsFirst() {
    const response = await GetSettings();
    const data = await response.json();

    let visKvit = data["showOldKvitteringer"];
    return visKvit;
  }

  const fetchReceipts = async () => {
    try {
      const response = (await GetSettingsFirst())
        ? getReceiptByIndex(offset, true)
        : getReceiptByIndex(offset, false);
      if (!(await response).ok) {
        throw new Error(`HTTP error! status: ${(await response).status}`);
      }
      const data: reciptinterface[] = await (await response).json();
      const reversedData = data.reverse();
      setReceipts(reversedData);
      setFiltredReceipts(reversedData);
    } catch (error) {
      console.error("Error fetching receipts:", error);
    }
  };

  useEffect(() => {
    const filteredrecipt = receipts.filter((receipts) =>
      receipts.produktNavn.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFiltredReceipts(filteredrecipt);
  }, [searchTerm, receipts]);

  useEffect(() => {
    fetchReceipts();
  }, [offset]);

  return (
    <div className="w-full">
      <div className="w-full flex gap-10 justify-center items-center pt-2">
        <button
          onClick={() => setOffset(Math.max(0, offset - 6))}
          className="secondary-button"
        >
          Forige
        </button>
        <button
          onClick={() => setOffset(offset + 6)}
          className="secondary-button"
        >
          Næste
        </button>
      </div>
      <ToastContainer position="bottom-right" theme="colored" />
      <div className="border-b border-slate-200 p-5 dark:border-slate-800 sm:p-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor="receipt-search"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Søg i kvitteringer
          </label>
          <div className="relative max-w-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="h-4 w-4 text-slate-400"
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
              id="receipt-search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-11"
              placeholder="Søg efter produkt"
            />
          </div>
        </form>
      </div>
      <ReceiptTablePc receipts={filtredReceipts} />
      <ReceiptTableMobile receipts={filtredReceipts} />
    </div>
  );
}

export default ReceiptTable;
