import { useCallback, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

const MobileNavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  return (
    <Menu isOpen={isMenuOpen} onOpen={openMenu} onClose={closeMenu} right>
      <a href="#latestProjectSection" onClick={closeMenu}>
        Works
      </a>
      <a href="#skillsSection" onClick={closeMenu}>
        Skills
      </a>
      <a href="#feedbackSection" onClick={closeMenu}>
        Feedback
      </a>
      <a href="mailto:gencalda@gmail.com" onClick={closeMenu}>
        Contact
      </a>
    </Menu>
  );
};

export default MobileNavigationBar;
