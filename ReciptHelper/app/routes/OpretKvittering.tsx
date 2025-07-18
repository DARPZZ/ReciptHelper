import { useNavigate } from "@remix-run/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CustomDatePicker from "~/helpers/CustomDatePicker";
import { CreateRecipt } from "~/helpers/api/reciptapi";
import ProtectedRoute from "~/modules/ProtectedRoute";
function OpretKvittering() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    købsDato: "",
    slutDato: "",
    email: "",
    emailLink: "",
    produktNavn: "",
    pris: 0,
    firmaNavnToCheck: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      formData.købsDato = selectedDate;
      const date = new Date(selectedDate);
      date.setFullYear(date.getFullYear() + 2);
      const formattedDate = `${String(date.getFullYear()).padStart(
        2,
        "0"
      )}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getDate()}`;
      formData.slutDato = formattedDate;

      const response = await CreateRecipt(formData);
      if (response.ok) {
        navigate("/Dashboard");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Noget gik galt. Prøv igen.");
    }
  };

  const [selectedDate, setSelectedDate] = useState("");
  const getDatePlusTwoYears = () => {
    if (!selectedDate) return "";
    const date = new Date(selectedDate);
    date.setFullYear(date.getFullYear() + 2);
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;
    return formattedDate;
  };
  return (
    <ProtectedRoute>
      <div className="flex  bg-white dark:bg-black flex-col h-full w-full">
        <h1 className="text-3xl md:mt-28 text-black dark:text-white  font-sans font-bold text-center mt-36">
          Her har du muligheden for at oprette en ny kvittering
        </h1>
        <div className="flex  items-center h-full w-full justify-center flex-col">
          <form
            className="text-left p-3 font-bold rounded-xl bg-slate-200 dark:bg-gray-700 dark:text-white"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row gap-x-8">
              <div className="flex flex-col">
                <section className="pb-6">
                  <h1>Købs dato</h1>
                  <CustomDatePicker
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </section>
                <section className="pb-6">
                  <h1>Sidste reklamentaion</h1>
                  <input
                    type="text"
                    readOnly
                    name="slutDato"
                    id="slutDato"
                    value={getDatePlusTwoYears()}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </section>
                <section className="pb-6">
                  <h1>Link til emailen</h1>
                  <input
                    type="url"
                    name="emailLink"
                    id="emailLink"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  />
                </section>
              </div>
              <div>
                <section className="pb-6">
                  <h1>Produktets navn</h1>
                  <input
                    type="text"
                    name="produktNavn"
                    id="produktNavn"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  />
                </section>
                <section className="pb-6">
                  <h1>Pris</h1>
                  <input
                    type="number"
                    name="pris"
                    id="pris"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  />
                </section>
                <section className="pb-6">
                  <h1>Firma navn</h1>
                  <input
                    type="text"
                    name="firmaNavnToCheck"
                    id="firmaNavnToCheck"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  />
                </section>
              </div>
            </div>
            <section>
              <button
                type="submit"
                className="w-full justify-center items-center flex font-bold text-white text-xl hover:bg-green-800 h-10 bg-green-600  rounded-xl "
              >
                Opret kvittering
              </button>
            </section>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default OpretKvittering;
