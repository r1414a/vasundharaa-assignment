import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function ZoomToMarker({ position }) {
    const map = useMap();

    useEffect(() => {
        if (!position) return;
        map.flyTo(position, 13, {
            animate: true,
            duration: 1
        })
    }, [position]);

    return null;
}