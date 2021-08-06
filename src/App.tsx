import { Books } from './containers/Books.container';
import React from 'react';
import { root, StoreProvider } from './Store';

export const App = () => {
  return (
    <StoreProvider value={root}>
      <Books />
    </StoreProvider>
  );
};
