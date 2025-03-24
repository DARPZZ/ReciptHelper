import React from "react";
import ProtectedRoute from "~/modules/ProtectedRoute";
function Settings() {
  return (
    <ProtectedRoute>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold"> Ikke implementeret</h1>
      </div>
    </ProtectedRoute>
  );
}

export default Settings;
