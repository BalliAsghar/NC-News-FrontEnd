import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/User.Context";
const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="text-gray-400 bg-white body-font">
      <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"></a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <h1 className="text-7xl text-center text-gray-700 raleway">
            <Link to="/">NC News</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;