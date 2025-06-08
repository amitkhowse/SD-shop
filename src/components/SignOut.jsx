import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SignOut = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button
      onClick={logout}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
