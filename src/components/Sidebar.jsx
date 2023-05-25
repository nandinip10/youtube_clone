import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants.js";

const selectedCategory = "Home";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "8080804d",
            color: "white",
          }}
        >
          <span style={{ marginRight: "15px" }}>{category.icon}</span>
          <span style={{opacity:category.name===selectedCategory?'1':'0.8'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
