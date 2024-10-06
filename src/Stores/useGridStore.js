import create from 'zustand';

export const useGridStore = create((set) => ({
  grids: [], 

  setGrids: (grids) => set({ grids }),
  addGrid: (grid) => set((state) => ({
    grids: [...state.grids, grid],
  })),
  clearGrids: () => set({ grids: [] }),
}));
