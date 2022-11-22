import { Product } from "../Card";
import { Ul } from "./style";

export const ProductList = ({ products }) => {
  return (
    <Ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Ul>
  );
};
