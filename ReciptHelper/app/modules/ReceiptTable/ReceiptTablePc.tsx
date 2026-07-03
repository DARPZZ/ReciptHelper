import { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import { remove } from "../../modules/ReceiptTable/BaseRecipt";
import ConformationBox from "../ConformationBox";

type ChildComponentProps = {
  receipts: reciptinterface[];
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("da-DK", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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
        <ConformationBox
          confirmationbox={setShowConfirmationBox}
          okayToDelete={setToDelete}
        />
      )}
      <div className="hidden w-full overflow-x-auto 2xl:block">
        <table
          id="myTable"
          className="w-full min-w-[980px] text-left text-sm"
        >
          <thead>
            <tr className="bg-slate-50 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
              <th className="px-6 py-4">Købsdato</th>
              <th className="px-6 py-4">Slutdato</th>
              <th className="px-6 py-4">Produkt</th>
              <th className="px-6 py-4">Pris</th>
              <th className="px-6 py-4">Firma</th>
              <th className="px-6 py-4">Link</th>
              <th className="px-6 py-4 text-right">Handling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {receipts.length > 0 ? (
              receipts.map((receipt) => (
                <tr
                  key={receipt.reciptID}
                  className="group transition hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
                    {formatDate(receipt.købsDato)}
                  </td>
                  <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
                    {formatDate(receipt.slutDato)}
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-bold text-slate-950 dark:text-white">
                      {receipt.produktNavn}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-mono font-semibold text-slate-700 dark:text-slate-200">
                    {Number(receipt.pris).toLocaleString("da-DK")} DKK
                  </td>
                  <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
                    {receipt.firma}
                  </td>
                  <td className="px-6 py-5">
                    {receipt.emailLink ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={receipt.emailLink}
                        className="font-semibold text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
                      >
                        Åbn kvittering
                      </a>
                    ) : (
                      <span className="text-slate-300 dark:text-slate-700">
                        -
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => {
                        setShowConfirmationBox(true);
                        setReceiptToDelete(receipt);
                      }}
                      className="rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-red-600 opacity-0 transition hover:bg-red-50 hover:text-red-700 group-hover:opacity-100 dark:text-red-300 dark:hover:bg-red-500/10"
                    >
                      Slet
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-16 text-center">
                  <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
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
