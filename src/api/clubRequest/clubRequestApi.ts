/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { EndPoints } from "../endpoints";
import api from "../apiInstance";
import { useAuthStore } from "../../store/auth.store";

export const unverifiedOwnersApi = async (search: string) => {
  const { token } = useAuthStore.getState();

  try {
    const response = await api.get(EndPoints.unverifiedClubOwners(search), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const verifiedOwnersApi = async (search: string) => {
  const { token } = useAuthStore.getState();
  try {
    const response = await api.get(EndPoints.verifiedClubOwners(search), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getClubOwnerById = async (ownerId: number) => {
  const { token } = useAuthStore.getState();
  try {
    const response = await api.get(EndPoints.getClubOwner(ownerId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const verifyApproval = async (userId: number) => {
  const { token } = useAuthStore.getState();
  try {
    const response = await api.post(EndPoints.verifyApproval(userId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updateClubOwner = async (
  ownerId: number,
  payload: { data: any },
) => {
  const { token } = useAuthStore.getState();

  try {
    const response = await api.put(EndPoints.getClubOwner(ownerId), payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error?.message);
    }
    throw new Error("An unexpected error occurred");
  }
};
