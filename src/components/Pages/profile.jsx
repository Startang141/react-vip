import { useLogin } from "../../hook/useLogin";
import { useLogout } from "../../hook/useLogout";
import Button from "../Elements/Button/Button";
import Navbar from "../Layouts/Navbar";

const profilePage = () => {
  useLogin();
  useLogout();
  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1>Profile</h1>
        <p>{username}</p>
      </div>
    </>
  );
};

export default profilePage;
