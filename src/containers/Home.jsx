import React from "react";
import { Typography, Container, Box } from "@mui/material";
import CardNews from "../components/CardNews";
import { useNewsQuery } from "../services/NewsAPI";
import Copyright from "../components/Copyright";

const Home = () => {
  const { data, error, isLoading } = useNewsQuery();
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
        Top TechCrunch News
      </Typography>
      <Container maxWidth="lg">
        {/* Kita gunakan conditional rendering di sini */}
        {error ? (
          <>Ada error</>
        ) : isLoading ? (
          <>Loading data </>
        ) : (
          data.articles.map((newsItem) => (
            <Box key={newsItem.id} sx={{ display: "flex", gridTemplateRows: "repeat(3, 1fr)" }}>
              <CardNews newsItem={newsItem}>1</CardNews>
            </Box>
          ))
        )}
      </Container>
      <Copyright sx={{ mb: 4,mt:8 }} />
    </>
  );
};

export default Home;
