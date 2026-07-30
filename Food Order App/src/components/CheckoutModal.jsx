import { isValidElement, useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/CurrencyFormatter";
import Button from "../shared/button";
import useHttp from "../hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function CheckoutModal({ ref }) {
  const cartContext = useContext(CartContext);
  const { data, isLoading, error, sendRequest } = useHttp(
    "http://localhost:3000/orders",
    requestConfig,
  );

  const cartTotal = cartContext.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  function handleFormSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          customer: customerData,
          items: cartContext.items,
        },
      }),
    );
  }

  return (
    <dialog ref={ref}>
      <form onSubmit={handleFormSubmit} className="control">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">E-mail address:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" name="street" required />
        <label htmlFor="postal">Postal Code:</label>
        <input type="text" id="postal" name="postal-code" required />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />
        <div className="modal-actions">
          <Button onClick={() => ref.current.close()}>Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </form>
    </dialog>
  );
}
