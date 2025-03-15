import os
import requests
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GOOGLE_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

def get_coordinates(place):
    """Fetch latitude & longitude from Google Places API."""
    url = f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": place,
        "inputtype": "textquery",
        "fields": "geometry",
        "key": GOOGLE_API_KEY,
    }
    response = requests.get(url, params=params).json()
    
    if response.get("candidates"):
        location = response["candidates"][0]["geometry"]["location"]
        return location["lat"], location["lng"]
    
    return None, None

def get_route(source, destination):
    """Fetch route using Google Directions API."""
    url = f"https://maps.googleapis.com/maps/api/directions/json"
    params = {
        "origin": source,
        "destination": destination,
        "mode": "driving",
        "key": GOOGLE_API_KEY,
    }
    response = requests.get(url, params=params).json()

    if "routes" in response and len(response["routes"]) > 0:
        steps = response["routes"][0]["legs"][0]["steps"]
        route = [
            {"lat": step["end_location"]["lat"], "lng": step["end_location"]["lng"]}
            for step in steps
        ]
        return {"route": route}
    
    return {"error": "No route found"}

@app.get("/get_reroute")
def get_reroute_api(
    source: str = Query(..., description="Source place name"),
    destination: str = Query(..., description="Destination place name"),
):
    """API to fetch optimized traffic reroute using Google Directions API"""
    source_lat, source_lng = get_coordinates(source)
    dest_lat, dest_lng = get_coordinates(destination)

    if source_lat is None or dest_lat is None:
        return {"error": "Invalid source or destination"}

    return get_route(f"{source_lat},{source_lng}", f"{dest_lat},{dest_lng}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
