import { useState } from "react";
import Button from "../Elements/Button/Button";
import CardProduct from "../Fragments/CardProduct";

const DataProduct = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    title: "Corporate Premium Elite",
    price: 500000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laudantium, aperiam possimus nihil alias consequuntur dicta aspernatur repellat molestiae similique tempore aut eius.",
  },
  {
    id: 2,
    title: "Business Premium Elite",
    image: "/images/product-1.jpg",
    price: 1000000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const email = localStorage.getItem("email");

const Productpage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  const deletedCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="shadow-md h-20 flex justify-end items-center">
        {email}
        <Button
          text="Logout"
          classname="mx-4 bg-black"
          onClick={handleLogout}
        />
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-4/6 flex">
          {DataProduct.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.ImageCard
                images={product.image}
              ></CardProduct.ImageCard>
              <CardProduct.BodyCard tittle={product.title}>
                {product.description}
              </CardProduct.BodyCard>
              <CardProduct.FooterCard
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              ></CardProduct.FooterCard>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h2 className="text-3xl font-semibold text-blue-600">Cart</h2>
          <ul>
            {cart.map((item) => {
              return <li>{item.id}</li>;
            })}
          </ul>
          <table className="table-auto border-separate text-left border-spacing-2">
            <thead>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = DataProduct.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{product.price * item.qty}</td>
                    <td>
                      <Button
                        classname="bg-red-600"
                        text="Delete"
                        onClick={() => deletedCart(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Productpage;
