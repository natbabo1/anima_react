import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to="/"
      className="navbar-brand h1 mb-0 px-2 border-top border-bottom border-success"
    >
      Anima
    </Link>
  );
}

export default Logo;
