import { StyleSheet, View } from 'react-native'

interface ContainerMainProps {
  children: React.ReactNode
}

export const ContainerMain: React.FC<ContainerMainProps> = (props) => {
  const { children } = props

  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
})
