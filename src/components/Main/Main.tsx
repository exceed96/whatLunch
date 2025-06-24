// 메인 컴포넌트

import { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import mainImage from "@/assets/image/mainImage.png";
import { useCurrentLocation } from "@/store/useCurrentLocation";
import { useRecommendStore } from "@/store/useRecommendStore";
import { getSuccess, getError } from "@/util/geoLocation";

export default function Main() {
  const orderRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const setCurrentAddress = useCurrentLocation(
    (state) => state.setCurrentAddress
  );
  const setRecommend = useRecommendStore((state) => state.setRecommend);

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
            latitude: useCurrentLocation.getState().latitude,
            longitude: useCurrentLocation.getState().longitude,
            order: orderRef.current?.value,
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
          <form
            className="flex flex-col items-center justify-center gap-5"
            onSubmit={submitButtonHandler}
          >
            <label htmlFor="order" className="text-xl lg:text-2xl">
              끌리는거?
            </label>
            <input
              id="order"
              type="text"
              ref={orderRef}
              maxLength={10}
              className="border-1 border-orange-700 rounded-lg text-center py-1 text-lg lg:text-2xl"
              placeholder="당신의 현재 끌림은?"
            />
            <Button className="text-2xl lg:text-3xl p-7 lg:p-10 bg-orange-700 hover:bg-red-700 w-full cursor-pointer">
              오늘의 점심은?
            </Button>
          </form>
        </div>
      )}
    </main>
  );
}
