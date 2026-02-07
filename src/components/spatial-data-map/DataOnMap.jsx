import { MapContainer, TileLayer } from "react-leaflet";
import ZoomToMarker from "./ZoomToMarker";
import ResetMapView from "./ResetMapView";
import MapMarker from "./MapMarker";

const DEFAULT_CENTER = [18.5072, 78.0369];
const DEFAULT_ZOOM = 6;

export default function DataOnMap({ data = [], onMarkerClick, selectedID }) {
    const selectedData = data.find((item) => item.id === selectedID)
    console.log("selectedData",selectedData, "selectedID", selectedID);

    return (
        <div className="basis-1/2">
            <MapContainer center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} className="h-full w-full rounded-lg">
                <TileLayer
                    attribution="© OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    selectedData ?

                        <ZoomToMarker position={[
                            selectedData.latitude,
                            selectedData.longitude
                        ]} />
                        :
                        <ResetMapView center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} />

                }

                {
                    data.map((item) => (
                        <MapMarker
                            key={item.id}
                            item={item}
                            selectedID={selectedID}
                            onMarkerClick={onMarkerClick}
                        />
                    ))
                }
            </MapContainer>
        </div>
    )
}