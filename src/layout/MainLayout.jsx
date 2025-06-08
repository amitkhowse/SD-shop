// MainLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { X, Menu } from "lucide-react";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className={`flex-1 p-6 transition-all duration-300 ${
        isSidebarOpen ? "ml-60" : "ml-0"
      }`}>
        {/* Universal Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`fixed top-4 z-50 rounded-md bg-gray-900 p-2 text-white 
            shadow-md transition-all duration-300 ${
              isSidebarOpen ? "left-64" : "left-4"
            }`}
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {children}
      </div>
    </div>
  );
};
export default MainLayout;