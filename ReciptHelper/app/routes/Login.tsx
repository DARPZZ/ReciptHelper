import { Link, useNavigate } from "@remix-run/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { LogUserIn } from "~/helpers/api/userapi";

function Login() {
  
  const navigate = useNavigate();
  const [correctInformation,SetcorrectInformation] = useState(true)
  const [formData, setFormData] = useState({
    Email: "",
    adgangskode: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(!correctInformation)
    {
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
    var data = await response.json
    if(response.status ==200)
    {
      sessionStorage.setItem("email",formData.Email );
      navigate("/dashboard")
    }
    else if(response.status == 400)
    {
      SetcorrectInformation(false);
    }
  };

  return (
    <section className="w-full h-full flex justify-center   dark:bg-gray-900">
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Log på
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
            <div>
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Din email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                value={formData.Email}
                onChange={handleChange}

              />
            </div>
            <div>
              <label
                htmlFor="Password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Adgangskodeord
              </label>
              <input
                type="password"
                name="adgangskode"
                id="Password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.adgangskode}
                onChange={handleChange}
              />
            </div>
            {correctInformation == false && (
            <div className="w-full">
              <h1 className="text-center font-bold text-red-600">Forkert adgangskode eller email</h1>
            </div>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-start"></div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Glemt kodeord?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-black bg-gray-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Log på
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Har du ikke en konto endnu?{" "}
              <Link
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                to="/Signup"
              >
                Lav en konto
              </Link>
              ;
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Login;
