import axios from '../config/axios';

export const getRatings = () => axios.get('/misc/ratings');
export const createRating = (rating) =>
  axios.post('/manage/misc/ratings', { rating });

export const updateRating = (ratingId, rating) =>
  axios.patch(`/manage/misc/ratings/${ratingId}`, { rating });
export const deleteRating = (ratingId) =>
  axios.delete(`/manage/misc/ratings/${ratingId}`);

export const getGenres = () => axios.get('/misc/genres');
export const createGenre = (genre) =>
  axios.post('/manage/misc/genres', { genre });
export const updateGenre = (genreId, genre) =>
  axios.patch(`/manage/misc/genres/${genreId}`, { genre });
export const deleteGenre = (genreId) =>
  axios.delete(`/manage/misc/genres/${genreId}`);

export const getStudios = () => axios.get('/misc/studios');
export const createStudio = (studio) =>
  axios.post('/manage/misc/studios', { name: studio });
export const updateStudio = (studioId, studio) =>
  axios.patch(`/manage/misc/studios/${studioId}`, { name: studio });
export const deleteStudio = (studioId) =>
  axios.delete(`/manage/misc/studios/${studioId}`);
