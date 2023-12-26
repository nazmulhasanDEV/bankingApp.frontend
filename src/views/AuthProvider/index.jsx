import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getBankAccounts } from "@/apiServices/getBankAccounts";
import { updateBankInfo } from "@/store/features/bankInfoSlice/bankInfoSlice";

const ProtectedRoute = ({ children }) => {

  const dispatch = useDispatch();
  // const { accessToken } = useSelector((state) => state.auth.authInfo);
  const { isAuthenticated, accessToken } = useSelector((state) => state.auth.authInfo);
  // console.log("isAuthenticated: ", isAuthenticated);

  useEffect(() => {
    // console.log("calling");
    const getAllBankAccounts = async () => {
      const accounts = await getBankAccounts(accessToken);
      dispatch(updateBankInfo(accounts?.data));
    };
    getAllBankAccounts();
  }, []);

  return <>{!isAuthenticated ? <Navigate to="/login" /> : children}</>;
};

export default ProtectedRoute;
