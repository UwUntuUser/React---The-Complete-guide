import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const updatedItems = [...state.items];

    if (existingItemIndex >= 0) {
      const item = state.items[existingItemIndex];
      const updatedItem = {
        ...item,
        quantity: item.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {
      ...state,
      items: updatedItems,
    };
  } else if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );
    const existingItem = state.items[existingItemIndex];
    const existingItems = [...state.items];

    if (existingItem.quantity === 1) {
      existingItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      existingItems[existingItemIndex] = updatedItem;
    }
    return { ...state, items: existingItems };
  }

  return states;
}

export function CartContextProvider({ children }) {
  // initial state of the cart context
  const [cartState, dispatch] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "ADD", item: item });
  }

  function removeIem(id) {
    dispatch({ type: "REMOVE", id });
  }

  const cartContext = {
    items: cartState.items,
    addItem: addItem,
    removeItem: removeIem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
