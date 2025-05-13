import React, { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import SletKvitteringPåId from "./BaseRecipt";
import { remove } from "../../modules/ReceiptTable/BaseRecipt";
import ConformationBox from "../ConformationBox";
type ChildComponentProps = {
  receipts: any;
};
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
    <div className="block 2xl:hidden  px-2 pt-2 overflow-y-auto">
      {showConfirmationBox == true && (
        <div className="z-40  flex fixed inset-0 items-center justify-center">
          <ConformationBox
            confirmationbox={setShowConfirmationBox}
            okayToDelete={setToDelete}
          />
        </div>
      )}
      {!correctInformation && (
        <div>
          <h1 className=" text-2xl font-bold">
            Vi har ikke nogle kviteringer til dig.
          </h1>
        </div>
      )}
      {receipts.map((reciptinterface: reciptinterface) => (
        <div
          key={reciptinterface.reciptID}
          className="bg-slate p-4 ring-2  rounded-lg shadow-md mb-4"
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
          <a
            href={reciptinterface.emailLink}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Se Kvittering
          </a>
          <p className="pt-5">
            <button
              className="text-red-600"
              onClick={() => {
                setShowConfirmationBox(true);
                setReceiptToDelete(reciptinterface);
              }}
            >
              Slet kvittering
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ReceiptTableMobile;
