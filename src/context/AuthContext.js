import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedRole = localStorage.getItem("role");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedRole && storedToken) {
      setUser(storedUser);
      setRole(storedRole);
      setToken(storedToken);
    }
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    setRole(userData.role);
    setToken(userData.token);

    localStorage.setItem("user", JSON.stringify(userData.user));
    localStorage.setItem("role", userData.role);
    localStorage.setItem("token", userData.token);

    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, role, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
