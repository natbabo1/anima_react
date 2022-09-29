import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthBotton from '../../features/auth/AuthBotton';
import DropdownToggle from './DropdownToggle';
import Logo from './Logo';
import MenuContainer from './MenuContainer';

function Header() {
  const { user } = useAuth();
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark px-5 fixed-top"
        tabIndex="-1"
      >
        <div className="container-fluid">
          <Logo />
          <MenuContainer />
          {user ? <DropdownToggle /> : <AuthBotton />}
        </div>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default Header;
