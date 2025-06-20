// 추천 결과 컴포넌트

import { useState } from "react";
import PriceList from "./PriceList";
import backIcon from "@/assets/icon/backIcon.svg";
import CurrentAddress from "../CurrentAddress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useRecommendStore } from "@/store/useRecommendStore";
import { useEffect } from "react";

export default function RecommendResult() {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    if (!useRecommendStore.getState().recommend) navigate("/");
  }, []);

  return (
    <div className="flex flex-col gap-10 relative">
      <div className="flex justify-center items-center relative">
        <img
          src={backIcon}
          alt="lunch icon"
          className="w-12 h-12 lg:w-18 lg:h-18 absolute left-0 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="relative z-10 text-3xl lg:text-5xl font-extrabold text-orange-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-yellow-200 after:z-[-1] after:p-5 lg:after:p-7">
          당신의 선택은?
        </h1>
      </div>
      <CurrentAddress />
      <ul className="w-full flex flex-col gap-20">
        <PriceList type="low" />
        <PriceList type="middle" />
        <PriceList type="high" />
      </ul>
      <Button
        className="sticky bottom-1 right-0 z-20 text-xl lg:text-3xl py-7 bg-orange-800 text-white"
        onClick={() => {
          setIsClick(true);
        }}
      >
        <p>{isClick ? "Coming Soon!" : "AI기반 식당 추천"}</p>
      </Button>
      {/* 취향 조사 버튼 구성 필요(로컬 taste 구성에 따라 추가 필요)*/}
    </div>
  );
}
