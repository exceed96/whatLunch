// 추천 식당 금액 리스트

import RestaurantList from "./RestaurantList";

type TPriceList = {
  price: string;
};

export default function PriceList({ price }: TPriceList) {
  return (
    <li className="w-full flex flex-col gap-6">
      <h2 className="text-2xl lg:text-4xl font-bold underline">
        {price}원 이하
      </h2>
      <ul className="flex-nowrap w-full flex gap-4 overflow-x-auto scrollbar-hide">
        <RestaurantList />
        <RestaurantList />
        <RestaurantList />
      </ul>
    </li>
  );
}
