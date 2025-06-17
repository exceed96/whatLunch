// 메인 컴포넌트

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Loading from "./Loading";
import CurrentAddress from "./CurrentAddress";
import { useNavigate } from "react-router-dom";
import mainImage from "@/assets/image/mainImage.png";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const navigate = useNavigate();

  const getSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log(lat, lng);
  };

  const getError = (error: GeolocationPositionError) => {
    console.log("Loaction Error : ", error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
    // 위도,경도 api 콜 -> 주소 응답 -> CurrentAddress 컴포넌트에 props 전달
  }, []);

  const submitButtonHandler = async () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/result");
    }, 3000);
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
          <CurrentAddress />
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
