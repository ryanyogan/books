import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore, root } from '../Store';

interface IBook {
  title: string;
  createAt: string;
}

export const createUIStore = (_root: IRootStore) => {
  const store = makeAutoObservable({
    books: [] as IBook[],

    get uppercaseBooks(): IBook[] {
      return store.books.map((book) => ({
        ...book,
        title: book.title.toUpperCase(),
      }));
    },

    async addBook(title: string) {
      const books = await root.api.addBook(title);

      if (books) {
        runInAction(() => {
          store.books = books;
        });
      }
    },

    async fetchBooks() {
      const books = await root.api.fetchBooks();

      runInAction(() => {
        store.books = books;
      });
    },
  });

  return store;
};
