import { Link } from 'react-router-dom';

import home_icon_pink from '../../assets/Elements/home_image_pink.png';
import home_icon_white from '../../assets/Elements/home_image_white.png';

import bonuses_icon_pink from '../../assets/Elements/bonuses_image_pink.png';
import bonuses_icon_white from '../../assets/Elements/bonuses_image_white.png';

import random_icon_pink from '../../assets/Elements/random_image_pink.png';
import random_icon_white from '../../assets/Elements/random_image_white.png';

const MobileNavigation = () => {
  function change_class_mobile(element) {
    var side_nav_elements = document.getElementsByClassName(
      'mobile-navigation-item-wrapper'
    );

    for (var i = 0; i < side_nav_elements.length; i++) {
      side_nav_elements[i].classList.remove('active');
    }

    element.classList.add('active');
  }

  return (
    <div id="mobile-navigation">
      <div id="items-wrapper">
        <Link
          to="/soon"
          onClick={change_class_mobile.bind(this)}
          className="mobile-navigation-item-wrapper"
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
          </div>
        </Link>
        <Link
          to="/"
          onClick={change_class_mobile.bind(this)}
          className="mobile-navigation-item-wrapper active"
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
          </div>
        </Link>
        <Link
          to="/soon"
          onClick={change_class_mobile.bind(this)}
          className="mobile-navigation-item-wrapper"
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${bonuses_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${bonuses_icon_pink})` }}
              ></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
