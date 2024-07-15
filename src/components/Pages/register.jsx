import FormRegister from "../Fragments/FormRegister"
import AuthLayout from "../Layouts/AuthLayout"

const RegisterPage = () => {
    return(
        <AuthLayout tittle="register">
            <FormRegister/>
        </AuthLayout>
    )
}

export default RegisterPage