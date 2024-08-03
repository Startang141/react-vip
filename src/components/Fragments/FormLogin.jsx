import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/InputForm";

const FormLogin = () => {
  const [loginError, setLoginError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginError(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  // const handleUsernameChange = (event) => {
  //   if (event.target.value.includes("@gmail.com") || event.target.value.includes("@deligy.com")) {
  //     passwordRef.current.focus();
  //   }
  // };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        placeholder="John Doe"
        label="Username"
        ref={usernameRef}
        // onChange={handleEmailChange}
      />
      <InputForm
        name="password"
        type="password"
        placeholder="***"
        label="Password"
        ref={passwordRef}
      />
      <Button classname="bg-blue-700 w-full" text="Login" type="submit" />
      {loginError && <p className="text-red-500 text-sm mt-4">{loginError}</p>}
    </form>
  );
};

export default FormLogin;
