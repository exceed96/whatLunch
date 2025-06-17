// 현재 위치 컴포넌트

import { useState } from "react";
import CurrentLocationIcon from "@/assets/icon/currentLocationIcon.svg";

export default function CurrentAddress() {
  const [isError, setIsError] = useState(false);

  return (
    <section className="flex flex-col gap-2 px-2 rounded-lg items-center border-2 border-black py-1 w-full">
      <div className="flex items-center gap-2">
        <img src={CurrentLocationIcon} alt="current location icon" />
        <h3 className="text-lg lg:text-2xl font-bold">현재 위치</h3>
      </div>
      <p className="text-xl lg:text-2xl">
        {isError
          ? "위치 정보를 불러올수 없습니다."
          : "서울특별시 강남구 역삼동"}
      </p>
    </section>
  );
}
