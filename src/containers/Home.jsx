import React from "react";
import { Typography, Container,Grid } from "@mui/material";
import CardNews from "../components/CardNews";
import { useNewsQuery } from "../services/NewsAPI";

const Home = () => {
  const { data, error, isLoading } = useNewsQuery();
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center",mb:5 }}>
        Top headLines News
      </Typography>
      <Container maxWidth="sm">
        {/* Kita gunakan conditional rendering di sini */}
        {error ? <>Ada error</> : isLoading ? <>Loading data </> : data.articles.map((newsItem) => <CardNews key={newsItem.id} newsItem={newsItem} />)}
      </Container>
    </>
  );
};

export default Home;
