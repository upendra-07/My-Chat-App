import verifyToken from "../Utilities/VerifyToken";
import { ROUTES_CONST } from "./RouteConstant";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children, authentication }) => {
  let location = useLocation();
  // const token = verifyToken(authentication);
  // if (token) {
  //   return <Navigate to={ROUTES_CONST.HOME} state={{ from: location }} />;
  // }
  return children;
};
export default PublicRoute;
