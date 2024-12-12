"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Videocart({ video }) {
  return (
    <Card
      className="vid-cart"
      sx={{
       
        maxWidth: 345,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{
          height: 180, // Consistent height for thumbnails
          width: "100%",
        }}
        image={video.thumbnail || "/placeholder-image.jpg"}
        title={video.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            width:"200px",
            textAlign: "center",
            whiteSpace: "nowrap", // Prevents text wrapping
            overflow: "hidden", // Ensures overflow is hidden
            textOverflow: "ellipsis", // Adds ellipsis for truncated text
          }}
        >
          {video.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => window.open(video.url, "_blank")}>
          Watch
        </Button>
      </CardActions>
    </Card>
  );
}
