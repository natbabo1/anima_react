import { Link } from 'react-router-dom';

function GenreBadge({ genreId = 1, children }) {
  return (
    <Link to={`genres/${genreId}`}>
      <div className="bg-anima-green rounded-full px-3 font-medium text-sm">
        {children}
      </div>
    </Link>
  );
}

export default GenreBadge;
