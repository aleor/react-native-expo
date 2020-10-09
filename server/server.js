import { createServer } from 'miragejs';
import { COLOR_PALETTES } from './data/colors';

export const createLocalServer = () => {
  return createServer({
    routes() {
      this.get('/api/palettes', () => JSON.stringify(COLOR_PALETTES));
    },
  });
};
