import React from "react";
import Copyright from "../components/Copyright";
import {Box} from '@mui/material'
import LoginOrRegisterForm from "../components/LoginOrRegisterForm";

const Login = () => {
  return (
    <>
      <LoginOrRegisterForm loginOrRegister={"login"} />
      <Box>
      <Copyright sx={{ mt: 15, mb: 1 }}/>
      </Box>
    </>
  );
};

export default Login;
