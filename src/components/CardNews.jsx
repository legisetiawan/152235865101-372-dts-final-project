import React from "react";
import { Card, CardMedia, CardHeader, Typography, CardContent } from "@mui/material";

const CardNews = ({ newsItem }) => {
  return (
    <>
      <Card sx={{ p: 3, mb: 3,textAlign:"justify"}}>
        <CardHeader sx={{p:0,pb:2}} title={newsItem.title} />
        <Typography>{newsItem.description}</Typography>
        <CardMedia component="img" height={250} width={250} alt="news" image={newsItem.urlToImage} />
        <CardContent sx={{p:0}}>
          <Typography variant="body2" color="text.secondary">
            {newsItem.content}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardNews;
