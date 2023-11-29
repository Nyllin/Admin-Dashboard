import { Box, Typography } from '@mui/material'
import React from 'react'

const DashboardSmallCardItem = ({name,id,total}) => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-around"}} mt={3}>
    <img
      src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg"
      width={60}
      alt="products"
      style={{borderRadius:"10px"}}
    />
    <Box mt={3}>
      <Typography variant="subtitle2">{name}</Typography>
      <span style={{color:"#c0c0c0"}}>{id}</span>
    </Box>
    <Typography variant="subtitle2" style={{fontWeight:"600"}} mt={3}>{total}</Typography>
  </Box>
  )
}

export default DashboardSmallCardItem