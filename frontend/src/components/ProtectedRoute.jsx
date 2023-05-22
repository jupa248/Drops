import { Route, Navigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  console.log("user prot", user);
  if (!user?.id) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
