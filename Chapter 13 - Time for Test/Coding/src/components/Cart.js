import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ textAlign: "center", margin: "20px", padding: "20px" }}>
      <h1
        style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Cart
      </h1>
      {cartItems.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}

      <div
        style={{
          width: "1000px",
          margin: "0 auto",
          backgroundColor: "#f0f0f0",
          borderRadius: "7px",
        }}
      >
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
