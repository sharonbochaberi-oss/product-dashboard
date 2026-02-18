import React from "react";
import ProductCard from "./ProductCard";
import { Grid, Typography } from "@mui/material";

const ProductList = ({ products }) => {
  const inStockProducts = products.filter((product) => product.inStock);

  return (
    <>
      {inStockProducts.length === 0 ? (
        <Typography variant="h6" color="error">
          No products in stock.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductList;
