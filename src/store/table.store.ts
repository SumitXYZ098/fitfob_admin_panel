import { create } from "zustand";

interface TableState {
  page: number;
  search: string;
  pageSize: number;

  setPage: (p: number) => void;
  setSearch: (s: string) => void;
}

export const useTableStore = create<TableState>((set) => ({
  page: 1,
  search: "",
  pageSize: 10,

  setPage: (page) => set({ page }),
  setSearch: (search) => set({ search, page: 1 }),
}));
