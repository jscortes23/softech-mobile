import { StyleSheet } from 'react-native'

export const fontSize = {
  largeTitle: 72,
  title1: 32,
  title2: 24,
  subtitle1: 20,
  subtitle2: 18,
  body1: 16,
  body2: 14,
  caption1: 12,
}

export const colors = {
  blue10: '#E3F1FF',
  blue40: '#71BBFF',
  blueBase: '#0085FF',
  blue80: '#0058AA',
  blue100: '#002C55',

  red10: '#FDEAE7',
  red40: '#F8BFB7',
  redBase: '#EB4028',
  red80: '#A82210',
  red100: '#380B05',

  neutral10: '#F4F8FA',
  neutral40: '#BBCAD2',
  neutralBase: '#5F7896',
  neutral80: '#36485C',
  neutral100: '#172026',

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
  blueBase: {
    color: colors.blueBase,
  },
  blue80: {
    color: colors.blue80,
  },
  blue100: {
    color: colors.blue100,
  },

  red10: {
    color: colors.red10,
  },
  red40: {
    color: colors.red40,
  },
  redBase: {
    color: colors.redBase,
  },
  red80: {
    color: colors.red80,
  },
  red100: {
    color: colors.red100,
  },

  neutral10: {
    color: colors.neutral40,
  },
  neutral40: {
    color: colors.neutral40,
  },
  neutralBase: {
    color: colors.neutralBase,
  },
  neutral80: {
    color: colors.neutral80,
  },
  neutral100: {
    color: colors.neutral100,
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

export const styleFontWeight = StyleSheet.create({
  bold: {
    fontWeight: '600',
  },
  regular: {
    fontWeight: '400',
  },
})
