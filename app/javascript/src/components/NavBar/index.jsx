import React from "react";
import { Link } from "react-router-dom";
import { setToLocalStorage } from "helpers/storage";
import authApi from "../../apis/auth";
import { resetAuthTokens } from "../../apis/axios";

const NavBar = () => {
  const handleLogout = async () => {
    try {
      await authApi.logout();
      setToLocalStorage({ authToken: null, email: null, userId: null });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-gray-200 shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="hidden lg:flex">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 mr-3
                            font-semibold text-sm leading-5
                            text-indigo-500 hover:text-indigo-500"
              >
                Polls
              </Link>
              <Link
                to="/create"
                className="inline-flex items-center px-1 pt-1 mr-3
                            font-semibold text-sm leading-5
                            text-indigo-500 hover:text-indigo-500"
              >
                <i className={`ri-add-fill text-bb-purple`}></i>
                Create
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <a
              onClick={handleLogout}
              className="inline-flex items-center px-1 pt-1 text-sm
             font-semibold leading-5 text-bb-gray-600 text-opacity-50
             transition duration-150 ease-in-out border-b-2
             border-transparent hover:text-bb-gray-600 focus:outline-none
             focus:text-bb-gray-700 cursor-pointer"
            >
              LogOut
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
