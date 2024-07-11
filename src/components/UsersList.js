import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/slice/userSlice";

export const UsersList = ({ userData }) => {
  const { name, email, username, id } = userData;

  const dispatch = useDispatch(); 

  return (
    <div className="flex justify-between items-center border border-slate-800 p-5 rounded">
      <div className="w-1/2">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700  ">
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  <span className="text-blue-400">Name: </span>
                  <span className="text-red-500">{name}</span>
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  <span className="text-blue-400">Email: </span>
                  <span className="text-red-500">{email}</span>
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <span className="text-blue-400">Username: </span>
                <span className="text-red-500">{username}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-1/2 flex justify-end">
        <Link to={`/edit/${id}`}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Edit
          </button>
        </Link>

        <button onClick={()=>dispatch(deleteUser({id}))}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
