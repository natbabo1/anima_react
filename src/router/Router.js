import { Route, Routes } from 'react-router-dom';
import Header from '../layouts/header/Header';
import HomePage from '../pages/HomePage';
import ThisSeasonPage from '../pages/ThisSeasonPage';
import MoviesPage from '../pages/MoviesPage';
import ProfilePage from '../pages/ProfilePage';
import NoPath from '../pages/NoPath';
import AnimePage from '../pages/AnimePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/this-season" element={<ThisSeasonPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/anime/:animeId" element={<AnimePage />} />
        <Route path="*" element={<NoPath />} />
      </Route>
    </Routes>
  );
}

export default Router;
