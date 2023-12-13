import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { PokemonDataContext } from '../PokemonDataContext'

const columns = [
    { field: 'num', headerName: 'Number', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'height', headerName: 'Height', width: 90 },
    { field: 'weight', headerName: 'Weight', width: 90 },
    {
        field: 'type', headerName: 'Types', width: 150,
        valueGetter: (params) =>
            `${params.row.type.map((type) => (type)) || ''} `
    },
]
export default function PokemonTable() {
    const rows = useContext(PokemonDataContext);
    return (
        <div>
            <Box sx={{ height: 900, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 50,
                            },
                        },
                    }}
                    pageSizeOptions={[10, 20, 50]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    )
}
