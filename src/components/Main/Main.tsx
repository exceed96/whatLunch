// 메인 컴포넌트

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import mainImage from "@/assets/image/mainImage.png";
import { useLocation } from "@/store/useLocation";
import { useRecommendStore } from "@/store/useRecommendStore";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const setLocation = useLocation((state) => state.setLocation);
  const setCurrentAddress = useLocation((state) => state.setCurrentAddress);
  const setRecommend = useRecommendStore((state) => state.setRecommend);

  const getSuccess = (position: GeolocationPosition) => {
    const lat = String(position.coords.latitude);
    const lng = String(position.coords.longitude);
    setLocation(lat, lng);
  };

  const getError = (error: GeolocationPositionError) => {
    console.log("Loaction Error : ", error);
  };

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(getSuccess, getError, {
        enableHighAccuracy: true,
      });
    } catch (error) {
      console.log("Location Error : ", error);
    }
  }, []);

  const submitButtonHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${import.meta.env.VITE_SERVER_API_CALL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SERVER_API_KEY}`,
        },
        body: JSON.stringify({
          inputs: {
            latitude: useLocation.getState().latitude,
            longitude: useLocation.getState().longitude,
            order: "마라탕",
            persona: "",
          },
          user: "yub",
        }),
      });

      const data = await response.json();
      setRecommend(JSON.parse(data.data.outputs.result).recommendations);
      setCurrentAddress(JSON.parse(data.data.outputs.result).address);
    } catch (error) {
      console.log("Api Error : ", error);
    } finally {
      setIsLoading(false);
      navigate("/result");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center h-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center gap-4 lg:gap-10 w-full">
          <h1 className="text-orange-700 text-7xl sm:text-3xl lg:text-4xl font-bold w-full">
            점심 뭐 먹지?
          </h1>
          <img alt="main icon" src={mainImage} className="w-1/2 h-1/2" />
          {/* <CurrentAddress /> */}
          <Button
            className="text-2xl lg:text-3xl p-7 lg:p-10 bg-orange-700 hover:bg-red-700 w-full"
            onClick={submitButtonHandler}
          >
            오늘의 점심은?
          </Button>
        </div>
      )}
    </main>
  );
}
