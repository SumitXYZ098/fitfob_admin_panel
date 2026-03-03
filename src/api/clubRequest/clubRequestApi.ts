import axios from "axios";
import { EndPoints } from "../endpoints";
import api from "../apiInstance";

export const unverifiedOwnersApi = async (search: string) => {
  try {
    const response = await api.get(EndPoints.unverifiedClubOwners(search));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const verifiedOwnersApi = async (search: string) => {
  try {
    const response = await api.get(EndPoints.verifiedClubOwners(search));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getClubOwnerById = async (ownerId: string) => {
  try {
    const response = await api.get(EndPoints.getClubOwner(ownerId));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};
