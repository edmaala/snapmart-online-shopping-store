import React from 'react';

const PROJECT_CONTEXT_DEFAULTS: ProjectContext = {
  headerHeight: 0,
  setHeaderHeight() {},
};

type ProjectContext = {
  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
};

export default PROJECT_CONTEXT_DEFAULTS;
