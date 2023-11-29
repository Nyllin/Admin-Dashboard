import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
const columns = [
    { field: 'saleName', headerName: 'Sale Name', width: 150 },
    {
        field: 'saleTotal',
        headerName: 'Sale Total',
        width: 150,
        editable: true,
    },
    {
        field: 'change',
        headerName: 'Change',
        width: 150,
        editable: true,
        renderCell: ({ data }) => (
            <Box
                sx={{ width: "100%" }}
            >
                <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={80} />
            </Box>
        ),
    },

];

const rows = [
    { id: 1, saleName: '11.11 Sale', saleTotal: 35 },
    { id: 2, saleName: 'Tazaungdine', saleTotal: 42 },
    { id: 3, saleName: 'Christmas', saleTotal: 45 },
    { id: 4, saleName: 'Stark', saleTotal: 16 },
    { id: 5, saleName: 'Targaryen', saleTotal: null },
    { id: 6, saleName: 'Melisandre', saleTotal: 150 },
    { id: 7, saleName: 'Clifford', saleTotal: 44 },
    { id: 8, saleName: 'Frances', saleTotal: 36 },
    { id: 9, saleName: 'Roxie', saleTotal: 65 },
];


const SalesDataGrid = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
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
                sx={{
                    "& .MuiDataGrid-cell:hover": {
                        color: "#00688b",
                    },
                    backgroundColor: "#e6f0f3"

                }}
            />
        </Box>
    )
}

export default SalesDataGrid