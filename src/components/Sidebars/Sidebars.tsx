import './Sidebars.css';
import LeftSideBar from './LeftSideBar';
import MobileNavigation from './MobileNavigation';

const Sidebars = () => {
  return (
    <div id="sidebars">
      <LeftSideBar />
      <MobileNavigation />
    </div>
  );
};

export default Sidebars;
