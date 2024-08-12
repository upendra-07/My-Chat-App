import { useMutation } from "@apollo/client";
import { SIGN_IN_USER } from "../../graphql/mutations/User/user.mutation";
import { toast } from "react-toastify";
import { ROUTES_CONST } from "../../Routes/RouteConstant";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const handleTestNavigation = () => {
    navigate(ROUTES_CONST.HOME);
  };

  const [userSignIn] = useMutation(SIGN_IN_USER, {
    onCompleted: async (res) => {
      // Store the token in localStorage
      await localStorage.setItem("authToken", res.userSignIn.token);

      // Confirm the token was set before navigating
      if (localStorage.getItem("authToken")) {
        toast.success("Login successful!");
      }
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
