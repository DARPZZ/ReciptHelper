import { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import { remove } from "../../modules/ReceiptTable/BaseRecipt";
import ConformationBox from "../ConformationBox";

type ChildComponentProps = {
  receipts: reciptinterface[];
};

const formatDate = (date: string) =>
  date.split("T")[0].split("-").reverse().join("-");

function ReceiptTableMobile({ receipts }: ChildComponentProps) {
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

  const [correctInformation, SetcorrectInformation] = useState(false);
  useEffect(() => {
    SetcorrectInformation(receipts.length > 0);
  }, [receipts]);

  return (
    <div className="block space-y-4 p-5 2xl:hidden sm:p-6">
      {showConfirmationBox == true && (
        <ConformationBox
          confirmationbox={setShowConfirmationBox}
          okayToDelete={setToDelete}
        />
      )}
      {!correctInformation && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
          <h1 className="text-lg font-bold text-slate-500 dark:text-slate-400">
            Vi har ikke nogle kvitteringer til dig.
          </h1>
        </div>
      )}
      {receipts.map((receipt: reciptinterface) => (
        <article
          key={receipt.reciptID}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-slate-950 dark:text-white">
                {receipt.produktNavn}
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {receipt.firma}
              </p>
            </div>
            <p className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {Number(receipt.pris).toLocaleString("da-DK")} DKK
            </p>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Købsdato
              </dt>
              <dd className="mt-1 font-semibold text-slate-700 dark:text-slate-200">
                {formatDate(receipt.købsDato)}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Slutdato
              </dt>
              <dd className="mt-1 font-semibold text-slate-700 dark:text-slate-200">
                {formatDate(receipt.slutDato)}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {receipt.emailLink ? (
              <a
                href={receipt.emailLink}
                className="secondary-button py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Se kvittering
              </a>
            ) : (
              <span className="text-sm text-slate-400">Intet link gemt</span>
            )}
            <button
              className="rounded-xl px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10"
              onClick={() => {
                setShowConfirmationBox(true);
                setReceiptToDelete(receipt);
              }}
            >
              Slet kvittering
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ReceiptTableMobile;
