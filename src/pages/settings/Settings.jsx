import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    console.log("Settings saved:", { darkMode, notifications });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <button onClick={() => setDarkMode(!darkMode)} className={`px-4 py-2 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-gray-300"}`}>
            {darkMode ? "On" : "Off"}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <button onClick={() => setNotifications(!notifications)} className={`px-4 py-2 rounded-md ${notifications ? "bg-green-500 text-white" : "bg-gray-300"}`}>
            {notifications ? "Enabled" : "Disabled"}
          </button>
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
      </div>
    </div>
  );
};

export default Settings;
