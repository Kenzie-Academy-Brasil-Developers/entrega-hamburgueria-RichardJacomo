import { Button } from "./Button";
import { DivTotal } from "./style";

export const TotalCart = ({ productsCart, setProductsCart }) => {
  const value = productsCart.reduce(
    (previous, actual) => previous + actual.price,
    0
  );

  return (
    <DivTotal>
      <div className="div-total">
        <h3 className="title-total">Total</h3>
        <h3 className="value-total">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
      </div>
      <Button setProductsCart={setProductsCart} />
    </DivTotal>
  );
};
