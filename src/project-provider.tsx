import { ReactNode, createContext, useState, useMemo } from 'react';
import PROJECT_CONTEXT_DEFAULTS from './constants';

export const ProjectContext = createContext(PROJECT_CONTEXT_DEFAULTS);

export default function ProjectProvider({ children }: Props) {
  const [headerHeight, setHeaderHeight] = useState(
    PROJECT_CONTEXT_DEFAULTS.headerHeight
  );

  const memoizedContextValues = useMemo(
    () => ({ headerHeight, setHeaderHeight }),
    [headerHeight]
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
