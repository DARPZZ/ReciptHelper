import { Link, useNavigate } from "react-router";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { LogUserIn } from "~/helpers/api/userapi";

function Login() {
  const navigate = useNavigate();
  const [correctInformation, SetcorrectInformation] = useState(true);
  const [formData, setFormData] = useState({
    Email: "",
    adgangskode: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!correctInformation) {
      SetcorrectInformation(true);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await LogUserIn(formData);
    if (response.status == 200) {
      sessionStorage.setItem("login", "true");
      navigate("/Dashboard");
    } else if (response.status == 400 || response.status == 401) {
      SetcorrectInformation(false);
    }
  };

  return (
    <section className="app-page flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
            Velkommen tilbage
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
            Log på Recipt Helper
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Få adgang til dit kvitteringsarkiv og dine indstillinger.
          </p>
        </div>

        <div className="panel p-6 sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="Email"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                autoComplete="email"
                className="form-input"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="Password"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Adgangskode
              </label>
              <input
                type="password"
                name="adgangskode"
                id="Password"
                placeholder="********"
                autoComplete="current-password"
                className="form-input"
                value={formData.adgangskode}
                onChange={handleChange}
              />
            </div>

            {correctInformation == false && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
                Forkert adgangskode eller email.
              </div>
            )}

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-semibold text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                Glemt kodeord?
              </a>
            </div>

            <button type="submit" className="primary-button w-full">
              Log på
            </button>

            <p className="text-center text-sm text-slate-600 dark:text-slate-300">
              Har du ikke en konto endnu?{" "}
              <Link
                className="font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                to="/signup"
              >
                Opret en konto
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
