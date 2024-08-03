import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useLogin } from "../../hook/useLogin";
import { detailProducts } from "../../services/product.service";

const detailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const username = useLogin();
  
  useEffect(() => {
    detailProducts(id, (data) => {
      setProduct(data);
    });
  });

  console.log(product);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex font-sans max-w-xl border rounded-md shadow-md">
        <div className="flex-none w-48 relative">
          <img
            src={product.image}
            alt={product.tittle}
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {product.title}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              ${product.price}
            </div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              {product.rating ? (
                <p>
                  Rating : {product.rating.rate}/5 {product.rating.count} reviews
                </p>
              ) : (
                <p>Rating not available</p>
              )}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">{product.description}</div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <Link to="/products"
                className="h-10 px-6 flex items-center font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Back
              </Link>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width={20}
                height={20}
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
};

export default detailProduct;
