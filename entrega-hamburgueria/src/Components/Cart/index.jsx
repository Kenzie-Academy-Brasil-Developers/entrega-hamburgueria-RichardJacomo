import { ProductCart } from "../CardCart";
import { DivCart } from "./style";

export const Cart = ({ productsCart, deleteProduct }) => {
  return (
    <DivCart>
      {productsCart.map((product) => (
        <ProductCart
          key={product.id}
          product={product}
          productsCart={productsCart}
          deleteProduct={deleteProduct}
        />
      ))}
    </DivCart>
  );
};
