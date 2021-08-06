import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useStore } from '../Store';
import { tw } from 'Tailwind';
import { useDynamicColor } from 'libs';

export const Books = observer(() => {
  const root = useStore();
  const [title, setTitle] = useState('');
  const dc = useDynamicColor();

  const fetchBooks = useCallback(() => {
    root.ui.fetchBooks();
  }, [root.ui]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const buttonColor = dc('bg-tangerine', 'bg-cyan');

  return (
    <View style={tw('p-3')}>
      <Text style={tw('font-bold')}>Resources to study</Text>
      {root.ui.uppercaseBooks.map((book) => (
        <View key={book.createAt} style={tw('p-1')}>
          <Text style={tw('text-sm')}>{book.title}</Text>
        </View>
      ))}

      <Text style={tw('font-bold mt-6 mb-2')}>New Book / Video / Tutorial</Text>
      <View style={tw('flex-row')}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={tw('flex-1 bg-white rounded p-1')}
          placeholder="Resource..."
        />
        <TouchableOpacity
          onPress={() => root.ui.addBook(title)}
          style={tw(`${buttonColor} items-center p-2 rounded ml-2 w-32`)}>
          <Text style={tw('text-white')}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
