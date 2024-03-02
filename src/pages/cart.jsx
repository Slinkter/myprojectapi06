import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    return () => {};
  }, []);

  console.log(totalCart);

  return <div>Cart</div>;
};

export default Cart;
