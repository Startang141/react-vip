import { useEffect, useRef } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/InputForm";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        type="email"
        placeholder="email@gmail.com"
        label="Email"
        ref={emailRef}
        onKeyDown={handleEmailKeyDown}
      />
      <InputForm
        name="password"
        type="password"
        placeholder="***"
        label="Password"
      />
      <Button classname="bg-blue-700 w-full" text="Login" type="submit" />
    </form>
  );
};

export default FormLogin;
