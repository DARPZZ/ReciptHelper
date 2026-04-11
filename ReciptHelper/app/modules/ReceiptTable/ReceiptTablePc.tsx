import React, { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import { remove } from "../../modules/ReceiptTable/BaseRecipt";
import ConformationBox from "../ConformationBox";
type ChildComponentProps = {
  receipts: any;
};
const ReceiptTablePc = ({ receipts }: ChildComponentProps) => {
  const [showConfirmationBox, setShowConfirmationBox] =
    useState<boolean>(false);
  const [toDelete, setToDelete] = useState<boolean>(false);
  const [receiptToDelete, setReceiptToDelete] =
    useState<reciptinterface | null>(null);
  useEffect(() => {
    if (toDelete && receiptToDelete) {
      remove(receiptToDelete);
      setToDelete(false);
      setReceiptToDelete(null);
    }
  }, [toDelete, receiptToDelete]);

  return (
    <div>
      {showConfirmationBox == true && (
        <div className="z-40  flex fixed inset-0 items-center justify-center">
          <ConformationBox
            confirmationbox={setShowConfirmationBox}
            okayToDelete={setToDelete}
          />
        </div>
      )}
      <div className="hidden 2xl:block w-full overflow-hidden bg-white dark:bg-gray-950 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <table
          id="myTable"
          className="w-full text-left border-separate border-spacing-0"
        >
          <thead>
            <tr className="bg-gray-50/50 dark:bg-gray-900/50">
              <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800">
                Købs Dato
              </th>
              <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800">
                Slut Dato
              </th>
              <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800">
                Produkt
              </th>
              <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800">
                Pris
              </th>
              <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800">
                Firma
              </th>
              <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800">
                Link
              </th>
              <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 text-right">
                Handling
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-900">
            {receipts.length > 0 ? (
              receipts.map((receipt: any) => (
                <tr
                  key={receipt.reciptID}
                  className="group hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-all duration-200"
                >
                  <td className="px-8 py-6 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(receipt.købsDato).toLocaleDateString("da-DK", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(receipt.slutDato).toLocaleDateString("da-DK", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                      {receipt.produktNavn}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm font-mono font-medium text-gray-600 dark:text-gray-300">
                    {Number(receipt.pris).toLocaleString("da-DK")} DKK
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-500 dark:text-gray-400">
                    {receipt.firma}
                  </td>
                  <td className="px-8 py-6">
                    {receipt.emailLink ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={receipt.emailLink}
                        className="inline-flex text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 decoration-2"
                      >
                        Åbn kvittering
                      </a>
                    ) : (
                      <span className="text-gray-300 dark:text-gray-700">
                        —
                      </span>
                    )}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button
                      onClick={() => {
                        setShowConfirmationBox(true);
                        setReceiptToDelete(receipt);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Slet
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-8 py-20 text-center">
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500 italic">
                    Ingen kvitteringer fundet i arkivet.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceiptTablePc;
