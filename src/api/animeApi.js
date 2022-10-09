import axios from '../config/axios';

export const getHighlight = () => axios.get('/animes/highlight');

export const getAnimesBy = (category, limit = 18) => {
  if (category === 'Popular') {
    return axios.get(`/animes/popular?limit=${limit}`);
  }
  if (category === 'This Season') {
    return axios.get(`/animes/this-season?limit=${limit}`);
  }
  if (category === 'Movie') {
    return axios.get(`/animes/movies?limit=${limit}`);
  }
};

export const createAnime = (anime) => axios.post('/animes', anime);

export const updateAnime = (anime, animeId) =>
  axios.put(`animes/${animeId}`, anime);

export const searchAnimeByTitle = (animeTitle) =>
  axios.get(`/animes?title=${animeTitle}`);
