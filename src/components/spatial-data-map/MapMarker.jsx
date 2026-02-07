import { useEffect, useRef } from "react"
import { Marker, Popup } from "react-leaflet"
import { blueIcon, redIcon } from "./mapIcons"

export default function MapMarker({ item, selectedID, onMarkerClick }) {
    const markerRef = useRef(null);
    // console.log("markerRef", markerRef);
    const isSelected = item.id === selectedID

    useEffect(() => {
        if (!markerRef.current) return;

          if (isSelected) {
      markerRef.current.openPopup();
    } else {
      markerRef.current.closePopup();
    }

    }, [isSelected])
    return (
        <Marker
            ref={markerRef}
            key={item.id}
            position={[item.latitude, item.longitude]}
            icon={item.id === selectedID ? redIcon : blueIcon}
            eventHandlers={{
                click() {
                    onMarkerClick(item.id)
                }
            }}
        >
            <Popup>
                <strong>{item.projectName}</strong>
                <br />
                Status: {item.status}
            </Popup>
        </Marker>
    )
}