import { useState } from 'react'
import { StyleSheet, Pressable, View } from 'react-native'

import { StyledText } from './StyledText'
import { colors } from '../config/themes/appThemes'

interface CheckboxProps {
  onChange?: (value: string) => void
  value: string
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { onChange, value } = props
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
      <StyledText neutralBase body2>
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
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.neutralBase,
  },
  checked: {
    backgroundColor: colors.blueBase,
    borderColor: colors.blueBase,
  },
})
