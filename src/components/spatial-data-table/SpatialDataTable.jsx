import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./table-columns";

export default function SpatialDataTable({ apiRef, rows = [], loading, paginationModel, onPaginationChange, selectedID, onRowSelect }) {
    return (
        <div className="h-162.5 basis-1/2">
            <DataGrid
                apiRef={apiRef}
                rows={rows}
                columns={columns}
                loading={loading}
                pageSizeOptions={[10, 20, 50]}
                getRowId={(row) => row.id}
                getRowClassName={(row) => row.id === selectedID ? "selected-row" : ""}
                onRowClick={({ id }) => onRowSelect(id)}
                paginationModel={paginationModel}
                onPaginationModelChange={onPaginationChange}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                disableRowSelectionOnClick
            />
        </div>
    )
}