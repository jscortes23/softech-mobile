import { StyleSheet, View } from 'react-native'

import { widthDevice } from '../config/constants/dimesionsDevice'

interface GridViewProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
  columns?: number
  padding?: number
}

export const GridView = <T extends any>(props: GridViewProps<T>) => {
  const { RenderItem, data, columns = 2, padding = 8 } = props
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index} style={{ width: `${100 / columns}%`, padding }}>
            {RenderItem(item)}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: widthDevice,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
