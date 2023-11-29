import React from "react";
import Box from "@mui/material/Box";
import { DataGrid} from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
  },
  {
    field: "details",
    headerName: "Details",
    width: 300,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 110,
    editable: true,
  }

];

const rows = [
    { id: 1, name: 'John Doe', status: 'Active', details: 'Lorem ipsum dolor sit amet', date: '2023-01-01' },
    { id: 2, name: 'Jane Smith', status: 'Inactive', details: 'Consectetur adipiscing elit', date: '2023-02-15' },
    { id: 3, name: 'Bob Johnson', status: 'Pending', details: 'Sed do eiusmod tempor incididunt', date: '2023-03-10' },
    { id: 4, name: 'Alice Williams', status: 'Active', details: 'Ut enim ad minim veniam', date: '2023-04-22' },
    { id: 5, name: 'Charlie Brown', status: 'Inactive', details: 'Quis nostrud exercitation ullamco', date: '2023-05-05' },
    { id: 6, name: 'Eva Davis', status: 'Pending', details: 'Duis aute irure dolor in reprehenderit', date: '2023-06-18' },
    { id: 7, name: 'Frank White', status: 'Active', details: 'Excepteur sint occaecat cupidatat non proident', date: '2023-07-03' },
    { id: 8, name: 'Grace Miller', status: 'Inactive', details: 'Sunt in culpa qui officia deserunt', date: '2023-08-14' },
    { id: 9, name: 'Henry Taylor', status: 'Pending', details: 'Nemo enim ipsam voluptatem', date: '2023-09-27' },
    { id: 10, name: 'Ivy Moore', status: 'Active', details: 'At vero eos et accusamus', date: '2023-10-08' },
    { id: 11, name: 'Jack Clark', status: 'Inactive', details: 'Iure reprehenderit qui in ea voluptate', date: '2023-11-19' },
    { id: 12, name: 'Kelly Lewis', status: 'Pending', details: 'Omnis iste natus error sit voluptatem', date: '2023-12-02' },
    { id: 13, name: 'Leo Turner', status: 'Active', details: 'Totam rem aperiam', date: '2024-01-15' },
    { id: 14, name: 'Mia Harris', status: 'Inactive', details: 'Eaque ipsa quae ab illo inventore', date: '2024-02-28' },
    { id: 15, name: 'Noah Scott', status: 'Pending', details: 'Veritatis et quasi architecto beatae vitae', date: '2024-03-12' },
  ];
  

const MailTable = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "#00688b",
          },
          backgroundColor: "#e6f0f3",
          height: 465,
       
        }}
      
      />
    </Box>
  );
};

export default MailTable;
