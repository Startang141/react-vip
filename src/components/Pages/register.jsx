import { Link } from "react-router-dom";
import FormRegister from "../Fragments/FormRegister";
import AuthLayout from "../Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout tittle="register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
