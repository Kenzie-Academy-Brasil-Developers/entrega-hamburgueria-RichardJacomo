import "./App.css";
import GlobalStyle from "./styles/global";
import { useState, useEffect } from "react";
import { ProductList } from "./Components/ProductList";
import { Header } from "./Components/Header";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  function showProducts() {}
  function handleClick(id) {}

  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="container">
        <section className="section-products">
          <ProductList products={products} />
        </section>
        <aside className="aside-cart">
          <div className="head-cart">
            <h2 className="cart-title">Carrinho de compras</h2>
          </div>
          <div className="div-advice">
            <h2 className="advice-title">Sua sacola está vazia</h2>
            <p className="advice-text">Adicione itens</p>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
