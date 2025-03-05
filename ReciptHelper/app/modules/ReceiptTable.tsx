import React, { useEffect, useState } from "react";
import reciptinterface from "../interfaces/reciptinterface";
import GetReceiptByEmail from "~/helpers/api/reciptapi";
function ReceiptTable() {
  const [receipts, setReceipts] = useState<reciptinterface[]>([]);
  useEffect(() => {
    const fetchScammers = async () => {
      try {
        const response = await GetReceiptByEmail("ralle@gmail.com");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: reciptinterface[] = await response.json();
        setReceipts(data);
      } catch (error) {
        console.error("Error fetching scammers:", error);
      }
    };

    fetchScammers();
  }, []);
  return (
    <table className="w-full   text-sm text-gray-500 dark:text-gray-400">
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
            Email Link
          </th>
        </tr>
      </thead>
      <tbody>
        {receipts.length > 0 ? (
          receipts.map((reciptinterface) => (
            <tr
              key={reciptinterface.emailLink}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                {reciptinterface.købsDato.toString()}
              </th>
              <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                {reciptinterface.slutDato.toString()}
              </th>
              <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                {reciptinterface.produktNavn}
              </th>
              <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                {reciptinterface.pris}
              </th>
              <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
                <a target="_blank" href={"https://www.google.dk/"} >Se Kvittering</a>
              </th>

              
            </tr>
          ))
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
  );
}

export default ReceiptTable;
