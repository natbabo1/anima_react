import { Route, Routes } from 'react-router-dom';
import Header from '../layouts/header/Header';
import HomePage from '../pages/HomePage';
import ThisSeasonPage from '../pages/ThisSeasonPage';
import MoviesPage from '../pages/MoviesPage';
import ProfilePage from '../pages/ProfilePage';
import NoPath from '../pages/NoPath';
import AnimePage from '../pages/AnimePage';
import FindPage from '../pages/FindPage';
import ManagerPage from '../pages/manager/ManagerPage';
import { useAuth } from '../contexts/AuthContext';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="this-season" element={<ThisSeasonPage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="search" element={<FindPage />} />
        <Route path="animes/:animeId/ep/:epNumber" element={<AnimePage />} />
        {user?.username === 'ADMIN' && (
          <Route path="/anima-manager" element={<ManagerPage />} />
        )}
        <Route path="*" element={<NoPath />} />
      </Route>
    </Routes>
  );
}

export default Router;
