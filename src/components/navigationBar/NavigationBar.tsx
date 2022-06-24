import DesktopNavigationBar from './DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';

const NavigationBar: React.FC = () => (
  <>
    <div className="md:hidden">
      <MobileNavigationBar />
    </div>
    <div className="hidden md:block">
      <DesktopNavigationBar />
    </div>
  </>
);

export default NavigationBar;
