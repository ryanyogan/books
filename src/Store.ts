import { createContext, useContext } from 'react';
import { createUIStore } from './stores/UI.store';

export interface IRootStore {
  ui: ReturnType<typeof createUIStore>;
}

const createRootStore = (): IRootStore => {
  const store: any = {};

  store.ui = createUIStore(store);

  return store;
};

export const root = createRootStore();
export const StoreContext = createContext<IRootStore>(root);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
