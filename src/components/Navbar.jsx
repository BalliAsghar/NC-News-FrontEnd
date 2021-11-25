import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/User.Context";
const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <header className="text-gray-400 bg-white body-font">
      <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"></a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <h1 className="text-7xl text-center text-gray-700 raleway">
            <Link to="/">NC News</Link>
          </h1>
        </div>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {user ? (
            <div className="flex">
              <div className="raleway mx-1 text-2xl font-semibold bg-gray-800 border rounded p-2 text-white hover:bg-gray-900 cursor-pointer">
                {user.user.username}
              </div>
              <div
                className="raleway mx-1 text-2xl font-semibold bg-red-600 border rounded p-2 text-white hover:bg-red-900 cursor-pointer"
                onClick={handleLogOut}
              >
                Logout
              </div>
            </div>
          ) : (
            <Link
              to={"/user/login"}
              className="raleway mx-1 text-2xl font-semibold bg-gray-800 border rounded p-2 text-white hover:bg-gray-900 cursor-pointer"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
