import { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardTypeOptions,
  InputModeOptions,
} from 'react-native'

import { StyledText } from './StyledText'
import { CrossedOutEyeIcon, EyeIcon } from './icons/Icons'
import { colors, fontSize } from '../config/themes/appThemes'

interface InputTextProps {
  onChangeText?: (text: string) => void
  onChange?: () => void
  value?: string
  placeholder: string
  placeholderTextColor?: string
  keyboardType?: KeyboardTypeOptions
  inputMode?: InputModeOptions
  label?: string
  secureTextEntry?: boolean
  error?: string
}

export const InputText: React.FC<InputTextProps> = (props) => {
  const {
    placeholder,
    keyboardType,
    label,
    onChange,
    onChangeText,
    placeholderTextColor,
    secureTextEntry,
    value,
    error,
  } = props

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const isState = error ? [styles.inputContainer, styles.invalid] : styles.inputContainer

  return (
    <View style={styles.container}>
      <StyledText body1 neutralBase>
        {label}
      </StyledText>
      <View style={isState}>
        <TextInput
          style={error ? [styles.input, styles.invalid] : styles.input}
          onChangeText={onChangeText}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor ?? colors.neutralBase}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && isPasswordVisible}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <EyeIcon width={24} height={24} color={colors.neutralBase} />
            ) : (
              <CrossedOutEyeIcon width={24} height={24} color={colors.neutralBase} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <StyledText caption1 redBase style={styles.error}>
          {error}
        </StyledText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    rowGap: 12,
  },
  error: {
    marginTop: -10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: colors.neutral40,
    borderWidth: 1,
    borderRadius: 9,
  },
  input: {
    flex: 1,
    fontSize: fontSize.body1,
    color: colors.neutralBase,
  },
  valid: {
    borderColor: '#00ff12',
  },
  invalid: {
    borderColor: colors.redBase,
    color: colors.redBase,
  },
})
