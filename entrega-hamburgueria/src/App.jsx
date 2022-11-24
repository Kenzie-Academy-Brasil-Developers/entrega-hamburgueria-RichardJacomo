import GlobalStyle from "./styles/global";
import { useState, useEffect } from "react";
import { ProductList } from "./Components/ProductList";
import { Header } from "./Components/Header";
import { api } from "./services/api";
import { Cart } from "./Components/Cart";
import { TotalCart } from "./Components/TotalCart/TotalCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);

  function showProducts(event) {
    setProductsFiltered(
      products.filter((e) => e.name.toLowerCase().includes(event.toLowerCase()))
    );
  }

  function handleClick(id) {
    const product = productsCart.find((e) => e.id === id);
    if (product) {
      toast.warning("Apenas uma unidade de cada!");
    } else {
      const newProduct = products.find((e) => e.id === id);
      setProductsCart([...productsCart, newProduct]);
    }
  }

  function deleteProduct(item) {
    setProductsCart(productsCart.filter((e) => e !== item));
  }

  return (
    <>
      <GlobalStyle />
      <Header showProducts={showProducts} />
      <main className="container">
        <section className="section-products">
          <ToastContainer />
          <ProductList
            products={productsFiltered.length > 0 ? productsFiltered : products}
            handleClick={handleClick}
            productsCart={productsCart}
          />
        </section>
        {productsCart.length === 0 ? (
          <aside className="aside-cart">
            <div className="head-cart">
              <h2 className="cart-title">Carrinho de compras</h2>
            </div>
            <div className="div-advice">
              <h2 className="advice-title">Sua sacola está vazia</h2>
              <p className="advice-text">Adicione itens</p>
            </div>
          </aside>
        ) : (
          <aside className="cart">
            <div className="div-content">
              <div className="div-head-cart">
                <h2>Carrinho de compras</h2>
              </div>
              <Cart productsCart={productsCart} deleteProduct={deleteProduct} />
            </div>
            <TotalCart
              productsCart={productsCart}
              setProductsCart={setProductsCart}
            />
          </aside>
        )}
      </main>
    </>
  );
}

export default App;
