import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";
import { Typography } from "@material-tailwind/react";

const ProductTile = ({ product }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    function handleAddToCart() {
        dispatch(addToCart(product));
    }
    function handleRemoveFromCart() {
        dispatch(removeFromCart(product?.id));
    }

    return (
        <div>
            <div className=" flex flex-col items-center justify-around  border-2 shadow-lg  h-[360px] mt-10 rounded-xl w-96 lg:w-60">
                <div className="h-[180px] mt-2">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="object-cover  h-full p-3 "
                    />
                </div>
                <div>
                    <Typography variant="h3" className="w-72 truncate  ">
                        {product?.title}
                    </Typography>
                </div>
                <div className=" w-full flex justify-center items-center">
                    <button
                        onClick={
                            cart.some((item) => item.id === product?.id)
                                ? handleRemoveFromCart
                                : handleAddToCart
                        }
                        className="bg-red-900 text-white border-2 rounded-lg font-bold  w-2/3  p-3 mb-2"
                    >
                        {cart.some((item) => item.id === product?.id)
                            ? "Remove from cart"
                            : "Add to Card"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductTile;
