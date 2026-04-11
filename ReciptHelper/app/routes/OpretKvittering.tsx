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
        "0",
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
      date.getMonth() + 1,
    ).padStart(2, "0")}-${date.getFullYear()}`;
    return formattedDate;
  };
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-4 font-sans antialiased">
        <div className="max-w-3xl mx-auto">
          {/* Header - Enkel og fokuseret */}
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Ny kvittering
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Indtast oplysningerne fra dit køb for at arkivere dokumentationen.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hovedkortet */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
                {/* Venstre side: Købsinfo */}
                <div className="p-8 space-y-6">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Købsdetaljer
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Købsdato
                      </label>
                      <CustomDatePicker
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Reklamationsfrist
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={getDatePlusTwoYears()}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 text-sm cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Link til e-mail
                      </label>
                      <input
                        type="url"
                        placeholder="https://..."
                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all text-sm dark:text-white"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    Produktinfo
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Produktnavn
                      </label>
                      <input
                        type="text"
                        placeholder="f.eks. MacBook Pro"
                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all text-sm dark:text-white"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Pris (DKK)
                      </label>
                      <input
                        type="number"
                        placeholder="0,00"
                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all text-sm dark:text-white"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Firma / Butik
                      </label>
                      <input
                        type="text"
                        placeholder="Hvor er det købt?"
                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all text-sm dark:text-white"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-black dark:hover:bg-gray-100 transition-colors shadow-lg active:scale-95"
              >
                Gem kvittering
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default OpretKvittering;
