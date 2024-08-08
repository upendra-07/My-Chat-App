import { useMutation } from "@apollo/client";
import { SIGN_IN_USER } from "../../graphql/mutations/User/user.mutation";
import { toast } from "react-toastify";

const useLogin = () => {
  const [userSignIn] = useMutation(SIGN_IN_USER, {
    onCompleted: (res) => {
      localStorage.setItem("authToken", res.userSignIn.token);
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
