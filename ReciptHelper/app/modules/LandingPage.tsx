import React from "react";
import { Link } from "@remix-run/react";
function LandingPage() {
  return (
    <div className="h-full bg-gray-50">
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437b5')",
        }}
      >
        <div className="bg-black bg-opacity-50 h-dvh">
          <div className="container mx-auto px-6 py-32 text-center">
            <h1 className="text-5xl font-bold text-white">
              Opbevar dine kvitteringer ét sted
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Organisér, administrér og få adgang til dine kvitteringer med
              lethed.
            </p>
            <Link
              to="signup"
              className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
            >
              Opret bruger
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16">
        <div id="Features" className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Funktioner</h2>
          <p className="mt-4 text-gray-600">
            Opdag, hvordan vores platform kan hjælpe dig med at administrere
            dine kvitteringer uden besvær.
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex-1 bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414a1 1 0 00-.293-.707l-3.414-3.414A1 1 0 0012.586 3H4zm8 1.414L16.586 9H12a1 1 0 01-1-1V4.414z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Nem Upload
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Upload hurtigt kvitteringer med vores intuitive interface.
            </p>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-green-500 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8.414a2 2 0 00-.586-1.414l-3.414-3.414A2 2 0 0010.586 3H5zm8 1.414L15.586 7H13a1 1 0 01-1-1V4.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Organiseret Administration
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Kategoriser kvitteringer for nem sporing og genfinding.
            </p>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-indigo-500 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm1 12a1 1 0 11-2 0v-4a1 1 0 112 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Sikker Opbevaring
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Dine kvitteringer opbevares sikkert i skyen.
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div id="About" className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800">
                Om Recipt Helper
              </h2>
              <p className="mt-4 text-gray-600">
                Recipt Helper er designet til at forenkle den måde, du
                administrerer dine kvitteringer på. Med en brugervenlig
                grænseflade og sikker cloud-opbevaring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Recipt Helper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;