import { base as showsBase } from '../../shows.selectors';

const base = (state) => showsBase(state).dictionary;

const categories = (state) => {
  return base(state).asMutable().categories;
};

const frequencies = (state) => {
  return base(state).asMutable().frequencies;
};

export {
  base,
  categories,
  frequencies,
};
