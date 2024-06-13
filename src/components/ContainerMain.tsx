import { StyleSheet, View } from 'react-native'

interface ContainerMainProps {
  children: React.ReactNode
  backgroundColor?: string
}

export const ContainerMain: React.FC<ContainerMainProps> = (props) => {
  const { children, backgroundColor } = props

  return <View style={[styles.container, { backgroundColor }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
})
