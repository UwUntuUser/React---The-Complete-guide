import Button from "../shared/button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/CurrencyFormatter";

export default function CartModal({ ref, onCheckoutClick }) {
  const cartContext = useContext(CartContext);
  const cartTotal = cartContext.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <dialog className="cart" ref={ref}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <li className="cart-item" key={item.id}>
            <p>
              {item.name} - {item.quantity} x{" "}
              {currencyFormatter.format(item.price)}
            </p>
            <div className="cart-item-actions">
              <Button textOnly onClick={() => cartContext.removeItem(item.id)}>
                -
              </Button>
              <p>{item.quantity}</p>
              <Button textOnly onClick={() => cartContext.addItem(item)}>
                +
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <div className="modal-actions">
        <Button onClick={() => ref.current.close()}>Close</Button>
        <Button onClick={onCheckoutClick}>Go To Checkout</Button>
      </div>
    </dialog>
  );
}
