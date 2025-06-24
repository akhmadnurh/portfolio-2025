import { create } from "zustand";
import { IPortfolioStore, TPortfolio } from "~/interfaces/portfolio.interface";

export const usePortfolioStore = create<IPortfolioStore>((set) => ({
  portfolio: {} as TPortfolio,
  setPortfolio: (portfolio: TPortfolio) => set({ portfolio }),
}));
