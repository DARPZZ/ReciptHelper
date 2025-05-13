import React, { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import { remove } from "../../modules/ReceiptTable/BaseRecipt";
import ConformationBox from "../ConformationBox";

type ChildComponentProps = {
  receipts: any;
};
const ReceiptTablePc = ({ receipts }: ChildComponentProps) => {
  const [showConfirmationBox, setShowConfirmationBox] = useState<boolean>(false);
  const [toDelete, setToDelete] = useState<boolean>(false);
  const [receiptToDelete, setReceiptToDelete] = useState<reciptinterface | null>(null);
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
          <ConformationBox confirmationbox={setShowConfirmationBox} okayToDelete={setToDelete} />
        </div>
      )}

      <table
        id="myTable"
        className="w-full hidden 2xl:table table-auto   text-sm "
      >
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6  py-3">
              Købs Dato
            </th>
            <th scope="col" className="px-6 py-3">
              Slut dato
            </th>
            <th scope="col" className="px-6 py-3">
              Produkt Navn
            </th>
            <th scope="col" className="px-6 py-3">
              Pris
            </th>
            <th scope="col" className="px-6 py-3">
              Firma
            </th>
            <th scope="col" className="px-6 py-3">
              Email Link
            </th>
            <th scope="col" className="px-6 py-3">
              Slet Kvittering
            </th>
          </tr>
        </thead>
        <tbody>
          {receipts.length > 0 ? (
            receipts.map(
              (reciptinterface: reciptinterface) => (
                <tr
                  key={reciptinterface.reciptID}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                    {reciptinterface.købsDato
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </th>
                  <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                    {reciptinterface.slutDato
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </th>
                  <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                    {reciptinterface.produktNavn}
                  </th>
                  <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                    {reciptinterface.pris}
                  </th>
                  <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                    {reciptinterface.firma}
                  </th>
                  <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={reciptinterface.emailLink}
                    >
                      Se Kvittering
                    </a>
                  </th>
                  <th className="px-6 py-4  text-gray-900 dark:text-white">
                    <button
                      onClick={() => {
                        setShowConfirmationBox(true);
                        setReceiptToDelete(reciptinterface);
                      }}
                    >
                      Slet Kvittering
                    </button>
                  </th>
                </tr>
              )
            )
          ) : (
            <tr>
              <td
                colSpan={4}
                className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
              >
                Vi har ikke nogle kviteringer til dig.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptTablePc;
