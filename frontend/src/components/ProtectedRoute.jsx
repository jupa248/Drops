import { Route, Navigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();

  if (!user?.id) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
