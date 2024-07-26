import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex justify-between items-center  h-20 max-w-6xl mx-auto border-b-2 p-5">
            <Link to={"/"}>
                <div className="ml-5">
                    <Typography
                        variant="h4"
                        color="red"
                        className="cursor-pointer tracking-wide  "
                    >
                        React Redux Shopping Cart
                    </Typography>
                </div>
            </Link>

            <ul className=" flex  justify-center items-center space-x-6 text-gray-800 font-semibold list-none">
                <Link to={"/"}>
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link to={"/cart"}>
                    <li className="cursor-pointer">Cart</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Header;
