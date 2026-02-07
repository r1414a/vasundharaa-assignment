import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function ResetMapView({center, zoom}){
    const map = useMap();

    useEffect(() => {
        map.flyTo(center, zoom, {
            animate: true,
            duration: 1
        })
    },[center, zoom])

    return null;
}