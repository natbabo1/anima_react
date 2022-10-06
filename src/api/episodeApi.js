import axios from '../config/axios';

export const getEpisodeList = (animeId) => axios.get(`/animes/${animeId}/ep`);
