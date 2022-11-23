import logo from "../../Assets/logo.png";
import { InputSearch } from "../ProductList/InputSearch";
import { Nav } from "./style";

export const Header = ({ showProducts }) => {
  return (
    <Nav>
      <div className="nav">
        <img className="img-header" src={logo} alt="" />
        <InputSearch showProducts={showProducts} />
      </div>
    </Nav>
  );
};
