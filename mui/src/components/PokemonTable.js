import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { PokemonDataContext } from '../PokemonDataContext'

const columns = [
    { field: 'num', headerName: 'Pokemon Number', width: 150 },
    { field: 'name', headerName: 'Pokemon Name', width: 250 },
    { field: 'height', headerName: 'Pokemon Height', width: 190 },
    { field: 'weight', headerName: 'Pokemon Weight', width: 190 },
    {
        field: 'type', headerName: 'Types', width: 150,
        valueGetter: (params) =>
            `${params.row.type.map((type) => (type)) || ''} `
    },
]
export default function PokemonTable() {
    const allPokemons = useContext(PokemonDataContext);
    return (
        <div>
            <Box sx={{ height: 900, width: '100%' }}>
                <DataGrid
                    rows={allPokemons}
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
