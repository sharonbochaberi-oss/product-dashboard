import React, { useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import AddProductForm from "./components/AddProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Headphones", price: 199.99, inStock: false },
    { id: 3, name: "Keyboard", price: 49.99, inStock: true },
    { id: 4, name: "Monitor", price: 299.99, inStock: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (newProduct) => {
    setProducts([
      ...products,
      { ...newProduct, id: Math.max(...products.map((p) => p.id), 0) + 1 },
    ]);
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={filteredProducts} />
    </>
  );
};

export default App;
