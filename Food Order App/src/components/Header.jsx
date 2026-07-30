import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "../shared/button";
import CartContext from "../store/CartContext";

export default function Header({ onCartClick }) {
  const cartContext = useContext(CartContext);
  const cartQuantity = cartContext.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button onClick={onCartClick} textOnly={true}>
          Cart ({cartQuantity})
        </Button>
      </nav>
    </header>
  );
}
