import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, updateUser } from "../redux/slice/userSlice";
import { useNavigate, useParams } from "react-router-dom";

export const UserForm = () => {
  const objRef = useRef({});

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  
  if (id) {
    const { name, email, username } = users.find((ele) => ele.id === +id);
    objRef.current = { name, email, username, id: +id };
    console.log(objRef.current);
  }
  

  const handleUser = (e) => {
    objRef.current[e.target.name] = e.target.value;
  };

  const handleDispatchUser = (e) => {
    e.preventDefault();
    if(id)
    {
      dispatch(updateUser(objRef.current));
    }
    else
    {
      dispatch(addNewUser(objRef.current));
    }
    e.target.reset();
    navigate("/");
  };

  return (
    <form
      onSubmit={(e) => handleDispatchUser(e)}
      className="max-w-xl mx-auto mt-5 border border-blue-500 p-[40px] rounded "
    >
      <div className="relative z-0 w-full mb-6 group ">
        <input
          onChange={(e) => handleUser(e)}
          defaultValue={objRef.current.email}
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="text-blue-500 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>

      <div className="grid md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={(e) => handleUser(e)}
            defaultValue={objRef.current.name}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="text-blue-500 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
      </div>
      <div className="grid md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={(e) => handleUser(e)}
            defaultValue={objRef.current.username}
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="username"
            className="text-blue-500 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
