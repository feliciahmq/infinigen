import { create } from "zustand";

interface usePremiumUpgradeStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const usePremiumUpgrade = create<usePremiumUpgradeStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))