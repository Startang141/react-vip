import CardProduct from "../Fragments/CardProduct";

const Productpage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CardProduct>
        <CardProduct.ImageCard images="/images/product-1.jpg"></CardProduct.ImageCard>
        <CardProduct.BodyCard tittle="Corporate Premium Elite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laudantium, aperiam possimus nihil alias consequuntur dicta aspernatur
          repellat molestiae similique tempore aut eius.
        </CardProduct.BodyCard>
        <CardProduct.FooterCard price="Rp. 500.000"></CardProduct.FooterCard>
      </CardProduct>
      <CardProduct>
        <CardProduct.ImageCard></CardProduct.ImageCard>
        <CardProduct.BodyCard>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laudantium, aperiam possimus nihil alias consequuntur dicta aspernatur
          repellat molestiae similique tempore aut eius.
        </CardProduct.BodyCard>
        <CardProduct.FooterCard></CardProduct.FooterCard>
      </CardProduct>
    </div>
  );
};

export default Productpage;
