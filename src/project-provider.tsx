import { ReactNode, createContext, useState, useMemo, useEffect } from 'react';
import PROJECT_CONTEXT_DEFAULTS from './constants';

export const ProjectContext = createContext(PROJECT_CONTEXT_DEFAULTS);

export default function ProjectProvider({ children }: Props) {
  const [itemList, setItemList] = useState(PROJECT_CONTEXT_DEFAULTS.itemList);

  const [headerHeight, setHeaderHeight] = useState(
    PROJECT_CONTEXT_DEFAULTS.headerHeight
  );

  const [categoryFilter, setCategoryFilter] = useState(
    PROJECT_CONTEXT_DEFAULTS.categoryFilter
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
      setHeaderHeight,
      setCategoryFilter,
    }),
    [itemList, headerHeight, categoryFilter, categoryList]
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
