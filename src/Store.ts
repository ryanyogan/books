import { createContext, useContext } from 'react';
import { createApiStore, createUIStore } from 'stores';

export interface IRootStore {
  ui: ReturnType<typeof createUIStore>;
  api: ReturnType<typeof createApiStore>;
}

const createRootStore = (): IRootStore => {
  const store: any = {};

  store.ui = createUIStore(store);
  store.api = createApiStore(store);

  return store;
};

export const root = createRootStore();
export const StoreContext = createContext<IRootStore>(root);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
