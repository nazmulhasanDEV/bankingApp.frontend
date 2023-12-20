import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth.authInfo);
  // console.log("isAuthenticated: ", isAuthenticated);

  return <>{!isAuthenticated ? <Navigate to="/login" /> : children}</>;
};

export default ProtectedRoute;
