import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum: any;
  }
}

export const loadWeb3 = async () => {
  if (window.ethereum) {
    // setChainId((window).ethereum.networkVersion);

    window.ethereum.on('chainChanged', () => {
      console.log('chainChanged');
    });

    window.ethereum.on('accountsChanged', () => {
      console.log('accountChanged');
      sessionStorage.removeItem('dao-user-address');
    });

    // TODO: get that data from env

    if (window.ethereum.networkVersion !== '0x116ea') {
      //   const data = [
      //     {
      //       chainId: '0x116ea',
      //       chainName: 'Godwoken v1 Mainnet',
      //       nativeCurrency: {
      //         name: 'pCKB',
      //         symbol: 'pCKB',
      //         decimals: 18
      //       },
      //       rpcUrls: ['https://v1.mainnet.godwoken.io/rpc'],
      //       blockExplorerUrls: ['https://v1.gwscan.com']
      //     }
      //   ];

      const data = [
        {
          chainId: '0x1',
          chainName: 'Ethereum Mainnet',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18
          },
          rpcUrls: ['https://mainnet.infura.io/v3/'],
          blockExplorerUrls: ['https://etherscan.io']
        }
      ];

      /* eslint-disable */
      const tx = await window.ethereum
        .request({ method: 'wallet_addEthereumChain', params: data })
        .catch();
      if (tx) {
        console.log(tx);
      }
    }
  } else {
    console.log(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    );
  }
};

//base on https://eips.ethereum.org/EIPS/eip-1474#error-codes
//base on https://eips.ethereum.org/EIPS/eip-1193#provider-errors
export const getMetamaskMessageError = (error: any) => {
  if ('code' in error) {
    switch (error.code) {
      case 4001:
        return 'The user rejected the request.';
      case 4100:
        return 'The requested method and/or account has not been authorized by the user.';
      case 4200:
        return 'The Provider does not support the requested method.';
      case 4900:
        return 'The Provider is disconnected from all chains.';
      case 4901:
        return 'The Provider is not connected to the requested chain.';
      case -32700:
        return 'Invalid JSON';
      case -32600:
        return 'JSON is not a valid request object';
      case -32601:
        return 'Method does not exist';
      case -32602:
        return 'Invalid method parameters';
      case -32603:
        return 'Internal JSON-RPC error, check token approve before transfer or reset your metamask';
      case -32000:
        return 'Missing or invalid parameters';
      case -32001:
        return 'Requested resource not found';
      case -32002:
        return 'Requested resource not available';
      case -32003:
        return 'Transaction creation failed';
      case -32004:
        return 'Method is not implemented';
      case -32005:
        return 'Request exceeds defined limit';
      case -32006:
        return 'Version of JSON-RPC protocol is not supported';
      default:
        return 'Something went wrong';
    }
  }
};

export const loadContract = (provider: any, contract: any, chainId: string) => {
  try {
    const deployedNetwork = contract.networks[chainId];

    if (deployedNetwork === undefined) {
      return null; // wrong network
    }
    return new ethers.Contract(deployedNetwork.address, contract.abi, provider);
  } catch (error) {
    console.log(error, 'error function load');
  }
};
