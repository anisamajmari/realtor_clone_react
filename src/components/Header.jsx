import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, []);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const listClasses = (path) => {
    return `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
      pathMatchRoute(path)
        ? "text-black border-b-red-500"
        : "border-b-transparent"
    }`;
  };

  return (
    <>
      <div className="w-full h-16 text-center flex items-center text-red-950 bg-red-200 rounded-lg">
        This is a sample clone of realtor developed for portofolio purposes. We
        are not selling or offering any real property. All data is dummy.
      </div>
      <div className="bg-white border-b shadow-sm sticky top-0 z-40">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
          <div>Realtore Clone</div>
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
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
                  pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                    ? "text-black border-b-red-500"
                    : "border-b-transparent"
                }`}
                onClick={() => navigate("/profile")}
              >
                {pageState}
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
