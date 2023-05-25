import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import Sidebar from "./Sidebar";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import Pagination from "@mui/material/Pagination";
import ReactPlayer from "react-player";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [videoDetail, setVideoDetail] = useState(null);
  // useEffect(() => {
  //   fetchFromAPI("2").then((data) => setVideos(data));
  // }, []);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    axios
      .get(
        `https://internship-service.onrender.com/videos?page=${
          currentPage - 1
        }&offset=${currentPage - 1}`
      )
      .then((response) => {
        setVideos(response.data.data.posts);
      });
  }, [currentPage]);

  useEffect(() => {
    axios
      .get(
        `https://internship-service.onrender.com/videos?page=${
          currentPage - 1
        }&offset=${currentPage - 1}`
      )
      .then((response) => {
        setVideoDetail(response.data.data.submission);
      });
  }, [videoDetail]);
  console.log(videoDetail);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Home <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Stack mt="100px" alignItems="center" gap={2}>
          <Videos
            videos={videos}
            onClick={<ReactPlayer url={`videoDetail?.mediaUrl`} />}
          />
          <Pagination
            sx={{ backgroundColor: "#625f5f" }}
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={10}
            page={currentPage}
            onChange={paginate}
            size="medium"
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Feed;
