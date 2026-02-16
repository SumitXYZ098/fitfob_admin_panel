import { create } from "zustand";

interface UIState {
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;

  globalLoader: boolean;
  setGlobalLoader: (v: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  globalLoader: false,

  openSidebar: () => set({ sidebarOpen: true }),
  closeSidebar: () => set({ sidebarOpen: false }),
  setGlobalLoader: (v) => set({ globalLoader: v }),
}));
