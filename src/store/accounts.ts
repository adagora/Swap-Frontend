import React, { useEffect } from 'react';
import create from 'zustand';
import { getMetamaskMessageError } from '../utils/blockchain';

interface AccountState {
  hasMetamask: boolean;
  address: string;
  chainID: string;
  isConnected: boolean;
  init: () => void;
  connect: () => void;
  disconnect: () => void;
}

// Create a store with some state
const useAccountStore = create<AccountState>(set => ({
  hasMetamask: false,
  address: '',
  chainID: '',
  isConnected: false,
  init: () => {
    if (!window.ethereum) {
      set(() => ({
        hasMetamask: false
      }));
      return;
    }
    // Check if Metamask is installed
    if (window.ethereum) {
      set({ hasMetamask: true });
    }

    window.ethereum
      .request({ method: 'eth_chainId' })
      .then((chainID: string) => {
        set(() => ({
          chainID
        }));
      });

    window.ethereum
      .request({ method: 'eth_accounts' })
      .then((accounts: string[]) => {
        set(acc =>
          !acc.isConnected && accounts.length !== 0
            ? {
                isConnected: true,
                address: accounts[0]
              }
            : {}
        );
      });

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      set(acc => ({
        ...acc,
        address: accounts.length === 0 ? '' : accounts[0],
        isConnected: accounts.length !== 0
      }));
    });

    window.ethereum.on('chainChanged', (chainID: string) => {
      set(acc => ({
        ...acc,
        chainID
      }));
    });
  },
  connect: () => {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts: any) => {
        set({ address: accounts[0] });
        set({ isConnected: true });
      })
      .catch((err: any) => {
        getMetamaskMessageError(err.code);
        console.error(err);
      });
  },
  disconnect: () => {
    set({ address: '' });
    set({ isConnected: false });
  }
}));

// Create a hook to use the store
export const useAccount = () => {
  const address = useAccountStore(state => state.address);
  const chainID = useAccountStore(state => state.chainID);
  const isConnected = useAccountStore(state => state.isConnected);
  const hasMetamask = useAccountStore(state => state.hasMetamask);

  const init = useAccountStore(state => state.init);
  const connect = useAccountStore(state => state.connect);
  const disconnect = useAccountStore(state => state.disconnect);

  useEffect(() => {
    init();

    return () => {
      window.ethereum.removeListener('chainChanged', () => null);
      window.ethereum.removeListener('accountsChanged', () => null);
    };
  }, []);

  return {
    address,
    chainID,
    isConnected,
    hasMetamask,
    connect,
    init,
    disconnect
  };
};
