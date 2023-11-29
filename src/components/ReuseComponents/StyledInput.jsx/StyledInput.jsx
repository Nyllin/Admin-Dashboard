import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import React from 'react'

const StyledInput = ({label,placeholder,type}) => {
    const SalesTextField = styled(TextField)(({theme})=>({
        color: theme.palette.primary.main,
    "&:hover" : {
      border:`1px solid ${theme.palette.primary.main}`,
    },
   "&:focus"  : {
    border:`1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      outline: 0,
    },
    width: "300px",
    }))


  return (
    <SalesTextField
    id="filled-textarea"
    variant="filled"
    label={label}
    placeholder={placeholder}
    type={type}
    sx={{ width: { xs: 150, sm: 250, md: 300, lg: 300 } }}
  />
  )
}

export default StyledInput