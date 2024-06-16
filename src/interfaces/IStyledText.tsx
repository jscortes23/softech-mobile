import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

export interface StyledTextProps {
  children: React.ReactNode
  largeTitle?: boolean
  style?: ViewStyle | object | ViewStyle | TextStyle | ImageStyle
  title1?: boolean
  title2?: boolean
  subtitle1?: boolean
  subtitle2?: boolean
  body1?: boolean
  body2?: boolean
  caption1?: boolean
  blue10?: boolean
  blue40?: boolean
  blue80?: boolean
  blue100?: boolean
  blueBase?: boolean
  red10?: boolean
  red40?: boolean
  red80?: boolean
  red100?: boolean
  redBase?: boolean
  neutral10?: boolean
  neutral40?: boolean
  neutral80?: boolean
  neutral100?: boolean
  neutralBase?: boolean
  black?: boolean
  white?: boolean
  center?: boolean
  justify?: boolean
  right?: boolean
  left?: boolean
  regular?: boolean
  bold?: boolean
}
