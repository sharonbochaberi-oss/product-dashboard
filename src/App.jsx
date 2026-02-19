import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Headphones", price: 199.99, inStock: false },
    { id: 3, name: "Keyboard", price: 49.99, inStock: true },
    { id: 4, name: "Monitor", price: 299.99, inStock: false },
  ];

  return (
    <>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
    </>
  );
};

export default App;
