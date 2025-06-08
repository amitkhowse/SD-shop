import { useState } from "react";
import { BellIcon, UserCircleIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700 dark:text-white">Admin Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <BellIcon className="w-6 h-6 text-gray-700 dark:text-white" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
        </button>

        {/* Profile Menu */}
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
            <UserCircleIcon className="w-8 h-8 text-gray-700 dark:text-white" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <a href="/profile" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Profile</a>
              <a href="/settings" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Settings</a>
              <a href="/logout" className="block px-4 py-2 text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700">Sign Out</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
