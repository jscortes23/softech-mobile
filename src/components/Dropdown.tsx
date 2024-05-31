import { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'

import { StyledText } from './StyledText'
import { ChevronUpIcon, ChevronDownIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

interface DropdownProps {
  title: string
  children: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { title, children } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleDropdown} style={styles.header}>
        <StyledText subtitle2>{title}</StyledText>
        {isOpen ? (
          <ChevronUpIcon width={24} height={24} color={colors.black} />
        ) : (
          <ChevronDownIcon width={24} height={24} color={colors.black} />
        )}
      </Pressable>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    rowGap: 10,
  },
  header: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    alignItems: 'center',
    borderBottomColor: colors.neutralBase,
  },
  content: {
    paddingVertical: 10,
  },
})
