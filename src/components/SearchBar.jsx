import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      label="Search Products"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search by product name..."
      style={{ marginBottom: "20px", marginTop: "10px" }}
    />
  );
};

export default SearchBar;
