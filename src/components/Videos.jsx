import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ReactPaginate from "react-paginate";
import Pagination from "@mui/material/Pagination";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    // <div></div>
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          <VideoCard video={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
