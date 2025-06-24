import { useCurrentLocation } from "@/store/useCurrentLocation";

export const getSuccess = (position: GeolocationPosition) => {
  const lat = String(position.coords.latitude);
  const lng = String(position.coords.longitude);
  useCurrentLocation.getState().setLocation(lat, lng);
};

export const getError = (error: GeolocationPositionError) => {
  console.log("Location Error : ", error);
};
