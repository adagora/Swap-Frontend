import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Swap.css';
import { ethers } from 'ethers';
import IUniswapV2Factory from '../../abi/IUniswapV2Factory.json';
import IUniswapV2Router02 from '../../abi/IUniswapV2Router02.json';
import erc20 from '../../abi/erc20.json';
import IUniswapV2Pair from '../../abi/IUniswapV2Pair.json';

function Swap({ setIsLoading, setSwapTransaction }) {
  const [swap1, setSwap1] = useState('USDC');
  const [swap2, setSwap2] = useState('ETH');
  const [swap1Amount, setSwap1Amount] = useState<any>('');
  const [swap2Amount, setSwap2Amount] = useState<any>('');

  console.log({ swap1, swap2, swap1Amount, swap2Amount });
  // Set up your Infura API key and network
  const API_KEY: string = process.env.REACT_APP_API_KEY as string;
  const NETWORK = 'mainnet';

  // Set up your Uniswap contract addresses
  const UNISWAP_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
  const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

  const PRIVATE_KEY: string = process.env.REACT_APP_SECRET_KEY as string;

  // Set up your USDC contract address
  const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

  async function swap() {
    const provider = new ethers.providers.InfuraProvider('mainnet', API_KEY);

    // Set up your wallet
    const wallet = new ethers.Wallet(PRIVATE_KEY || '', provider);

    const blockNumber = await provider.getBlockNumber();

    const uniswapRouter = new ethers.Contract(
      UNISWAP_ROUTER_ADDRESS,
      IUniswapV2Router02.abi,
      wallet
    );

    // Set up your USDC contract instance
    const usdc = new ethers.Contract(USDC_ADDRESS, erc20, wallet);
    const amountInEth = String(swap2Amount); // Amount of ETH to swap
    const amountInUsdc = String(swap1Amount); // Amount of USDC to receive
    const minAmountInUsdc = '99.0'; // Minimum amount of USDC to receive
    setIsLoading(true);
    const tx = await uniswapRouter
      .swapExactETHForTokens(
        ethers.utils.parseUnits(amountInUsdc, 6),
        [ethers.constants.AddressZero, USDC_ADDRESS],
        wallet.address,
        blockNumber,
        {
          value: ethers.utils.parseEther(amountInEth)
        }
      )
      .then(tx => {
        setSwapTransaction(tx.hash);
        setIsLoading(false);
      })
      .catch(err => {
        const msg = `[swap] Error: ${JSON.stringify(err)}`;
        setIsLoading(false);
        alert(err.message);
      });
    // deadline
    // {
    //   value: ethers.utils.parseEther(amountInEth),
    //   gasLimit: 1000000,
    //   gasPrice: ethers.utils.parseUnits('10', 'gwei'),
    // }

    await tx.wait();

    const usdcBalance = await usdc.balanceOf(wallet.address);
    console.log('USDC Balance', usdcBalance.toString());
  }

  function handleSwapCurrencies() {
    const temp1 = swap1;
    const temp2 = swap2;
    setSwap1(temp2);
    setSwap2(temp1);
    // reset input fields
    setSwap1Amount('');
    setSwap2Amount('');
  }

  function getCorrectFactorMultiplier(swapNumber): any {
    if (swapNumber === 'ETH') {
      return 100;
    } else if (swapNumber === 'USDC') {
      return 0.01;
    }
  }

  function handleChangeSwapAmount(value, swapNumber) {
    if (value === '') {
      setSwap1Amount('');
      setSwap2Amount('');
    } else if (swapNumber == 0) {
      setSwap1Amount(value);
      setSwap2Amount(value * getCorrectFactorMultiplier(swap1));
    } else if (swapNumber == 1) {
      setSwap2Amount(value);
      setSwap1Amount(value * getCorrectFactorMultiplier(swap2));
    }
  }
  return (
    <div id="swap-wrapper">
      <div id="swap-content-wrapper">
        <div id="swap-content-inner-wrapper">
          <form id="swap-content">
            <div id="swap-header">
              <h1>Swap</h1>
            </div>
            <div id="swap-input-fields-wrapper">
              <div id="swap-input-fields">
                <div className="input-field">
                  <select>
                    <option value="owl">{swap1}</option>
                    <option value="SigUSD">{swap2}</option>
                  </select>
                  <input
                    type="number"
                    name="swap1"
                    placeholder={`${swap1} amount`}
                    value={swap1Amount}
                    style={{ outline: 'none' }}
                    onChange={e => handleChangeSwapAmount(e.target.value, 0)}
                  />
                </div>
                <div id="input-separator-wrapper">
                  <div id="input-seperator" onClick={handleSwapCurrencies}>
                    To
                  </div>
                </div>
                <div className="input-field">
                  <select>
                    <option value="SigUSD">{swap2}</option>
                    <option value="owl">{swap1}</option>
                  </select>
                  <input
                    type="number"
                    name="swap2"
                    placeholder={`${swap2} amount`}
                    style={{ outline: 'none' }}
                    value={swap2Amount}
                    onChange={e => handleChangeSwapAmount(e.target.value, 1)}
                  />
                </div>
              </div>
            </div>
            <div id="swap-buttons">
              <label id="private-wrapper" className="container">
                <input id="private-checkbox" type="checkbox" />
                <span className="checkmark"></span>
                Private
              </label>
              <div id="swap-button">
                <button
                  onClick={e => {
                    e.preventDefault();

                    console.log('swap button pressed');
                    swap();
                  }}
                >
                  Swap
                </button>
              </div>
              {/* <div id="swap-slippage">Slippage <span id="swap-slippage-value">0.5</span>%</div> */}
            </div>
          </form>
        </div>
      </div>
      <div id="swap-image-wrapper">
        <div id="swap-box">
          <div id="swap-coin"></div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
