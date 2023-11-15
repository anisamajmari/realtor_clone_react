import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const listClasses = (path) => {
    return `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
      pathMathRoute(path)
        ? "text-black border-b-red-500"
        : "border-b-transparent"
    }`;
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={listClasses("/")} onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className={listClasses("/offers")}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={listClasses("/sign-in")}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
