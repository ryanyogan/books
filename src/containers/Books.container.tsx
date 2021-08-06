import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Text, View } from 'react-native';
import { useStore } from '../Store';

export const Books = observer(() => {
  const root = useStore();

  return (
    <View>
      {root.ui.uppercaseBooks.map((book) => (
        <View key={book.title}>
          <Text>{book.title}</Text>
        </View>
      ))}
      <Button title="Add Button" onPress={() => root.ui.addBook('Test')} />
    </View>
  );
});
