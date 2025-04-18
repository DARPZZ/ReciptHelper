import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { OpretBruger } from "~/helpers/api/userapi";
function Signup() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showEkstraDiv, setShowEkstraDiv] = useState(false)
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
      !isChecked ? setShowEkstraDiv(true) : setShowEkstraDiv(false)
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
    <div className=" w-full items-center flex justify-center flex-col h-full  dark:bg-gray-900 ">
      <div className="w-full pt-2 items-center flex flex-col justify-center">
        <form
          className="space-y-4 md:space-y-6 bg-slate-700 p-5 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <div className="font-bold">Opret Bruger</div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              value={formData.Email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Adgangskode
            </label>
            <input
              type="password"
              name="adgangskode"
              id="adgangskode"
              placeholder="••••••••"
              autoComplete="on"
              value={formData.adgangskode}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Telefonnummer
              </label>
              <input
                name="TelefonNummer"
                id="TelefonNummer"
                value={formData.TelefonNummer}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          {showEkstraDiv && (
            <div>
              <h1 className="text-red-400 font-bold">
                Du mangler at acceptere Terms and Conditions
              </h1>
            </div>
          )}

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className=" text-black ml-3 text-sm">
              <label htmlFor="terms" className="font-light  dark:text-gray-300">
                Jeg acceptere{" "}
                <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to={"/Terms"}
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-black bg-gray-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Opret konto
          </button>
          <p className="text-sm font-light  dark:text-gray-400">
            Har du allerde en konto?{" "}
            <Link
              to="/Login"
              className="font-medium text-primary-600 dark:text-white hover:underline dark:text-primary-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
