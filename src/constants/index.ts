import React from 'react';
import { Item } from '../models/item';

const PROJECT_CONTEXT_DEFAULTS: ProjectContext = {
  itemList: [],

  categoryList: [],

  headerHeight: 0,
  setHeaderHeight() {},

  categoryFilter: '',
  setCategoryFilter() {},
};

type ProjectContext = {
  itemList: Item[];

  categoryList: string[];

  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;

  categoryFilter: string;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default PROJECT_CONTEXT_DEFAULTS;
