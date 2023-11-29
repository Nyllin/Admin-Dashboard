import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
const SaleDatePicker = ({ pickerLabel }) => {
  const SalesDatePicker = styled(DatePicker)(({ theme }) => ({
    "&:hover": {
      border: "1px solid theme.palette.primary.main",
      color: theme.palette.primary.main,
      outline: 0,
    },
    "&:focus": {
      border: "1px solid theme.palette.primary.main",
      color: theme.palette.primary.main,
      outline: 0,
    },
  }));

  return (
    <Box sx={{ width: "300px" }}>
      <DemoContainer components={["DatePicker"]}>
        <SalesDatePicker
          label={pickerLabel}
          style={{ color: "#00688b", width: 300 }}
          variant="filled"
        />
      </DemoContainer>
    </Box>
  );
};

export default SaleDatePicker;
