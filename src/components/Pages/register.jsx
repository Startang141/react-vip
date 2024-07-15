import { Link } from "react-router-dom";
import FormRegister from "../Fragments/FormRegister";
import AuthLayout from "../Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout tittle="register">
      <FormRegister />
      <p className="text-slate-500 mt-4 text-sm">
        Already have account?{" "}
        <Link to="/login" className="font-semibold text-blue-700">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
