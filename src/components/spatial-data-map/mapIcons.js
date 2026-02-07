import L from "leaflet"
import blueMarker from "../../assets/marker-icon-blue.png"
import redMarker from "../../assets/marker-icon-red.png"
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const baseIconOptions = {
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}

export const blueIcon = new L.Icon({
    ...baseIconOptions,
    iconUrl: blueMarker,
});

export const redIcon = new L.Icon({
    ...baseIconOptions,
    iconUrl: redMarker,
});