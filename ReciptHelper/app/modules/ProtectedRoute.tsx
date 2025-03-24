import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = Boolean(sessionStorage.getItem("email"));
  
  if (!isAuthenticated) {
    return <Navigate to="/UnAuthorized" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
