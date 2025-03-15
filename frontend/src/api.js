import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const getReroute = async (source, destination) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get_reroute`, {
      params: { source, destination },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching reroute:", error);
    return null;
  }
};
