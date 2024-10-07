import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLogin } from "../../hook/useLogin";
import { useLogout } from "../../hook/useLogout";
import Button from "../Elements/Button/Button";

const Navbar = () => {
  const [TotalProduct, setTotalProduct] = useState(0);
  const username = useLogin();
  const handleLogout = useLogout();
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalProduct(sum);
  }, [cart]);
  return (
    <div className="shadow-md h-20 flex justify-end items-center">
      {username}
      <Button text="Logout" classname="mx-4 bg-black" onClick={handleLogout} />
      {TotalProduct ? (
        <div className="bg-black text-white px-2 py-1 mr-4 rounded">
          {TotalProduct}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
