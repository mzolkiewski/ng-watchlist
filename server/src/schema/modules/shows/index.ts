import showTypeResolver from './show.resolver';
import showType from './show.type';

import episodeTypeResolver from './episode.resolver';
import episodeType from './episode.type';

import showsQuery from './shows.query';
import showsQueryResolver from './shows.resolver';

import availableEpisodesQuery from './available-episodes.query';
import availableEpisodesQueryResolver from './available-episodes.resolver';

import upcomingEpisodesQuery from './upcoming-episodes.query';
import upcomingEpisodesQueryResolver from './upcoming-episodes.resolver';

const queries = `
  ${showsQuery}
  ${availableEpisodesQuery}
  ${upcomingEpisodesQuery}
`;

const typeDefs = [
  showType,
  episodeType,
];

const typeResolvers = {
  ...showTypeResolver,
  ...episodeTypeResolver,
};

const queryResolvers = {
  ...showsQueryResolver,
  ...availableEpisodesQueryResolver,
  ...upcomingEpisodesQueryResolver,
};

export {
  typeDefs,
  typeResolvers,
  queries,
  queryResolvers
};