import { Link, useLocation } from 'react-router-dom';

function MenuItem({ menu, isLink = true, to, active = false }) {
  const { pathname } = useLocation();
  return (
    <div className="text-low-white hover:text-snow-white">
      <Link
        to={to}
        className={`${
          pathname === to
            ? 'text-snow-white border-b border-anima-green font-medium'
            : null
        }`}
      >
        {menu}
      </Link>
    </div>
  );
}
export default MenuItem;
