/* eslint-disable */
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
const INFURA_NETWORK_ID = process.env.REACT_APP_INFURA_NETWORK_ID;
const INFURA_NETWORK_NAME = INFURA_NETWORK_ID === '1' ? 'mainnet' : 'ropsten';

let web3 = null as any;
let provider = null as any;

const providerOptions = {
  injected: {
    package: null
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_KEY
    }
  }
};

const web3Modal = new Web3Modal({
  network: INFURA_NETWORK_NAME,
  cacheProvider: true,
  providerOptions
});

export const useWalletHook = () => {
  const [address, setWalletAddress] = useState(null);
  const [userSelecteNetworkId, setUserSelectedNetworkId] = useState(null);

  const detectNetwork = async () => {
    const networkId = await web3.eth.net.getId();
    setUserSelectedNetworkId(networkId);
    return networkId;
  };

  const getWalletAddress = async () => {
    const [walletAddress] = await web3.eth.getAccounts();
    return web3.utils.toChecksumAddress(walletAddress);
  };

  const isUserAtExpectedNetwork = async () => {
    const currentNetworkId = await detectNetwork();
    return Number(currentNetworkId) === Number(INFURA_NETWORK_ID);
  };
  const subscribeProvider = async provider => {
    if (!provider.on) {
      return;
    }
    provider.on('accountsChanged', async accounts => {
      const [address] = accounts;
      setWalletAddress(address);
    });
    provider.on('chainChanged', async chainId => {
      await detectNetwork();
      console.log('Network changed');
    });
  };
  const connectEthereumWallet = async () => {
    try {
      provider = await web3Modal.connect();
      subscribeProvider(provider);
      await provider.enable();

      web3 = new Web3(provider);
      const [account] = await web3.eth.getAccounts();
      const isExpectedNetwork = await isUserAtExpectedNetwork();

      if (!isExpectedNetwork) {
        const hexifiedChainId = web3.utils.toHex(INFURA_NETWORK_ID);
        await web3.currentProvider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: hexifiedChainId }]
        });
      }

      web3.eth.defaultAccount = account;
      setWalletAddress(web3.utils.toChecksumAddress(account));
      return web3;
    } catch (error: any) {
      throw new Error(error.toString());
    }
  };

  //   const checkWalletHasPreviouslyConnected = async () => {
  //     const walletAddress = await store.get(availableBlockchains.ETHEREUM);
  //     if (walletAddress) {
  //       await connectEthereumWallet();
  //     }
  //   };

  //   useEffect(() => {
  //     checkWalletHasPreviouslyConnected();
  //   }, []);

  const getLatestBlock = async () => {
    const block = await web3.eth.getBlockNumber();
    return block;
  };

  const generateSignatureForClaim = async (
    conversionId,
    amount,
    fromAddress,
    toAddress
  ) => {
    const message = await web3.utils.soliditySha3(
      { type: 'string', value: conversionId },
      { type: 'string', value: amount },
      { type: 'string', value: fromAddress },
      { type: 'string', value: toAddress }
    );

    const hash = await web3.eth.personal.sign(message, address);
    return hash;
  };

  const disconnectEthereumWallet = () => {
    web3Modal.clearCachedProvider();
    setWalletAddress(null);
  };

  const estimateGasPrice = async estimate => {
    const gasPrice = await web3.eth.getGasPrice();
    return gasPrice;
  };

  return {
    connectEthereumWallet,
    disconnectEthereumWallet,
    getLatestBlock,
    generateSignatureForClaim,
    getWalletAddress,
    estimateGasPrice
  };
};
