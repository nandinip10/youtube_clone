import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import axios from "axios";

const VideoDetail = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <ReactPlayer url="https://cdn.gro.care/755d5af44c54_1683463531570.mp4" controls/>
    </Box>
  );
};

export default VideoDetail;
