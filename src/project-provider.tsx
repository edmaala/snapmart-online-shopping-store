import {
  ReactNode,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import PROJECT_CONTEXT_DEFAULTS from './constants';
import { CartItem, Item } from './models/item';

export const ProjectContext = createContext(PROJECT_CONTEXT_DEFAULTS);

const localStorageCartItems = localStorage.getItem('cartItems');
const cartItemsDefaultValue: CartItem[] = localStorageCartItems
  ? JSON.parse(localStorageCartItems)
  : PROJECT_CONTEXT_DEFAULTS.cartItems;

export default function ProjectProvider({ children }: Props) {
  const [itemList, setItemList] = useState(PROJECT_CONTEXT_DEFAULTS.itemList);

  const [cartItems, setCartItems] = useState(cartItemsDefaultValue);

  const [headerHeight, setHeaderHeight] = useState(
    PROJECT_CONTEXT_DEFAULTS.headerHeight
  );

  const [categoryFilter, setCategoryFilter] = useState(
    PROJECT_CONTEXT_DEFAULTS.categoryFilter
  );

  const resetCart = useCallback(
    () => setCartItems(PROJECT_CONTEXT_DEFAULTS.cartItems),
    []
  );

  const categoryList = useMemo(
    () =>
      itemList.reduce((accItemListArray: string[], { category }) => {
        if (!accItemListArray.includes(category))
          return [...accItemListArray, category];

        return accItemListArray;
      }, []),
    [itemList]
  );

  useEffect(() => {
    const fetchItemList = async () => {
      try {
        const response = await fetch('/src/data/items.json');
        const itemListJson = await response.json();
        setItemList(itemListJson);
      } catch {
        setItemList([]);
      }
    };

    const localStorageItemList = localStorage.getItem('itemList');
    const parsedItemList: Item[] = localStorageItemList
      ? JSON.parse(localStorageItemList)
      : [];

    if (parsedItemList?.length) setItemList(parsedItemList);
    else fetchItemList();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  const memoizedContextValues = useMemo(
    () => ({
      itemList,
      headerHeight,
      categoryFilter,
      categoryList,
      cartItems,
      setHeaderHeight,
      setCategoryFilter,
      setCartItems,
      resetCart,
    }),
    [itemList, headerHeight, categoryFilter, cartItems, categoryList, resetCart]
  );

  return (
    <ProjectContext.Provider value={memoizedContextValues}>
      {children}
    </ProjectContext.Provider>
  );
}

type Props = {
  children: ReactNode;
};
