import React from "react";
import { Outlet, Navigate } from "react-router";

export default function PrivateRoute() {
  const loggIn = false;
  return loggIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
