import { makeAutoObservable } from 'mobx';
import { IRootStore } from '../Store';

export const createUIStore = (_root: IRootStore) => {
  const store = makeAutoObservable({
    books: [
      {
        title: 'Lord of the rings',
        createdAt: '2021-02-02-T12:00:00Z',
      },
      {
        title: 'Dune',
        createdAt: '2021-02-02-T12:00:00Z',
      },
      {
        title: 'True Lies',
        createdAt: '2021-02-02-T12:00:00Z',
      },
    ],

    get uppercaseBooks(): { title: string; createdAt: string }[] {
      return store.books.map((book) => ({
        ...book,
        title: book.title.toUpperCase(),
      }));
    },

    addBook(title: string) {
      store.books.push({ title, createdAt: new Date().toISOString() });
    },
  });

  return store;
};
