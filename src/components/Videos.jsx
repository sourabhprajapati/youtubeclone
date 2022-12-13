import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
const Videos = ({ Videos}) => {
  
  
  return (
    <Stack direction= "row" flexWrap="wrap" justifyContent="start" gap={2}>
       {Videos.map((item,idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
       ))

       }
    </Stack>
  )
}

export default Videos
