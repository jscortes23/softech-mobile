import { StyleSheet } from 'react-native'

export const fontSize = {
  largeTitle: 42,
  title1: 32,
  title2: 24,
  subtitle1: 20,
  subtitle2: 18,
  body1: 16,
  body2: 14,
  caption1: 12,
}

export const colors = {
  blue10: '#003370',
  blue40: '#00539A',
  blue80: '#0073E6',
  blue100: '#3F91FF',
  blueBase: '#6CB3FF',
  red10: '#470000',
  red40: '#800000',
  red80: '#B80000',
  red100: '#FF0000',
  redBase: '#FF4D4D',
  pink10: '#470047',
  pink40: '#800080',
  pink80: '#B800B8',
  pink100: '#FF00FF',
  pinkBase: '#FF4DFF',
  neutral40: '#666666',
  neutral80: '#999999',
  neutral100: '#CCCCCC',
  neutralBase: '#E6E6E6',
  green10: '#00370C',
  green40: '#005A17',
  green80: '#007C22',
  green100: '#009E2D',
  greenBase: '#00C238',
  brand10: '#FFA500',
  brand40: '#FFC04D',
  brand80: '#FFD67A',
  brand100: '#FFEAAD',
  brandBase: '#FFFFE0',
  black: '#000000',
  white: '#FFFFFF',
}

export const styleFontSize = StyleSheet.create({
  largeTitle: {
    fontSize: fontSize.largeTitle,
  },
  title1: {
    fontSize: fontSize.title1,
  },
  title2: {
    fontSize: fontSize.title2,
  },
  subtitle1: {
    fontSize: fontSize.subtitle1,
  },
  subtitle2: {
    fontSize: fontSize.subtitle2,
  },
  body1: {
    fontSize: fontSize.body1,
  },
  body2: {
    fontSize: fontSize.body2,
  },
  caption1: {
    fontSize: fontSize.caption1,
  },
})

export const styleColors = StyleSheet.create({
  blue10: {
    color: colors.blue10,
  },
  blue40: {
    color: colors.blue40,
  },
  blue80: {
    color: colors.blue80,
  },
  blue100: {
    color: colors.blue100,
  },
  blueBase: {
    color: colors.blueBase,
  },
  red10: {
    color: colors.red10,
  },
  red40: {
    color: colors.red40,
  },
  red80: {
    color: colors.red80,
  },
  red100: {
    color: colors.red100,
  },
  redBase: {
    color: colors.redBase,
  },
  pink10: {
    color: colors.pink10,
  },
  pink40: {
    color: colors.pink40,
  },
  pink80: {
    color: colors.pink80,
  },
  pink100: {
    color: colors.pink100,
  },
  pinkBase: {
    color: colors.pinkBase,
  },
  neutral40: {
    color: colors.neutral40,
  },
  neutral80: {
    color: colors.neutral80,
  },
  neutral100: {
    color: colors.neutral100,
  },
  neutralBase: {
    color: colors.neutralBase,
  },
  green10: {
    color: colors.green10,
  },
  green40: {
    color: colors.green40,
  },
  green80: {
    color: colors.green80,
  },
  green100: {
    color: colors.green100,
  },
  greenBase: {
    color: colors.greenBase,
  },
  brand10: {
    color: colors.brand10,
  },
  brand40: {
    color: colors.brand40,
  },
  brand80: {
    color: colors.brand80,
  },
  brand100: {
    color: colors.brand100,
  },
  brandBase: {
    color: colors.brandBase,
  },
  black: {
    color: colors.black,
  },
  white: {
    color: colors.white,
  },
})

export const alignText = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  justify: {
    textAlign: 'justify',
  },
})
