import {
  ReactNode,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import PROJECT_CONTEXT_DEFAULTS from './constants';

export const ProjectContext = createContext(PROJECT_CONTEXT_DEFAULTS);

export default function ProjectProvider({ children }: Props) {
  const [itemList, setItemList] = useState(PROJECT_CONTEXT_DEFAULTS.itemList);

  const [cartItems, setCartItems] = useState(
    PROJECT_CONTEXT_DEFAULTS.cartItems
  );

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

    fetchItemList();
  }, []);

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
