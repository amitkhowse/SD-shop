// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag, ListChecks, Users, Settings } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed left-0 top-0 h-full w-60 bg-gray-900 p-5 text-white 
        transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-60"
        }`}
      >
        {/* Sidebar Content */}
        <h2 className="mb-6 flex items-center text-xl font-bold">
          <ShoppingBag className="mr-2 h-6 w-6" />
          Admin Dashboard
        </h2>
        
        <ul className="space-y-4">
        <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center space-x-2 hover:text-gray-300">
              <ShoppingBag className="h-5 w-5" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center space-x-2 hover:text-gray-300">
              <ListChecks className="h-5 w-5" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/customers" className="flex items-center space-x-2 hover:text-gray-300">
              <Users className="h-5 w-5" />
              <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-2 hover:text-gray-300">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;