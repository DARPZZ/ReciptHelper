import React from "react";
type props ={
    text:string;
    oncClickEvent: any;
    activeText:boolean;
    
}
function SettingComp({text,activeText,oncClickEvent}:props) {
  return (
    <div className="flex p-4 flex-col border-solid border-4  rounded-lg border-blue-400 ">
      <h2>{text}</h2>
      <button
        onClick={oncClickEvent}
        className=" mt-2 border border-spacing-1 rounded-xl font-bold text-xl"
      >
        {activeText ? "Deaktivere" : "Aktivere"}
      </button>
    </div>
  );
}

export default SettingComp;
