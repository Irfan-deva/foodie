import React, { useState } from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';

const MyComponent = () => {
  const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'orange', color: 'orange' },
    { name: 'grapes', color: 'green' },
    { name: 'pear', color: 'yellow' }, {}
  ]
  const [searchQuery, setSearchQuery] = useState('');
  const matchingItems = fruits.filter(item => item['name'].includes(searchQuery));
  const nonMatchingItems = fruits.filter(item => !item['name'].includes(searchQuery));
  const combinedData = matchingItems.concat(nonMatchingItems);


  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={combinedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default MyComponent;
