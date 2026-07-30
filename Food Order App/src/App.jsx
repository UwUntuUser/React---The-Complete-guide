import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";
import Header from "./components/Header";
import MealList from "./components/MealList";
import { CartContextProvider } from "./store/CartContext";
import { useRef } from "react";

function App() {
  const modalRef = useRef();
  const checkoutRef = useRef();

  function onModalOpen() {
    modalRef.current.showModal();
  }

  function onCheckoutOpen() {
    modalRef.current.close();
    checkoutRef.current.showModal();
  }
  return (
    <CartContextProvider>
      <Header onCartClick={onModalOpen} />
      <MealList />
      <CartModal ref={modalRef} onCheckoutClick={onCheckoutOpen} />
      <CheckoutModal ref={checkoutRef} />
    </CartContextProvider>
  );
}

export default App;
