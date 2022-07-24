import React from 'react'
import {Typography,Box,Avatar} from '@mui/material'
import FormRegister from '../components/FormRegister';
import { AccountCircle } from "@mui/icons-material";

function Register() {
  return (
    <>
       <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h5" >
        {" "}
        Please Sign UP
      </Typography>
      <Avatar sx={{m:2}} >
        <AccountCircle fontSize="large" />
      </Avatar>
      </Box>
      <FormRegister/>
    </>
  );
}

export default Register