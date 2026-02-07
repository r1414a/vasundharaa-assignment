import { useEffect, useMemo, useState } from "react";
import DataOnMap from "../components/spatial-data-map/DataOnMap";
import SpatialDataTable from "../components/spatial-data-table/SpatialDataTable";
import useGetSptialTableData from "../hooks/useGetSptialTableData";
import { useGridApiRef } from "@mui/x-data-grid";
import AllFilters from "../components/spatial-data-table/AllFilters";

export default function Dashboard() {
    const apiRef = useGridApiRef();
    const { data, loading } = useGetSptialTableData();
    const [selectedID, setSelectedID] = useState(null);
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10
    })
    const [status, setStatus] = useState("ALL")
    const [category, setCategory] = useState("ANY");
    const [search, setSearch] = useState("");
    // let cat = new Set();

    // console.log(data.projects.map((item) => item.status === 'ALL'));
    // data.projects.map((item) => cat.add(item.category));
    // console.log(cat);

    const filteredData = useMemo(() => {
  return data.projects.filter((project) => {
    const statusMatch =
      status === "ALL" || project.status === status;

    const categoryMatch =
      category === "ANY" || project.category === category;

     const searchMatch =
      project.projectName.toLowerCase().includes(search.toLowerCase()) ||
      project.status.toLowerCase().includes(search.toLowerCase()) ||
      project.category.toLowerCase().includes(search.toLowerCase());

    return statusMatch && categoryMatch && searchMatch;
  });
}, [data.projects, status, category, search]);


    function handleSelect(id) {
        setSelectedID(id === selectedID ? null : id)

        const index = filteredData.findIndex((row) => row.id === id);
        if (index === -1) return;

        const newPage = Math.floor(index / paginationModel.pageSize);

        setPaginationModel((prev) => ({ ...prev, page: newPage }))

        requestAnimationFrame(() => {
            apiRef.current.scrollToIndexes({
                rowIndex: index
            })
        })
    }

    console.log(paginationModel, selectedID);
    return (
        <section className="p-10">
            <h2 className="text-center text-3xl font-bold">Geo Data Dashboard</h2>
            <div className="mt-8 flex gap-4">
                <AllFilters status={status} setStatus={setStatus} category={category} setCategory={setCategory} search={search} setSearch={setSearch}/>
            </div>
            <div className="flex mt-2">
                <SpatialDataTable
                    rows={filteredData}
                    loading={loading}
                    selectedID={selectedID}
                    onRowSelect={(id) => handleSelect(id)}
                    paginationModel={paginationModel}
                    onPaginationChange={setPaginationModel}
                    apiRef={apiRef}
                />
                <DataOnMap
                    data={filteredData}
                    selectedID={selectedID}
                    onMarkerClick={(id) => handleSelect(id)}
                />
            </div>

        </section>
    )
}