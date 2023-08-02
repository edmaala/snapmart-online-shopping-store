import React from 'react';
import { CartItem, Item } from '../models/item';

const PROJECT_CONTEXT_DEFAULTS: ProjectContext = {
  itemList: [],

  categoryList: [],

  cartItems: [],
  setCartItems() {},
  resetCart() {},

  headerHeight: 0,
  setHeaderHeight() {},

  categoryFilter: '',
  setCategoryFilter() {},
};

type ProjectContext = {
  itemList: Item[];

  categoryList: string[];

  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  resetCart: () => void;

  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;

  categoryFilter: string;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const SORT_METHODS = {
  asc: 'asc',
  desc: 'desc',
};

export default PROJECT_CONTEXT_DEFAULTS;
