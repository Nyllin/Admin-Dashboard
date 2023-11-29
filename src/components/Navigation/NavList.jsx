import React from 'react'
import {ListSubheader,List} from "@mui/material";
const NavList = ({children,subnav}) => {
  return (
    <List
    sx={{ width: "100%", bgcolor: "transparent", marginTop: "10px" }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ bgcolor: "transparent" }}
      >
        {subnav}
      </ListSubheader>
    }
  >
   {children}
  </List>
  )
}

export default NavList