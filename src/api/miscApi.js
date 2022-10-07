import axios from '../config/axios';

export const getRatings = () => axios.get('/misc/ratings');

export const updateRating = (ratingId, rating) =>
  axios.patch(`/misc/ratings/${ratingId}`, { rating });

export const createRating = (rating) => axios.post('/misc/ratings', { rating });

export const deleteRating = (ratingId) =>
  axios.delete(`/misc/ratings/${ratingId}`);
