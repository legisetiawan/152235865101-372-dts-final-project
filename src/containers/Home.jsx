import React from 'react'
import {Typography} from '@mui/material'
import CardNews from '../components/CardNews';

const Home = () => {
  return (
    <>
    <Typography variant='body1' sx={{alingn:"center"}}>My News</Typography>
    <CardNews/>
    </>
  );
}

export default Home