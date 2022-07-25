import React from 'react'
import {Typography,Box,Avatar} from '@mui/material'
import FormSignUp from '../components/FormSignUp';
import { AccountCircle } from "@mui/icons-material";

const SignUp = () => {
  return (
    <>
       <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h5" >
        {" "}
        Please Sign UP
      </Typography>
      <Avatar sx={{m:2}} >
        <AccountCircle fontSize="large"/>
      </Avatar>
      </Box>
      <FormSignUp/>
    </>
  );
}

export default SignUp