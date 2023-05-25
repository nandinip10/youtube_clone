import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
