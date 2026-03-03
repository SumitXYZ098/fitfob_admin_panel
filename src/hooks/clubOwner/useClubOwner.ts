import { useEffect } from "react";
import { useClubOwnerStore } from "../../store/clubOwner.store";

export const useUnverifiedOwners = (search: string = "") => {
  const { unverifiedOwners, fetchUnverifiedOwners, loading, error } =
    useClubOwnerStore();

  useEffect(() => {
    fetchUnverifiedOwners(search);
  }, [fetchUnverifiedOwners, search ]);

  return { unverifiedOwners, loading, error, fetchUnverifiedOwners };
};

export const useVerifiedOwners = (search: string = "") => {
  const { verifiedOwners, fetchVerifiedOwners, loading, error } =
    useClubOwnerStore();

  useEffect(() => {
    fetchVerifiedOwners(search);
  }, [fetchVerifiedOwners, search]);

  return { verifiedOwners, loading, error, fetchVerifiedOwners };
};

export const useClubOwnerDetails = (ownerId: number) => {
  const { selectedOwner, fetchOwnerById, loading, error } = useClubOwnerStore();

  useEffect(() => {
    if (ownerId) {
      fetchOwnerById(ownerId);
    }
  }, [ownerId, fetchOwnerById]);

  return { selectedOwner, loading, error };
};
