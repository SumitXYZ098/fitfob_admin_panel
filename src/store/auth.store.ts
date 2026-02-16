import { create } from "zustand";

interface AuthState {
  token: string | null;
  userId: number | null;
  setSession: (token: string, userId: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  userId: null,

  setSession: (token, userId) => set({ token, userId }),
  logout: () => set({ token: null, userId: null }),
}));
