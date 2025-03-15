import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchTrafficData = async () => {
  try {
    const response = await axios.get(`${API_URL}/trafficData`);
    return response.data;
  } catch (error) {
    console.error("Error fetching traffic data:", error);
    return null;
  }
};
