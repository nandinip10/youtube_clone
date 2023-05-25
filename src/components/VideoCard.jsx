import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video: { creator, submission, postId } }) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${postId}`}>
        <CardMedia
          image={submission?.thumbnail}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={`/video/${postId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {submission?.title}
          </Typography>
        </Link>
        <Link to={`/video/${postId}`}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {creator?.name}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
