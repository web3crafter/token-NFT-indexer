import { create } from "zustand"

interface UseConnectedWalletStore {
  connectedWallet: string
  setConnectedWallet: (newConnectedWallet: string) => void
}

export const useConnectedWalletStore = create<UseConnectedWalletStore>()(
  (set) => ({
    connectedWallet: "",
    setConnectedWallet: (newConnectedWallet) =>
      set((state) => ({ connectedWallet: newConnectedWallet })),
  })
)
