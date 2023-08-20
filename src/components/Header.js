import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="self-center text-blue-700 text-4xl font-semibold whitespace-nowrap dark:text-white">
            Home
          </span>
        </Link>
        <div className="text-blue-700 text-4xl font-semibold underline">USERS: CRUD OPERATIONS</div>
        <div className="flex md:order-2">
        <Link to='/add'><button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new user
          </button></Link>
        </div>
      </div>
    </nav>
  );
};
