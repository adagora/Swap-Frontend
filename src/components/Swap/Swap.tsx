import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Swap.css';

function Swap({ setIsLoading, setSwapTransaction }) {
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
                    {/* {swapCurrencyInput ? ( */}
                    <option value="owl">ADA</option>
                    {/* ) : ( */}
                    <option value="SigUSD">BTC</option>
                  </select>
                  <input
                    type="number"
                    step="0.01"
                    name="swap1"
                    style={{ outline: 'none' }}
                  />
                </div>
                <div id="input-separator-wrapper">
                  <div
                    id="input-seperator"
                    // onClick={handleChangeSwapCurrency}
                  >
                    To
                  </div>
                </div>
                <div className="input-field">
                  <select>
                    {/* {swapCurrencyInput ? ( */}
                    <option value="SigUSD">coin1</option>
                    {/* ) : ( */}
                    <option value="owl">coin</option>
                    {/* )} */}
                  </select>
                  <input
                    type="number"
                    name="swap2"
                    style={{ outline: 'none' }}
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
                <button onClick={() => null}>Swap</button>
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
