import { StyleSheet, View } from 'react-native'

interface ContainerMainProps {
  children: React.ReactNode
  backgroundColor?: string
  flex?: number
}

export const ContainerMain: React.FC<ContainerMainProps> = (props) => {
  const { children, backgroundColor, flex } = props

  return <View style={[styles.container, { backgroundColor, flex }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
})
