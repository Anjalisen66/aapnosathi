import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom location icon
const locationIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/64/684/684908.png",
  iconSize: [35, 35],
});

const locations = [
  { name: "Mehrangarh Fort", lat: 26.2981, lng: 73.0185 },
  { name: "Jaswant Thada", lat: 26.3003, lng: 73.0265 },
  { name: "Umaid Bhawan Palace", lat: 26.2689, lng: 73.0379 },
  { name: "Clock Tower Market", lat: 26.2978, lng: 73.0204 },
];

const JodhpurMap = () => {
  return (
    <MapContainer center={[26.2968, 73.0351]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((place, index) => (
        <Marker key={index} position={[place.lat, place.lng]} icon={locationIcon}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default JodhpurMap;
