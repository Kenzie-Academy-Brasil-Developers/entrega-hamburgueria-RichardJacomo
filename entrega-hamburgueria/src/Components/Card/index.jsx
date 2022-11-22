export const Product = ({ product }) => {
  return (
    <>
      <li>
        <figure className="fig-img">
          <img src={product.img} alt="" />
        </figure>
        <div className="div-description">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <span>R$ {product.price}</span>
          <button>Adicionar</button>
        </div>
      </li>
    </>
  );
};

// li possui img(product.img)
// h2(product.name)
// p (product.category)
// span preço (product.price)
//button Adicionar (recebe evento para adicionar ao carrinho)
