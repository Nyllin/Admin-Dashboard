import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const MarketingSocialMediaCardItem = ({icon,count,title}) => {
  const MCardItem = styled(Box)`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  `;
  return (
    <MCardItem>
      {icon}
      <Typography variant="h4">{count}</Typography>
      <Typography variant="subtitle1">{title}</Typography>
    </MCardItem>
  );
};

export default MarketingSocialMediaCardItem;
