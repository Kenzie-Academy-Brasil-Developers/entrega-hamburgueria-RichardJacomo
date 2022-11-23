export const Product = ({ product, handleClick }) => {
  return (
    <>
      <li>
        <figure className="fig-img">
          <img src={product.img} alt="" />
        </figure>
        <div className="div-description">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <span>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button onClick={() => handleClick(product.id)}>Adicionar</button>
        </div>
      </li>
    </>
  );
};
