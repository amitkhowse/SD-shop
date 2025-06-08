import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, token } = useContext(AuthContext);

  if (!user || !token) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
