import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";
import AuthLayout from "../Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout tittle="Login">
      <FormLogin />
      <p className="text-slate-500 mt-4 text-sm">
        Don't have account? <Link to="/register" className="font-semibold text-blue-700">Register</Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
