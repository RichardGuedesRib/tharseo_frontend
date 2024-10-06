import create from 'zustand';

export const useWalletStore = create((set) => ({
  wallets: [], 

  setWallets: (wallets) => set({ wallets }),
  addWallet: (wallet) => set((state) => ({
    wallets: [...state.wallets, wallet],
  })),
  clearWallets: () => set({ wallets: [] }),
}));
