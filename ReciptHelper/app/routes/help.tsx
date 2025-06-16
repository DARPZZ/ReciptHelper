import { Link } from "@remix-run/react";
import React from "react";

function help() {
  return (
    <div className="pt-28 px-4 w-full h-full flex justify-center ">
      <div className=" flex flex-col text-center justify-center">
        <h1 className="text-white font-bold text-xl pb-5">Hjælp</h1>
        <div className="h-full space-y-4 ">
          <p className=" font-bold">Safari (Mac/iPhone)</p>
          <p>1. Gå til Indstillinger &gt; Safari.</p>
          <p>
            2. Find og slå fra: “Bloker alle cookies” (slå den fra, så den ikke
            er grøn).
          </p>
          <p>3. Slå også fra: “Forhindre sporing på tværs af websteder”</p>
          <p>4. Prøv igen</p>
        </div>
        <span className="text-center justify-center items-center flex flex-col">
          <Link className="mt-12 border w-1/2 rounded-lg py-2 " to="/">
            Gå tilbage
          </Link>
        </span>
      </div>
    </div>
  );
}

export default help;
