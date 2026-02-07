import { useEffect, useState } from "react";
import geoData from "../data/geoData.json";

export default function useGetSptialTableData(){
    const [data, setData] = useState({projects: []});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData(geoData);
            setLoading(false);
        },1000);
    },[]);

    return {data, loading};
}