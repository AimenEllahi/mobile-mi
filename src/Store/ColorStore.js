import { create } from "zustand";

const useColorStore = create((set) => ({
  color: "#B5D1EE",
  setColor: (state) => set(() => ({ color: state })),
}));

export default useColorStore;
