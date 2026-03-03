/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import type { ClubResponse } from "../api/clubRequest/clubRequest.types";
import {
  getClubOwnerById,
  unverifiedOwnersApi,
  verifiedOwnersApi,
} from "../api/clubRequest/clubRequestApi";

interface ClubOwnerState {
  unverifiedOwners: ClubResponse[];
  verifiedOwners: ClubResponse[];
  selectedOwner: ClubResponse | null;

  loading: boolean;
  error: string | null;
  refetchTrigger: number;

  fetchUnverifiedOwners: (search?: string) => Promise<void>;
  fetchVerifiedOwners: (search?: string) => Promise<void>;
  fetchOwnerById: (ownerId: number) => Promise<void>;
}

export const useClubOwnerStore = create<ClubOwnerState>((set) => ({
  unverifiedOwners: [],
  verifiedOwners: [],
  selectedOwner: null,

  loading: false,
  error: null,
  refetchTrigger: 0,

  // 🔹 Fetch Unverified Owners
  fetchUnverifiedOwners: async (search: string = "") => {
    set({ loading: true, error: null });

    try {
      const response = await unverifiedOwnersApi(search);
      set({
        unverifiedOwners: response.data,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch unverified owners",
        loading: false,
      });
    }
  },

  // 🔹 Fetch Verified Owners
  fetchVerifiedOwners: async (search: string = "") => {
    set({ loading: true, error: null });

    try {
      const response = await verifiedOwnersApi(search);
      set({
        verifiedOwners: response.data,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch verified owners",
        loading: false,
      });
    }
  },

  // 🔹 Fetch Single Owner
  fetchOwnerById: async (ownerId: number) => {
    set({ loading: true, error: null });

    try {
      const response = await getClubOwnerById(ownerId);
      set({
        selectedOwner: response.data,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch owner details",
        loading: false,
      });
    }
  },
}));
