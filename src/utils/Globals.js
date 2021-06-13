export const getAvatarUri = id =>
  `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

export const getEpisodeCount = episode => episode.split('/').pop();

export const getCharacterId = characterUri => characterUri.split('/').pop();

export const parsSE = SE => SE.split('S').pop().split('E');
