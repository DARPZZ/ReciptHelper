import React, { useState } from "react";
import CustomDatePicker from "~/helpers/CustomDatePicker";
function OpretKvittering() {
  const [selectedDate, setSelectedDate] = useState("");
  const getDatePlusTwoYears = () => {
    if (!selectedDate) return "";
    const date = new Date(selectedDate);
    date.setFullYear(date.getFullYear() + 2);
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    return formattedDate;
  };
  return (
    <div className="flex bg-gray-800  flex-col h-full w-full">
      <h1 className="text-2xl text-white font-sans font-bold text-center mt-5">
        Her ha du muligheden for at oprette en ny kvittering
      </h1>
      <div className="flex items-center justify-center w-full h-full">
        <form className="text-left p-3 rounded-xl bg-slate-200" action="">
          <div className="flex flex-row gap-x-8">
            <div className="flex flex-col">
              <section className="pb-6">
                <h1>Købs datoen for produktet</h1>
                <CustomDatePicker
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </section>
              <section className="pb-6">
                <h1>Sidste reklamentaions dag</h1>
                <input
                  type="text"
                  readOnly
                  name="datetpick2"
                  id="datetpick2"
                  value={getDatePlusTwoYears()}
            
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </section>
              <section className="pb-6">
                <h1>Link til emailen</h1>
                <input
                  type="datetpick2"
                  name="datetpick2"
                  id="datetpick2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </section>
            </div>
            <div>
              <section className="pb-6">
                <h1>Produktets navn</h1>
                <input
                  type="datetpick2"
                  name="datetpick2"
                  id="datetpick2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </section>
              <section className="pb-6">
                <h1>Pris</h1>
                <input
                  type="datetpick2"
                  name="datetpick2"
                  id="datetpick2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </section>
              <section className=" pt-6">
                <button
                  type="submit"
                  className="w-full font-bold text-white text-xl hover:bg-green-800 h-10 bg-green-600  rounded-xl "
                >
                  Opret kvittering
                </button>
              </section>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OpretKvittering;
