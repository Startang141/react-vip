import FormLogin from "../Fragments/FormLogin"
import AuthLayout from "../Layouts/AuthLayout"

const LoginPage = () => {
    return(
        <AuthLayout tittle="Login">
            <FormLogin/>
        </AuthLayout>
    )
}

export default LoginPage