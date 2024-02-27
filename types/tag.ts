import { type Model } from './common';

export type Tag = Model & {
  name: string;
  slug: boolean;
  icon?: string;
};
