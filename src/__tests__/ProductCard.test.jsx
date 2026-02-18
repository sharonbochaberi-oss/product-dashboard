import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

test("renders product details correctly", () => {
  const product = { id: 1, name: "Laptop", price: 999.99, inStock: true };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("$999.99")).toBeInTheDocument();
  expect(screen.getByText("In Stock")).toBeInTheDocument();
});

test("shows Out of Stock for unavailable products", () => {
  const product = { id: 2, name: "Headphones", price: 199.99, inStock: false };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Headphones")).toBeInTheDocument();
  expect(screen.getByText("Out of Stock")).toBeInTheDocument();
});
