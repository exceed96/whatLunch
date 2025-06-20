// 추천 식당 리스트 컴포넌트

import {
  Card,
  CardHeader,
  CardAction,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import type { TStores } from "@/store/useRecommendStore";

type TRestaurantList = {
  store: TStores;
};

export default function RestaurantList({ store }: TRestaurantList) {
  return (
    <li className="min-w-full lg:min-w-full">
      <Card className="flex flex-col items-center justify-center p-0 py-2 w-full border-2 border-gray-300 min-h-43 lg:min-h-48">
        {store.title && (
          <CardHeader className="w-full text-center flex flex-col gap-2 items-center">
            <CardTitle className="text-xl lg:text-2xl w-full text-ellipsis overflow-hidden whitespace-nowrap">
              {store.title}
            </CardTitle>
            <CardDescription className="display flex flex-col gap-1">
              <address className="text-lg lg:text-xl">{store.address}</address>
              <p className="text-lg lg:text-xl text-[#7F2A0C]">{store.type}</p>
            </CardDescription>
          </CardHeader>
        )}
        {!store.title && (
          <CardContent className="w-full h-full px-3 flex items-center justify-center text-xl lg:text-2xl">
            <strong>적합한 식당을 찾지 못했어요..</strong>
          </CardContent>
        )}
        {store.title && (
          <CardAction className="w-full flex justify-center">
            <a
              className="text-orange-700 hover:bg-orange-700 hover:text-white text-md lg:text-2xl py-1 lg:py-2 px-4 lg:px-6 rounded-xl cursor-pointer"
              target="_blank"
              href={`https://map.naver.com/p/search/${store.title}`}
            >
              위치보기
            </a>
          </CardAction>
        )}
      </Card>
    </li>
  );
}
