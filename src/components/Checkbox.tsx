import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'

import { colors } from '../config/themes/appThemes'

interface CheckboxProps {
  onChange: (value: string) => void
  value: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ onChange, value }) => {
  const [isChecked, setIsChecked] = React.useState(false)

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev)
    onChange(!isChecked ? 'checked' : 'unchecked')
  }

  return (
    <Pressable style={styles.container} onPress={toggleCheckbox}>
      <View style={[styles.checkbox, isChecked && styles.checked]} />
      <Text style={styles.text}>Recuerdame</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.neutralBase,
    marginRight: 10,
  },
  checked: {
    backgroundColor: colors.blueBase,
  },
  text: {
    fontSize: 16,
    color: colors.neutralBase,
  },
})

export default Checkbox
