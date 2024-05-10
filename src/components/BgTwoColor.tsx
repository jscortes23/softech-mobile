import { Dimensions, StyleSheet, View } from 'react-native'

interface BgTwoColorProps {
  colors: string[]
  children: React.ReactNode
}

const { width } = Dimensions.get('window')

export const BgTwoColor: React.FC<BgTwoColorProps> = (props) => {
  const { children, colors } = props

  return (
    <View style={styles.container}>
      <View style={[styles.background1, { backgroundColor: colors[0] }]}></View>
      <View style={[styles.background2, { backgroundColor: colors[1] }]}></View>
      <View style={styles.children}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background1: {
    flex: 0.8,
  },
  background2: {
    flex: 0.2,
  },
  children: {
    position: 'absolute',
    width,
  },
})
