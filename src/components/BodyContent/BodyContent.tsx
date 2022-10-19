/* eslint-disable */
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './BodyContent.css';
import Sidebars from '../Sidebars/Sidebars';

import LandingPage from './LandingPage';
import ComingSoon from '../ComingSoon/ComingSoon';
import Swap from '../Swap/Swap';

function BodyContent({ setIsLoading, setSwapTransaction }) {
  const location = useLocation();
  const path = location.pathname;

  var body_content_game_class = '';

  console.log(path.toLocaleLowerCase().match('games'));

  if (path.toLocaleLowerCase().match('swap')) {
    body_content_game_class = 'game';
  } else {
    body_content_game_class = '';
  }

  return (
    <div id="body-content-wrapper" className={body_content_game_class}>
      <Sidebars />
      <div id="body-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/soon" element={<ComingSoon />} />
          <Route
            path="/swap"
            element={
              <Swap
                setIsLoading={setIsLoading}
                setSwapTransaction={setSwapTransaction}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default BodyContent;
