export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: "projectName", headerName: "Project Name", width: 220 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "latitude", headerName: "Latitude", width: 150 },
  { field: "longitude", headerName: "Longitude", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
  {
    field: "lastUpdated", headerName: "Last Updated", width: 150,
    valueGetter: (value, row) => {
      return new Date(value).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
      })
    }
  }
];
