import { ButtonCart } from "./style";

export const Button = ({ setProductsCart }) => {
  return (
    <>
      <ButtonCart onClick={() => setProductsCart([])}>Remover todos</ButtonCart>
    </>
  );
};
