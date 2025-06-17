// 취향 조사 컴포넌트

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icon/backIcon.svg";

export default function UserTaste() {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  // 가격 취향 변경 핸들러
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  // 취향 제출 핸들러
  const tasteSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col justify-between items-center h-full gap-10 w-full">
      <div className="flex justify-center items-center relative w-full">
        <img
          src={backIcon}
          alt="back icon"
          className="w-12 h-12 lg:w-18 lg:h-18 absolute left-0 cursor-pointer"
          onClick={() => navigate("/result")}
        />
        <h1 className="text-3xl lg:text-5xl font-extrabold">나의 취향은?</h1>
      </div>
      <form
        className="flex flex-col gap-2 w-full"
        onSubmit={tasteSubmitHandler}
      >
        <section className="flex flex-col justify-between w-full">
          <div className="flex gap-2">
            <Label className="text-md" htmlFor="price">
              가격
            </Label>
            <div className="text-md">{price.toLocaleString()}원</div>
          </div>
          <Input
            type="range"
            id="price"
            onChange={handlePriceChange}
            value={price}
            min={0}
            max={100000}
          />
        </section>
        <section className="flex flex-col justify-between w-full"></section>
        <Button className="text-lg lg:text-2xl p-4 lg:p-10 bg-orange-700 hover:bg-red-700 w-fulllg:w-[50%] self-center">
          취향 저장
        </Button>
      </form>
    </main>
  );
}
