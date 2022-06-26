import Image from "next/image";
import CartItemProp from "../types/CartItemProp";
interface ProductProps {
  product: CartItemProp;
}
// utility function
const truncateDescription = (str: string, lenStr: number): string => {
  return str?.length > lenStr ? str.slice(0, lenStr - 1) + "..." : str;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex  shadow-lg hover:shadow-xl hover:shadow-gray-400 rounded-lg rounded-md  flex-col bg-whie px-4 py-3 m-2">
      <Image layout="responsive" width={1} height={1} src={product.image} />
      <span className="text-sm text-gray-600 font-semibold my-2">
        {truncateDescription(product.title, 40)}
      </span>
      <div className="flex mt-auto flex-row items-center justify-between mx-2">
        <p>ℹ️</p>
        <button className="text-white bg-black text-xs py-1 font-bold px-3 rounded-sm font-mono">
          Add{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
