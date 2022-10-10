import axios from '../config/axios';

export const getEpisodeList = (animeId) => axios.get(`/animes/${animeId}/ep`);

export const createEpisode = (formData, animeId) =>
  axios.post(`/manage/animes/${animeId}/ep`, formData);

export const updateEpisode = (formData, animeId, episodeId) =>
  axios.put(`/manage/animes/${animeId}/ep/${episodeId}`, formData);

export const deleteEpisode = (animeId, episodeId) =>
  axios.delete(`/manage/animes/${animeId}/ep/${episodeId}`);
