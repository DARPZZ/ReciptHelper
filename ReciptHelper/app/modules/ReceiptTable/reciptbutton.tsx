import React from 'react'
type ReciptButtonProps = {
  onClickEvent: () => void;
  text: boolean;
  header:string;
};
function Reciptbutton({ onClickEvent, text,header }: ReciptButtonProps) {
  return (
        <div className="flex p-4 flex-col border-solid border-4 text-center  rounded-lg border-blue-400 ">
            <h2>{header}</h2>
            <button
              onClick={onClickEvent}
              className=" mt-2 border border-spacing-1 rounded-xl font-bold text-xl"
            >
              {text ? "Deaktivere" : "Aktivere"}
            </button>
        </div>
  )
}

export default Reciptbutton