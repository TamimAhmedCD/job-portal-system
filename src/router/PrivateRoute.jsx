import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import authContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const location = useLocation();

  if (loading) {
    return <p>Lading... </p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
