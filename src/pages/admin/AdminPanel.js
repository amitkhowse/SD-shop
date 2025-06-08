import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminPanel = () => {
  const { user, role } = useContext(AuthContext);

  if (role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <p>Welcome, {user?.name}! Manage users, products, and settings from here.</p>
    </div>
  );
};

export default AdminPanel;
