import create from 'zustand';

export const useTransactionStore = create((set) => ({
  transactions: [], 

  setTransactions: (transactions) => set({ transactions }),
  addTransaction: (transaction) => set((state) => ({
    transactions: [...state.transactions, transaction],
  })),
  clearTransactions: () => set({ transactions: [] }),
}));
