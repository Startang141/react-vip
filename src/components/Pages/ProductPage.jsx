import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useLogin } from "../../hook/useLogin";
import { useLogout } from "../../hook/useLogout";
import { getUsername } from "../../services/auth.service";
import { getProduct } from "../../services/product.service";
import Button from "../Elements/Button/Button";
import CardProduct from "../Fragments/CardProduct";
import TableCart from "../Fragments/TableCart";
import Navbar from "../Layouts/Navbar";

const Productpage = () => {
  const [DataProduct, setDataProduct] = useState([]);
  useLogin();
  useLogout();

  useEffect(() => {
    getProduct((data) => {
      setDataProduct(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <div className="w-4/6 flex flex-wrap">
          {DataProduct.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.ImageCard
                images={product.image}
                id={product.id}
              ></CardProduct.ImageCard>
              <CardProduct.BodyCard tittle={product.title}>
                {product.description}
              </CardProduct.BodyCard>
              <CardProduct.FooterCard
                price={product.price}
                id={product.id}
              ></CardProduct.FooterCard>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h2 className="text-3xl font-semibold text-blue-600">Cart</h2>
          <TableCart DataProduct={DataProduct}></TableCart>
        </div>
      </div>
    </>
  );
};

export default Productpage;
