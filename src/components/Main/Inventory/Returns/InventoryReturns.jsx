import { Box, Grid } from '@mui/material'
import React from 'react'
import ReturnsDataGrid from './ReturnsDataGrid'

const InventoryReturns = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={11.5}><ReturnsDataGrid/></Grid>
      </Grid>
    </Box>
  )
}

export default InventoryReturns