import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";
import AuthLayout from "../Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout tittle="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
