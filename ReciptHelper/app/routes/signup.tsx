import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { OpretBruger } from "~/helpers/api/userapi";

function Signup() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showEkstraDiv, setShowEkstraDiv] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    adgangskode: "",
    TelefonNummer: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      !isChecked ? setShowEkstraDiv(true) : setShowEkstraDiv(false);
      const response = await OpretBruger(formData);
      if (response.ok && isChecked) {
        navigate("/Login");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Noget gik galt. Prøv igen.");
    }
  };

  return (
    <section className="app-page flex items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            Kom i gang
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
            Opret bruger
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Opret et arkiv til dine kvitteringer og garantidatoer.
          </p>
        </div>

        <form className="panel space-y-5 p-6 sm:p-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              value={formData.Email}
              onChange={handleChange}
              autoComplete="email"
              className="form-input"
            />
          </div>

          <div>
            <label
              htmlFor="adgangskode"
              className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Adgangskode
            </label>
            <input
              type="password"
              name="adgangskode"
              id="adgangskode"
              placeholder="********"
              autoComplete="new-password"
              value={formData.adgangskode}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label
              htmlFor="TelefonNummer"
              className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Telefonnummer
            </label>
            <input
              name="TelefonNummer"
              id="TelefonNummer"
              value={formData.TelefonNummer}
              onChange={handleChange}
              autoComplete="tel"
              className="form-input"
            />
          </div>

          {showEkstraDiv && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
              Du mangler at acceptere Terms and Conditions.
            </div>
          )}

          <label className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-700"
            />
            <span>
              Jeg accepterer{" "}
              <Link
                className="font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                to="/Terms"
              >
                Terms and Conditions
              </Link>
            </span>
          </label>

          <button type="submit" className="primary-button w-full">
            Opret konto
          </button>

          <p className="text-center text-sm text-slate-600 dark:text-slate-300">
            Har du allerede en konto?{" "}
            <Link
              to="/Login"
              className="font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
            >
              Log på
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signup;
