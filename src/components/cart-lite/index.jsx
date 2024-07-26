import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div className="flex item-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img
          src={cartItem?.image}
          className="h-28 rounded-lg"
          alt={cartItem?.title}
        />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
          <p className="text-white font-extrabold">{cartItem?.price}</p>
        </div>
      </div>
      <div>
        <button
          className="bg-red-900 text-white border-2 rounded-t-lg font-bold p-4"
          onClick={handleRemoveFromCart}
        >
          RemoveFromCart
        </button>
      </div>
    </div>
  );
};

export default CartTile;