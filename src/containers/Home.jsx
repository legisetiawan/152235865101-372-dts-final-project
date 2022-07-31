import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import CardNews from "../components/CardNews";
import { useNewsQuery } from "../services/NewsAPI";

const Home = () => {
  const { data, error, isLoading } = useNewsQuery();
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
        Top headLines News
      </Typography>
      <Container maxWidth="lg">
        {/* Kita gunakan conditional rendering di sini */}
        {error ? (
          <>Ada error</>
        ) : isLoading ? (
          <>Loading data </>
        ) : (
          data.articles.map((newsItem) => (
            <Grid container key={newsItem.id} spacing={5}>
              <Grid xs={4}>
                <CardNews newsItem={newsItem} />
              </Grid>
              <Grid xs={4}>
                <CardNews newsItem={newsItem} />
              </Grid>
              <Grid xs={4}>
                <CardNews newsItem={newsItem} />
              </Grid>
            </Grid>
          ))
        )}
      </Container>
    </>
  );
};

export default Home;
