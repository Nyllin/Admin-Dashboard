import { Box} from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "task",
    headerName: "Task",
    width: 400,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => (
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <NavLink to="/admin/sales/marketing/todoeditform">
          <StyledButton text="Edit" />
        </NavLink>
        <RedStyledButton text="Cancel" />
      </Box>
    ),
  },
];

const rows = [
  { id: 1, task: "Snow", status: "Completed", age: 35 },
  { id: 2, task: "Lannister", status: "Completed", age: 42 },
  { id: 3, task: "Lannister", status: "Completed", age: 45 },
  { id: 4, task: "Stark", status: "Completed", age: 16 },
  { id: 5, task: "Targaryen", status: "Completed", age: null },
  { id: 6, task: "Melisandre", status: "Completed", age: 150 },
  { id: 7, task: "Clifford", status: "Ongoing", age: 44 },
  { id: 8, task: "Frances", status: "Ongoing", age: 36 },
  { id: 9, task: "Roxie", status: "Ongoing", age: 65 },
];

const MarketingTodoItem = () => {
  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default MarketingTodoItem;
