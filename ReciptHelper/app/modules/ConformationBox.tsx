import React from "react";
interface comps {
  confirmationbox: any,
  okayToDelete : any
}
const ConformationBox= ({confirmationbox,okayToDelete}: comps) =>{
  function deleteKvit()
  {
    confirmationbox(false);
    okayToDelete(true);
  }
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <div className=" md:w-3/4 w-4/5 bg-slate-400 rounded-xl md:h-80 h-96 bg-opacity-80 flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl pb-10">
            Er du sikker på, at du ønsker at slette denne kvittering?
          </h1>
          <div className=" text-xl font-bold grid md:grid-cols-2 grid-cols-1 space-y-5 md:space-x-10 md:space-y-0  px-2">
            <div>
              <button
                className="bg-green-600  border-4 rounded-xl w-full border-black  p-3"
                 onClick={()=>deleteKvit()}
              >
                Jeg ønsker at slette kvitteringen
              </button>
            </div>
            <div>
              <button
                className="bg-red-600 border-4 border-black rounded-xl p-3 "
                onClick={()=>confirmationbox(false)}
              >
                Jeg ønsker ikke at slette kvitteringen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationBox;
