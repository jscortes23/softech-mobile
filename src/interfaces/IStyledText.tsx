import { ViewStyle } from 'react-native'

export interface StyledTextProps {
  children: React.ReactNode
  largeTitle?: boolean
  style?: ViewStyle | object
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
  pink10?: boolean
  pink40?: boolean
  pink80?: boolean
  pink100?: boolean
  pinkBase?: boolean
  neutral40?: boolean
  neutral80?: boolean
  neutral100?: boolean
  neutralBase?: boolean
  green10?: boolean
  green40?: boolean
  green80?: boolean
  green100?: boolean
  greenBase?: boolean
  brand10?: boolean
  brand40?: boolean
  brand80?: boolean
  brand100?: boolean
  brandBase?: boolean
  black?: boolean
  white?: boolean
  center?: boolean
  justify?: boolean
  right?: boolean
  left?: boolean
  regular?: boolean
  bold?: boolean
}
