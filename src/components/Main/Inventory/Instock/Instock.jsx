import { Grid } from '@mui/material'
import React from 'react'
import InventoryAnalysisDataGrid from './InventoryAnalysisDataGrid'

const Instock = () => {
  return (
    <Grid container spacing={2}>
        <Grid item md={11.5}>
            <InventoryAnalysisDataGrid/>
        </Grid>
    </Grid>
  )
}

export default Instock