// 추천 식당 금액 리스트

import RestaurantList from "./RestaurantList";
import { useRecommendStore } from "@/store/useRecommendStore";

type TPriceList = {
  type: "low" | "middle" | "high";
};

export default function PriceList({ type }: TPriceList) {
  const recommend = useRecommendStore((state) => state.recommend);

  const priceLevel = {
    low: "10,000원 이하",
    middle: "20,000원 이하",
    high: "30,000원 이하",
  };

  return (
    <li className="w-full flex flex-col gap-6">
      {/* <h2 className="text-2xl lg:text-4xl font-bold underline">
        {priceLevel[type]}
      </h2> */}
      <ul className="flex-nowrap w-full flex gap-8 overflow-x-auto scrollbar-hide">
        {recommend &&
          recommend[type].map((store, index) => (
            <RestaurantList key={index} store={store} />
          ))}
      </ul>
    </li>
  );
}
