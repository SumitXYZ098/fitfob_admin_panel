import { create } from "zustand";

interface SnackBarStore {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
  setSnackBar: (
    message: string,
    severity?: "success" | "error" | "warning" | "info"
  ) => void;
  closeSnackBar: () => void;
}

const useSnackBarStore = create<SnackBarStore>((set) => ({
  open: false,
  message: "",
  severity: "success",
  setSnackBar: (
    message: string,
    severity: "success" | "error" | "warning" | "info" = "success"
  ) => set({ open: true, message, severity }),
  closeSnackBar: () => set({ open: false }),
}));

export default useSnackBarStore;
