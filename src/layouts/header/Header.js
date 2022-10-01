import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthBotton from '../../features/auth/AuthBotton';
import Footer from '../footer/Footer';
import DropdownToggle from './DropdownToggle';
import Logo from './Logo';
import MenuContainer from './MenuContainer';

function Header() {
  const { user } = useAuth();
  return (
    <>
      <nav
        className="w-full bg-gradient-to-b from-dark-gray via-dark-gray/70 text-snow-white px-16 py-3 fixed z-30 top-0 left-0"
        tabIndex="-1"
      >
        <div className="w-full flex text-lg items-center gap-x-7">
          <Logo />
          <MenuContainer />
          {user ? <DropdownToggle /> : <AuthBotton />}
        </div>
      </nav>
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Header;
