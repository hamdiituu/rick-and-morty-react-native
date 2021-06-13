export const getAvatarUri = id =>
  `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

export const getEpisodeCount = episode => episode.split('/').pop();
