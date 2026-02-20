import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Paper,
} from "@mui/material";

const AddProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    inStock: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.price) {
      onAddProduct({
        name: formData.name,
        price: parseFloat(formData.price),
        inStock: formData.inStock,
      });
      setFormData({ name: "", price: "", inStock: false });
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        marginBottom: "30px",
        marginTop: "20px",
      }}
    >
      <h2>Add New Product</h2>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          margin="normal"
          inputProps={{ step: "0.01", min: "0" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
            />
          }
          label="In Stock"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "10px" }}
        >
          Add Product
        </Button>
      </Box>
    </Paper>
  );
};

export default AddProductForm;
