import { currencyFormatter } from "../utils/CurrencyFormatter";
import { useContext } from "react";
import Button from "../shared/button";
import CartContext from "../store/CartContext";

export default function MealCard({ item }) {
  const cartContext = useContext(CartContext);

  function handleAddItemToCart() {
    cartContext.addItem(item);
  }

  return (
    <article>
      <img src={`http://localhost:3000/${item.image}`} alt="Meal" />
      <h3>{item.name}</h3>
      <p className="meal-item-price">
        Price: {currencyFormatter.format(item.price)}
      </p>
      <p className="meal-item-description">{item.description}</p>
      <p className="meal-item-actions">
        <Button textOnly onClick={handleAddItemToCart}>
          Add to Cart
        </Button>
      </p>
    </article>
  );
}
