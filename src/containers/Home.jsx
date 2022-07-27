import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";
import CardNews from "../components/CardNews";
import { useNewsQuery } from "../services/NewsAPI";

const Home = () => {
  const { data, error, isLoading } = useNewsQuery();
  return (
    <>
      <Typography variant="body1" sx={{ alingn: "center" }}>
        My News
      </Typography>
      <Container maxWidth="sm">
        {/* Kita gunakan conditional rendering di sini */}
        {error ? <>Ada error</> : isLoading ? <>Loading data </> : data.articles.map((newsItem) => <CardNews key={newsItem.id} newsItem={newsItem} />)}
      </Container>
    </>
  );
};

export default Home;
