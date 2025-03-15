from sklearn.ensemble import RandomForestRegressor

class TrafficPredictionModel:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100)

    def train_model(self):
        """Train a simple model with synthetic historical data."""
        X_train = [[8, 1, 0.3], [9, 1, 0.5], [17, 5, 0.7]]  # (hour, day, congestion_level)
        y_train = [6, 8, 10]  # Predicted travel time
        self.model.fit(X_train, y_train)
        return self.model
