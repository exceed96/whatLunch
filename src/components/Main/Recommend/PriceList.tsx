// 추천 식당 금액 리스트

import RestaurantList from "./RestaurantList";
import { useRecommendStore } from "@/store/useRecommendStore";

export default function PriceList() {
  const recommend = useRecommendStore((state) => state.recommend);

  return (
    <li className="w-full flex flex-col gap-6">
      <ul className="flex-nowrap w-full flex gap-8 overflow-x-auto scrollbar-hide">
        {recommend && recommend.length ? (
          recommend.map((store, index) => (
            <RestaurantList key={index} store={store} />
          ))
        ) : (
          <RestaurantList none={true} />
        )}
      </ul>
    </li>
  );
}
