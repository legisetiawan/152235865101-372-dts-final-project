import React from "react";
import { Typography, Avatar,Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FormSignIn from "../components/FormSigIn";

const SignIn = () => {
  return (
    <>
    <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h5" >
        {" "}
        Please Sign In
      </Typography>
      <Avatar sx={{m:2}} >
        <AccountCircle fontSize="large" />
      </Avatar>
      </Box>
      <FormSignIn />
    </>
  );
}

export default SignIn;
