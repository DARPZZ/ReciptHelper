import React, { useEffect, useState } from "react";
import reciptinterface from "../../interfaces/reciptinterface";
import GetReceiptByEmail from "~/helpers/api/reciptapi";
import ReceiptTablePc from "./ReceiptTablePc";
import ReceiptTableMobile from "./ReceiptTableMobile";
function ReceiptTable() {
  const [receipts, setReceipts] = useState<reciptinterface[]>([]);
  const fetchReceipts = async () => {
    try {
      let email = sessionStorage.getItem("email");
      if (email != null) {
        const response = await GetReceiptByEmail(email);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: reciptinterface[] = await response.json();
        setReceipts(data);
      }
    } catch (error) {
      console.error("Error fetching scammers:", error);
    }
  };
  useEffect(() => {
    fetchReceipts();
  }, []);
  return (
    <div>
      <ReceiptTablePc receipts={receipts} ></ReceiptTablePc>
      <ReceiptTableMobile receipts={receipts}></ReceiptTableMobile>
    </div>
  );
}

export default ReceiptTable;
