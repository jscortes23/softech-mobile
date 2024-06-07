import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { SearchIcon } from './icons/Icons'

interface SearchProps {
  value: string
}

const SearchBar: React.FC<SearchProps> = (props) => {
  return (
    <View style={styles.container}>
      <SearchIcon width={24} height={24} />
      <TextInput style={styles.input} placeholder="Buscar" placeholderTextColor="#888" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 315,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
})

export default SearchBar
