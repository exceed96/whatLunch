// 현재 위치 전역상태

import { create } from "zustand";

type TCurrentLocationState = {
  latitude: string;
  longitude: string;
  currentAddress: string;
  setLocation: (latitude: string, longitude: string) => void;
  setCurrentAddress: (currentAddress: string) => void;
};

export const useCurrentLocation = create<TCurrentLocationState>((set) => ({
  latitude: "",
  longitude: "",
  currentAddress: "",
  setLocation: (latitude: string, longitude: string) =>
    set({ latitude, longitude }),
  setCurrentAddress: (currentAddress: string) =>
    set({ currentAddress: currentAddress }),
}));
