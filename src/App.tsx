/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import Header from './components/Header/Header';
import BodyContent from './components/BodyContent/BodyContent';
import ComingSoon from './components/ComingSoon/ComingSoon';
import green_check from './assets/Elements/green_checkmark.png';
import successTick from './assets/Elements/successTick.png';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [swapTransaction, setSwapTransaction] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <div className={swapTransaction || isLoading ? 'App overlay' : 'App'}>
      {/* need to add class 'overlay' to app in order to have blurred content in case swap overlay is active */}
      {path.includes('/soon') ? (
        <ComingSoon />
      ) : (
        <>
          <Header />
          <BodyContent
            setIsLoading={setIsLoading}
            setSwapTransaction={setSwapTransaction}
          />
          <Footer />
          {
            <div id="overlay">
              <div id="overlay-background" />
              <div id="overlay-content-wrapper">
                <div id="overlay-content">
                  {isLoading && (
                    <Triangle
                      height="100"
                      width="100"
                      color="white"
                      ariaLabel="loading"
                    />
                  )}
                  {swapTransaction && (
                    <div id="overlay-popup">
                      <div
                        id="green-checkmark"
                        style={{ backgroundImage: `url(${green_check})` }}
                      />
                      <div id="overlay-text">
                        <span>Transaction submitted</span>
                        <a
                          style={{ textDecoration: 'underline' }}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://explorer.ergoplatform.com/en/transactions/${swapTransaction}`}
                        >
                          View Transaction
                        </a>
                      </div>
                      {/* add functionality to close overlay to element below */}
                      <div
                        id="overlay-close"
                        onClick={() => setSwapTransaction(false)}
                      >
                        X
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        </>
      )}
    </div>
  );
}

export default App;
