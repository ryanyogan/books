import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Text, TextInput, View } from 'react-native';
import { useStore } from '../Store';

export const Books = observer(() => {
  const root = useStore();
  const [title, setTitle] = useState('');

  const fetchBooks = useCallback(() => {
    root.ui.fetchBooks();
  }, [root.ui]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <View>
      {root.ui.uppercaseBooks.map((book) => (
        <View key={book.title}>
          <Text>{book.title}</Text>
        </View>
      ))}

      <TextInput value={title} onChangeText={setTitle} />
      <Button title="Add Button" onPress={() => root.ui.addBook(title)} />
    </View>
  );
});
