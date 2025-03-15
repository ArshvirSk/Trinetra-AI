import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_API_KEY = "AIzaSyAcsbrr5mKHFjjWQ8PhV3twTf87vlglZsg"; // Replace with your actual API key

// Hardcoded Smart Traffic Light Locations in Mumbai
const smartTrafficLights = [
  { id: 1, name: "Traffic Light - Andheri", lat: 19.1197, lng: 72.8464 },
  { id: 2, name: "Traffic Light - Bandra", lat: 19.0553, lng: 72.8311 },
  { id: 3, name: "Traffic Light - Dadar", lat: 19.0183, lng: 72.8426 },
  { id: 4, name: "Traffic Light - CST", lat: 18.9388, lng: 72.8354 },
  { id: 5, name: "Traffic Light - Worli", lat: 19.0165, lng: 72.8151 },
];

const TrafficLightsMap = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 19.076, lng: 72.8777 }); // Mumbai

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Smart Traffic Lights in Mumbai</h2>

      <LoadScript googleMapsApiKey={"AIzaSyAcsbrr5mKHFjjWQ8PhV3twTf87vlglZsg"}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "500px" }}
          center={mapCenter}
          zoom={12}
        >
          {smartTrafficLights.map((light) => (
            <Marker
              key={light.id}
              position={{ lat: light.lat, lng: light.lng }}
              title={light.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default TrafficLightsMap;
