import { useNavigate } from "react-router";
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
      )}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
        date.getDate(),
      ).padStart(2, "0")}`;
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
      <div className="app-page">
        <div className="mx-auto w-full max-w-3xl">
          <header className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Nyt arkivpunkt
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              Ny kvittering
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Indtast oplysningerne fra dit køb for at gemme dokumentationen.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="panel overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-slate-800">
                <div className="space-y-5 p-6 sm:p-8">
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                    Købsdetaljer
                  </h2>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Købsdato
                    </label>
                    <CustomDatePicker
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Reklamationsfrist
                    </label>
                    <input
                      type="text"
                      readOnly
                      name="slutDato"
                      value={getDatePlusTwoYears()}
                      className="form-input cursor-not-allowed bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Link til e-mail
                    </label>
                    <input
                      type="url"
                      name="emailLink"
                      placeholder="https://..."
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-5 p-6 sm:p-8">
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                    Produktinfo
                  </h2>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Produktnavn
                    </label>
                    <input
                      type="text"
                      name="produktNavn"
                      placeholder="f.eks. MacBook Pro"
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Pris (DKK)
                    </label>
                    <input
                      type="number"
                      name="pris"
                      placeholder="0,00"
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Firma / butik
                    </label>
                    <input
                      name="firmaNavnToCheck"
                      type="text"
                      placeholder="Hvor er det købt?"
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="secondary-button"
                onClick={() => navigate("/Dashboard")}
              >
                Annuller
              </button>
              <button type="submit" className="primary-button">
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
