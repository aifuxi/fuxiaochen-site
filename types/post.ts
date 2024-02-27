import { type Category } from './category';
import { type Model } from './common';
import { type Tag } from './tag';

export type Post = Model & {
  title: string;
  body: string;
  desc: string;
  author: string;
  type: number;
  status: number;
  slug: string;
  cover?: string;
  secret?: string;
  tags?: Tag[];
  category?: Category;
  categoryID?: string;
};
