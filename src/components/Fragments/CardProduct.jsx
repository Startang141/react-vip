import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="bg-white shadow-md w-full max-w-sm rounded-lg mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const ImageCard = (props) => {
  const { images = "/images/default-product.jpg" } = props;
  return (
    <a href="">
      <img
        src={images}
        className="w-full h-40 rounded-t-lg object-cover"
        alt=""
      />
    </a>
  );
};

const BodyCard = (props) => {
  const { children, tittle = "Business Premium Elite" } = props;
  return (
    <div className="px-5 py-2 h-full">
      <h5 className="text-3xl tracking">{tittle}</h5>
      <p className="text-neutral-600 my-2">{children}</p>
    </div>
  );
};

const FooterCard = (props) => {
  const { price="Rp. 1.000.000" } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-4">
      <span className="font-semibold text-xl text-neutral-800 tracking-normal">
        {price}
      </span>
      <Button classname="bg-blue-700" text="Buy Now" />
    </div>
  );
};

CardProduct.ImageCard = ImageCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;

export default CardProduct;
