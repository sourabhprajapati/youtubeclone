import React from 'react'
import { useState,useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {
  const[vidoes,setvidoes]=useState([]);
  const { searchTerm } = useParams();
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setvidoes(data.items))

  },[searchTerm]);
  return (
  <Box p={2} sx={{ overflowY: 'auto',height:'90vh',flex:2}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color:'white'}}>
      Search Reasults for: <span style={{ color: '#F31503'}}>{searchTerm}</span>videos
    </Typography>
     <Videos Videos={vidoes}/>
  </Box>
  )
}

export default  SearchFeed
