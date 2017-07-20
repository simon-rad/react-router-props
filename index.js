import { func, object, shape, string, number, bool } from 'prop-types';

export const locationShape = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  hash: string.isRequired,
  state: object,
});

export const historyShape = shape({
  action: string.isRequired,
  block: func.isRequired,
  createHref: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  listen: func.isRequired,
  length: number.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  location: locationShape.isRequired,
});

export const matchShape = shape({
  isExact: bool.isRequired,
  path: string.isRequired,
  url: string.isRequired,
  params: object,
});

export default {
  locationShape,
  matchShape,
  historyShape,
};
