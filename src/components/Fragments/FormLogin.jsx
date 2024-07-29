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
  const passwordRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleEmailChange = (event) => {
    if (event.target.value.includes("@gmail.com") || event.target.value.includes("@deligy.com")) {
      passwordRef.current.focus();
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        type="email"
        placeholder="email@gmail.com"
        label="Email"
        ref={emailRef}
        onChange={handleEmailChange}
      />
      <InputForm
        name="password"
        type="password"
        placeholder="***"
        label="Password"
        ref={passwordRef}
      />
      <Button classname="bg-blue-700 w-full" text="Login" type="submit" />
    </form>
  );
};

export default FormLogin;
