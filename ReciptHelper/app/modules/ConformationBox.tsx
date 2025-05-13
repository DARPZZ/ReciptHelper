import React from "react";
interface comps {
  confirmationbox: any;
  okayToDelete: any;
}
const ConformationBox = ({ confirmationbox, okayToDelete }: comps) => {
  function deleteKvit() {
    confirmationbox(false);
    okayToDelete(true);
  }
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <div className=" md:w-3/4 w-4/5 bg-slate-400 rounded-xl md:h-80 h-96 bg-opacity-80 flex flex-col items-center justify-center">
          <h1 className="text-black  font-bold text-2xl pb-10">
            Er du sikker på, at du ønsker at slette denne kvittering?
          </h1>
          <div className=" text-xl font-bold grid md:grid-cols-2 grid-cols-1 space-y-5 md:space-x-10 md:space-y-0  px-2">
            <div>
              <button
                onClick={() => deleteKvit()}
                className="relative group w-full p-4 rounded-2xl bg-green-600 text-white font-semibold text-lg overflow-hidden border-4 border-black transition-all duration-300 ease-in-out 
             hover:scale-110 hover:bg-green-500 hover:border-green-700 shadow-md hover:shadow-xl"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 
                   transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out opacity-50"
                ></span>
                <span className="relative z-10">
                  🗑️ Jeg ønsker at slette kvitteringen
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => confirmationbox(false)}
                className="relative group w-full p-4 rounded-2xl bg-red-600 text-white font-semibold text-lg overflow-hidden border-4 border-black transition-all duration-300 ease-in-out 
             hover:scale-110 hover:bg-red-500 hover:border-red-700 shadow-md hover:shadow-xl"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 
                   transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out opacity-50"
                ></span>
                <span className="relative z-10">
                  🚫 Nej tak, behold kvitteringen
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationBox;
