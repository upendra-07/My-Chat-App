import { useMutation } from "@apollo/client";
import { SIGN_IN_USER } from "../../graphql/mutations/User/user.mutation";
import { toast } from "react-toastify";
import { ROUTES_CONST } from "../../Routes/RouteConstant";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const [userSignIn] = useMutation(SIGN_IN_USER, {
    onCompleted: (res) => {
      console.log(res);
      localStorage.setItem("authToken", res.userSignIn.token);
      navigate(`${ROUTES_CONST.HOME}`);
      toast.success("Login successful!");
    },
    onError: (error) => {
      toast.error(`Login failed! ${error.message}`);
    },
  });

  return {
    userSignIn,
  };
};

export default useLogin;
