import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FormSignIn from "../components/FormSigIn";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © legi-setiawan"}
      <Link color="inherit" href="https://github.com/legisetiawan">
        github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignIn = () => {
  return (
    <>
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5"> Please Sign In</Typography>
        <Avatar sx={{ m: 2 }}>
          <AccountCircle fontSize="large" />
        </Avatar>
      </Box>
      <FormSignIn />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default SignIn;
