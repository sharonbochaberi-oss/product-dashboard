import React from "react";
import styles from "../styles/ProductCard.module.css";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const ProductCard = ({ product }) => {
  const { name, price, inStock } = product;

  return (
    <Card
      className={`${styles.card} ${!inStock ? styles.outOfStock : ""}`}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">${price.toFixed(2)}</Typography>
        {inStock ? (
          <Chip label="In Stock" color="success" size="small" />
        ) : (
          <Chip label="Out of Stock" color="error" size="small" />
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;

