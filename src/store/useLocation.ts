// 현재 위치 전역상태

import { create } from "zustand";

type TLocationState = {
  latitude: string;
  longitude: string;
  currentAddress: string;
  setLocation: (latitude: string, longitude: string) => void;
  setCurrentAddress: (currentAddress: string) => void;
};

export const useLocation = create<TLocationState>((set) => ({
  latitude: "",
  longitude: "",
  currentAddress: "",
  setLocation: (latitude: string, longitude: string) =>
    set({ latitude, longitude }),
  setCurrentAddress: (currentAddress: string) =>
    set({ currentAddress: currentAddress }),
}));
