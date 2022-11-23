import { LiCart } from "./style";

export const ProductCart = ({ product, deleteProduct, productsCart }) => {
  return (
    <>
      <LiCart>
        <figure>
          <img className="img-card" src={product.img} alt="" />
        </figure>
        <div className="div-global-card">
          <div className="div-description-card">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
          </div>
          <div className="div-button-card">
            <button onClick={(e) => deleteProduct(product)}>Remover</button>
          </div>
        </div>
      </LiCart>
    </>
  );
};
