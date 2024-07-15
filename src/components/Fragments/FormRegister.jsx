import Button from "../Elements/Button/Button";
import InputForm from "../Elements/InputForm";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="fullname"
        type="text"
        placeholder="wawan kempit"
        label="Fullname"
      />
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
      <Button classname="bg-blue-700 w-full" text="Register" />
    </form>
  );
};

export default FormRegister;