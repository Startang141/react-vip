import { useLogin } from "../../hook/useLogin";
import { useLogout } from "../../hook/useLogout";
import Button from "../Elements/Button/Button";

const profilePage = () => {
  const username = useLogin();
  const handleLogout = useLogout();
  return (
    <>
      <div className="shadow-md h-20 flex justify-end items-center">
        {username}
        <Button
          text="Logout"
          classname="mx-4 bg-black"
          onClick={handleLogout}
        />
      </div>
      <div className="text-center">
        <h1>Profile</h1>
        <p>{username}</p>
      </div>
    </>
  );
};

export default profilePage;
