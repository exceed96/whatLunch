// 추천 식당 리스트 컴포넌트

import {
  Card,
  CardHeader,
  CardAction,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { TStores } from "@/store/useRecommendStore";

type TRestaurantList = {
  store: TStores;
};

export default function RestaurantList({ store }: TRestaurantList) {
  return (
    <li className="min-w-full lg:min-w-full">
      <Card className="flex flex-col items-center p-0 py-2 w-full border-2 border-gray-300">
        <CardHeader className="w-full text-center flex flex-col gap-2 items-center">
          <CardTitle className="text-xl lg:text-2xl w-full text-ellipsis overflow-hidden whitespace-nowrap">
            {store.title}
          </CardTitle>
          <CardDescription className="display flex flex-col gap-1">
            <address className="text-lg lg:text-xl">{store.address}</address>
            <p className="text-lg lg:text-xl">{store.type}</p>
          </CardDescription>
        </CardHeader>
        {/* <CardContent className="w-full px-3">
          <div className="w-full">
            <img
              src={stroes}
              alt="추천 음식 이미지"
              className="w-full object-cover rounded-lg border-1 border-gray-300"
            />
          </div>
        </CardContent> */}
        <CardAction className="w-full flex justify-center">
          <a
            className="text-orange-700 hover:bg-orange-700 hover:text-white text-md lg:text-2xl py-1 lg:py-2 px-4 lg:px-6 rounded-xl cursor-pointer"
            target="_blank"
            href="https://map.naver.com/p/smart-around/place/1912734867?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=2&timestamp=202506161738&locale=ko&svcName=map_pcv5"
          >
            예약하기
          </a>
        </CardAction>
      </Card>
    </li>
  );
}
