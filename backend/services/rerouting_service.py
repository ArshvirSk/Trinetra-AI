import osmnx as ox
import networkx as nx
import numpy as np
from models.traffic_model import TrafficPredictionModel

class TrafficReRoutingAI:
    def __init__(self, city):
        """Initialize with the city's road network."""
        self.city = city
        self.graph = ox.graph_from_place(city, network_type="drive")
        self.model = TrafficPredictionModel().train_model()

    def get_real_time_congestion(self):
        """Simulate real-time congestion (replace with an API in production)."""
        congestion_data = {edge: np.random.uniform(0.1, 1.0) for edge in self.graph.edges}
        return congestion_data

    def find_re_routes(self):
        """Detect congestions and suggest alternative routes."""
        congestion_data = self.get_real_time_congestion()
        reroutes = {}

        for edge, congestion in congestion_data.items():
            if congestion > 0.6:  # Threshold for congestion
                src, dest = edge[:2]
                try:
                    reroute = nx.shortest_path(self.graph, source=src, target=dest, weight="length")
                    reroutes[str(edge)] = reroute
                except nx.NetworkXNoPath:
                    continue

        return reroutes
