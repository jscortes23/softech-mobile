import React, { useState } from 'react'
import { StyleSheet, Pressable, View } from 'react-native'

import { StyledText } from './StyledText'
import { colors } from '../config/themes/appThemes'

interface CheckboxProps {
  onChange?: (value: string) => void
  value: string
  textColor?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ onChange, value, textColor }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev)
    onChange && onChange(isChecked ? '' : value)
  }

  return (
    <Pressable style={styles.container} onPress={toggleCheckbox}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        <StyledText neutralBase caption1 center white>
          {isChecked ? '✔' : ''}
        </StyledText>
      </View>

      <StyledText style={[styles.checkboxText, textColor && { color: textColor }]}>
        {value}
      </StyledText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  checkbox: {
    width: 16.33,
    height: 15.67,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#BBCAD2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: colors.blueBase,
    borderColor: colors.blueBase,
  },
  checkboxText: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 8,
  },
})

export default Checkbox
