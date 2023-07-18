import React from "react";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const DataTable = (props: {
  className: string;
  columnRender: GridColDef[];
  rows: any[];
}) => {
  return (
    <div className={props.className}>
      <DataGrid
        sx={{
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root": {
            border: "none",
            color: "rgb(0 0 0 / .8)",
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif`,
          },
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            color: "rgb(15 23 42 / .7)",
            WebkitFontSmoothing: "auto",
            MozOsxFontSmoothing: "auto",
          },
          ".MuiTablePagination-selectLabel": {
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "rgb(15 23 42 / .7)",
            WebkitFontSmoothing: "auto",
            MozOsxFontSmoothing: "auto",
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
         },
        }}
        rows={props.rows}
        columns={props.columnRender}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
