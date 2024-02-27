import { type Model } from './common';

export type Category = Model & {
  name: string;
  slug: boolean;
};
