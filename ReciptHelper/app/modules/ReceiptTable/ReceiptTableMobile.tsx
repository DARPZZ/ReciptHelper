import React from "react";
import reciptinterface from "../../interfaces/reciptinterface";
function ReceiptTableMobile({ receipts }: { receipts: any }) {
  return (
    <div className="block md:hidden">
      {receipts.map((reciptinterface: reciptinterface) => (
        <div
          key={reciptinterface.reciptID}
          className="bg-white p-4 rounded-lg shadow-md mb-4"
        >
          <p>
            <strong>Købsdato:</strong>{" "}
            {reciptinterface.købsDato
              .split("T")[0]
              .split("-")
              .reverse()
              .join("-")}
          </p>
          <p>
            <strong>Slutdato:</strong>{" "}
            {reciptinterface.slutDato
              .split("T")[0]
              .split("-")
              .reverse()
              .join("-")}
          </p>
          <p>
            <strong>Produkt:</strong> {reciptinterface.produktNavn}
          </p>
          <p>
            <strong>Pris:</strong> {reciptinterface.pris}
          </p>
          <p>
            <strong>Firma:</strong> {reciptinterface.firma}
          </p>
          <a href={reciptinterface.emailLink} className="text-blue-500">
            Se Kvittering
          </a>
        </div>
      ))}
    </div>
  );
}

export default ReceiptTableMobile;
