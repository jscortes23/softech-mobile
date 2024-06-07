import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Alert } from 'react-native'

import { SearchIcon } from './icons/Icons'
import { colors, fontSize } from '../config/themes/appThemes'

interface SearchProps {
  value: string
}

export const Search: React.FC<SearchProps> = (props) => {
  return (
    <View style={styles.container}>
      <SearchIcon width={24} height={24} color={colors.neutral80} />
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor={colors.neutral80}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.neutral10,
    columnGap: 8,
  },
  input: {
    flex: 1,
    fontSize: fontSize.body1,
    color: colors.neutral80,
  },
})
