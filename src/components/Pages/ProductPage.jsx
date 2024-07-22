import Button from "../Elements/Button/Button";
import CardProduct from "../Fragments/CardProduct";

const DataProduct = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    title: "Corporate Premium Elite",
    price: "Rp. 500.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laudantium, aperiam possimus nihil alias consequuntur dicta aspernatur repellat molestiae similique tempore aut eius.",
  },
  {
    id: 1,
    title: "Business Premium Elite",
    price: "Rp. 1.000.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const email = localStorage.getItem("email");

const Productpage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {DataProduct.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.ImageCard images={item.image}></CardProduct.ImageCard>
            <CardProduct.BodyCard tittle={item.title}>
              {item.description}
            </CardProduct.BodyCard>
            <CardProduct.FooterCard price={item.price}></CardProduct.FooterCard>
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default Productpage;
