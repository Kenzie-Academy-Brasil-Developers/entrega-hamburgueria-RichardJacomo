import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Inter', sans-serif;
}

  :root {
  --color-primary: #27AE60;
  --color-primary-2: #93D7AF;
  --color-secundary: #EB5757;

  --grey-4: #333333;
  --grey-3: #828282;
  --grey-2: #E0E0E0;
  --grey-1: #F5F5F5;

  --negative: #E60000;
  --warning: #FFCD07;
  --sucess: #168821;
  --information: #155BCB;

  --radius-01: 16px;
  --radius-02: 8px;
  --radius-03: 4px;

  --font-size-1: 24px;
  --font-size-2: 20px;
  --font-size-3: 16px;
  --font-size-4: 14px;
  --font-size-5: 10px;
}
button {
  cursor: pointer;
}
@media (max-width: 800px) {
  .container{
    flex-direction: column;
  }
  .aside-cart{
    max-width: 90%;
    margin: 22px;
  }
}
.container {
  display: flex;
  justify-content: center;
}
.section-products {
  width: 1035px;
}
.aside-cart {
  margin-top: 30px;
  background-color: var(--grey-1);
  max-width: 365px;
  width: 100%;
  height: 224px;
  border-radius: var(--radius-02);
  overflow: hidden;
}
.head-cart {
  background-color: var(--color-primary);
  height: 63px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.cart-title {
  color: white;
  font-size: var(--font-size-2);
}
.div-advice {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
.advice-title {
  font-size: var(--font-size-2);
  margin-bottom: 10px;
}
.advice-text {
  color: var(--grey-3);
}
.cart {
  margin-top: 30px;
  max-width: 365px;
  width: 100%;
  height: 580px;
  background-color: var(--grey-1);
  border-radius: var(--radius-02);
  overflow: hidden;
}
.div-content {
  overflow: hidden;
  height: 420px;
}
.div-head-cart {
  background-color: var(--color-primary);
  height: 63px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.div-head-cart > h2 {
  color: white;
  font-size: var(--font-size-2);
}
@media (max-width: 800px) {
  .cart {
    max-width: 90%;
    margin: 22px;
  }
}

`;
export default GlobalStyle;
