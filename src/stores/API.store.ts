import axios from 'axios';
import { IRootStore } from 'Store';

export const createApiStore = (_root: IRootStore) => {
  const store = {
    fetchBooks: async () => {
      const res = await axios.get('http://localhost:3000/book');
      return res.data;
    },

    addBook: async (title: string) => {
      try {
        const res = await axios.post('http://localhost:3000/book', { title });

        return res.data;
      } catch (error) {
        console.warn('error creating book', error);
      }
    },
  };

  return store;
};
