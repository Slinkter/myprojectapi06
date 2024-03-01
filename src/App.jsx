import React from "react";
import { Button } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route exac path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;