/* eslint-disable */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import home_icon_pink from '../../assets/Elements/home_image_pink.png';
import home_icon_white from '../../assets/Elements/home_image_white.png';

import rules_icon_pink from '../../assets/Elements/rules_image_pink.png';
import rules_icon_white from '../../assets/Elements/rules_image_white.png';

import random_icon_pink from '../../assets/Elements/random_image_pink.png';
import random_icon_white from '../../assets/Elements/random_image_white.png';

function LeftSideBar() {
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [isSelected, setIsSelected] = useState('');
  const location = useLocation();
  const path = location.pathname;

  var home_page_class = 'side-navigation-large-item-wrapper';

  if (path === '/') {
    home_page_class += ' active';
  }

  var rules_page_class = 'side-navigation-large-item-wrapper';

  if (path === '/rules/' || path === '/rules') {
    rules_page_class += ' active';
  }

  var random_page_class = 'side-navigation-large-item-wrapper';

  if (path === '/games/random/' || path === '/games/random') {
    random_page_class += ' active';
  }

  function changeSelection(element) {
    setIsSelected(element);
  }

  return (
    <div
      id="side-navigation-large-wrapper"
      className={sidebarToggled ? 'show-game-sidebar' : ''}
    >
      {/* add "show-game-sidebar" class to element above to show navigation on pages, remove to hide navigation */}
      <div id="side-navigation-large">
        <Link
          to="/"
          onClick={() => setSidebarToggled(false)}
          className={home_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${home_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${home_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Home page</span>
          </div>
        </Link>
        <Link
          to="/swap"
          onClick={() => setSidebarToggled(false)}
          className={rules_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${rules_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${rules_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Swap</span>
          </div>
        </Link>

        <div className="side-navigation-large-item-wrapper-string">
          <div className="item-content">
            <span>Popular</span>
          </div>
        </div>
        <Link
          to="/soon"
          onClick={() => setSidebarToggled(false)}
          className={random_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${random_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${random_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Random</span>
          </div>
        </Link>
        <div id="left-side-bar-show-button-wrapper">
          <div
            id="left-side-bar-show-button"
            onClick={() => {
              setSidebarToggled(!sidebarToggled);
            }}
          >
            &#8811;
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
