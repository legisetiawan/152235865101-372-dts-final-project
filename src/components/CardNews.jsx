import React from "react";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";

const CardNews = ({ newsItem }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Typography sx={{ p: 4 }}>{newsItem.title}</Typography>
        <CardMedia component="img" height="140" image={newsItem.urlToImage} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ p: 4 }}>
            {newsItem.content}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardNews;
