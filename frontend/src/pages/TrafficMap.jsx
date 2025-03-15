import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";
import { getReroute } from "../api";

const GOOGLE_API_KEY = "AIzaSyAcsbrr5mKHFjjWQ8PhV3twTf87vlglZsg"; // Replace with actual API key

const TrafficMap = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const handleSearch = async () => {
    const result = await getReroute(source, destination);
    if (result && result.route) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: source,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING, // ✅ Ensure travelMode is defined
        },
        (response, status) => {
          if (status === "OK") {
            setDirectionsResponse(response);
          } else {
            alert("Error fetching directions: " + status);
          }
        }
      );
    } else {
      alert("No valid route found.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleSearch}>Find Route</button>

      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "800px" }}
          center={{ lat: 19.076, lng: 72.8777 }}
          zoom={12}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default TrafficMap;
