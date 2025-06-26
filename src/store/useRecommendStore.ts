// 추천 식당 전역상태

import { create } from "zustand";

export type TStores = {
  title: string;
  rating: number;
  reviews_link: string;
  address: string;
  type: string;
};

// type TRecommendation = {
//   low: TStores[];
//   middle: TStores[];
//   high: TStores[];
// };

type TRecommendStore = {
  recommend?: TStores[];
  setRecommend: (recommend: TStores[]) => void;
};

export const useRecommendStore = create<TRecommendStore>((set) => ({
  setRecommend: (recommend: TStores[]) => set({ recommend: recommend }),
}));
