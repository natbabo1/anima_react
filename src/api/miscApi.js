import axios from '../config/axios';

export const getRatings = () => axios.get('/misc/ratings');
export const createRating = (rating) => axios.post('/misc/ratings', { rating });

export const updateRating = (ratingId, rating) =>
  axios.patch(`/misc/ratings/${ratingId}`, { rating });
export const deleteRating = (ratingId) =>
  axios.delete(`/misc/ratings/${ratingId}`);

export const getGenres = () => axios.get('/misc/genres');
export const createGenre = (genre) => axios.post('/misc/genres', { genre });
export const updateGenre = (genreId, genre) =>
  axios.patch(`/misc/genres/${genreId}`, { genre });
export const deleteGenre = (genreId) => axios.delete(`misc/genres/${genreId}`);

export const getStudios = () => axios.get('/misc/studios');
export const createStudio = (studio) =>
  axios.post('/misc/studios', { name: studio });
export const updateStudio = (studioId, studio) =>
  axios.patch(`/misc/studios/${studioId}`, { name: studio });
export const deleteStudio = (studioId) =>
  axios.delete(`misc/studios/${studioId}`);
