import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import CartItemProp from "../types/CartItemProp";

const Home: NextPage = () => {
  const [products, setProducts] = useState<CartItemProp[]>([]);
  const [rows, setRows] = useState<number>(3);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="max-w-5xl mx-auto flex flex-col">
        <div className=" w-auto flex items-center justify-center">
          <small className="text-[15px] font-bold text-blue-400">
            Change columns dynamically
          </small>
          <span
            onClick={() => setRows(2)}
            className={`${
              rows === 2 ? "bg-blue-400 text-white" : "bg-gray-100"
            } hover:shadow-xl shadow-lg m-2 px-3 py-2 rounded-full cursor-pointer `}
          >
            2
          </span>

          <span
            onClick={() => setRows(3)}
            className={`${
              rows === 3 ? "bg-blue-400 text-white" : "bg-gray-100"
            } hover:shadow-xl shadow-lg m-2 px-3 py-2 rounded-full cursor-pointer `}
          >
            3
          </span>
          <span
            onClick={() => setRows(4)}
            className={`${
              rows === 4 ? "bg-blue-400 text-white" : "bg-gray-100"
            } hover:shadow-xl shadow-lg m-2 px-3 py-2 rounded-full cursor-pointer `}
          >
            4
          </span>
        </div>
        <div
          className={`grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-${rows}`}
        >
          {products.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
