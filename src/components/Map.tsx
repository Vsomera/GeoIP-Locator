import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export interface Props { 
    line1 : string
    line2: string
 }

 const Map = (props : Props) => {
    return (
        <MapContainer 
            id="map" 
            center={[49.282730,-123.120735]} // array of latitude and longitude of where the map should look
            zoom={4} 
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[49.24966, -123.11934]}>
                <Popup>
                    {props.line1}
                    <br /> 
                    {props.line2}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
