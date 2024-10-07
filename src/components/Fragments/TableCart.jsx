import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Elements/Button/Button";

const TableCart = (props) => {
  const { DataProduct } = props;
  const [TotalPrice, setTotalPrice] = useState(0);
  //how to get data from store redux
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const product = DataProduct.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(sum);
  }, [cart, DataProduct]);

  const viewTotalPrice = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      viewTotalPrice.current.style.display = "table-row";
    } else {
      viewTotalPrice.current.style.display = "none";
    }
  });

  const deletedCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <table className="table-auto border-separate text-left border-spacing-2">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          const product = DataProduct.find((product) => product.id === item.id);
          return (
            <tr key={product.id}>
              <td>{product.title.substring(0, 10)}...</td>
              <td>
                ${" "}
                {product.price.toLocaleString("id-ID", {
                  stlyes: "currency",
                  currency: "USD",
                })}
              </td>
              <td>{item.qty}</td>
              <td>
                ${" "}
                {(product.price * item.qty).toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "USD",
                })}
              </td>
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
        <tr ref={viewTotalPrice} className="font-bold">
          <td colSpan={3}>Total Price</td>
          <td className="col-span-2">
            ${" "}
            {TotalPrice.toLocaleString("id-ID", {
              stlyes: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
