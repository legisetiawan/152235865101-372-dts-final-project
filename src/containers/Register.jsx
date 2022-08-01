import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegisterForm";
import {Box} from '@mui/material'
import Copyright from "../components/Copyright";

const Register = () => {
  return (
    <>
      <LoginOrRegisterForm loginOrRegister={"register"} />
      <Box>
      <Copyright sx={{ mt: 15, mb: 1 }}/>
      </Box>
    </>
  );
};

export default Register;
