import { Link, useLocation } from 'react-router-dom';

function MenuItem({ menu, isLink = true, to, active = false }) {
  const { pathname } = useLocation();
  return (
    <div className={'nav-item'}>
      {isLink ? (
        <Link
          to={to}
          className={`nav-link ${pathname === to ? 'active' : null}`}
        >
          {menu}
        </Link>
      ) : (
        <a className={`nav-link ${pathname === to && 'active'}`} href={to}>
          {menu}
        </a>
      )}
    </div>
  );
}
export default MenuItem;
