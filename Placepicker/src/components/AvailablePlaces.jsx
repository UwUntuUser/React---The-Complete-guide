import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { useEffect, useState } from "react";
import { sortPlacesByDistance } from "../loc.js";

const baseUrl = "http://localhost:3000";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const response = await fetch(`${baseUrl}/places`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not fetch places.");
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            data.places,
            position.lat,
            position.lng,
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setError({
          message: error.message || "An error occurred while fetching places.",
        });
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isLoading}
      loadingText="Loading available places..."
    />
  );
}
