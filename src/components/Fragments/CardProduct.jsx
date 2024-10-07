import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="bg-white shadow-md w-full max-w-xs rounded-lg mx-2 my-2 flex flex-col justify-between border border-gray-200">
      {children}
    </div>
  );
};

const ImageCard = (props) => {
  const { images, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={images}
        className="w-full h-40 rounded-t-lg object-contain"
        alt=""
      />
    </Link>
  );
};

const BodyCard = (props) => {
  const { children, tittle = "Business Premium Elite" } = props;
  return (
    <div className="px-5 py-2 h-full">
      <h5 className="text-3xl tracking">{tittle.substring(0, 10)}...</h5>
      <p className="text-neutral-600 my-2">{children.substring(0, 100)}...</p>
    </div>
  );
};

const FooterCard = (props) => {
  const { price = 1000000, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-4">
      <span className="font-semibold text-xl text-neutral-800 tracking-normal">
        ${" "}
        {price.toLocaleString("id-ID", { stlyes: "currency", currency: "USD" })}
      </span>
      <Button
        classname="bg-blue-700 cursor-pointer"
        text="Add to Cart"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      />
    </div>
  );
};

CardProduct.ImageCard = ImageCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;

export default CardProduct;
