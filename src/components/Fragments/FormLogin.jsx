import Button from "../Elements/Button/Button";
import InputForm from "../Elements/InputForm";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        name="email"
        type="email"
        placeholder="email@gmail.com"
        label="Email"
      />
      <InputForm
        name="password"
        type="password"
        placeholder="***"
        label="Password"
      />
      <Button classname="bg-blue-700 w-full" text="Login" />
    </form>
  );
};

export default FormLogin;