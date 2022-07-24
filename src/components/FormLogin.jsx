import React from "react";
import { Typography, TextField, Box,Button } from "@mui/material";

function FormLogin() {
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
        </Box>
      </Box>
    </>
  );
}

export default FormLogin;
