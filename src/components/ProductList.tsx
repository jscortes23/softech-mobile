import { StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'
import { SearchIcon } from './icons/Icons'

interface ProductListProps {
  name: string
  children: React.ReactNode
}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const { name, children } = props
  return (
    <>
      <View style={styles.header}>
        <StyledText subtitle1 neutral100>
          {name}
        </StyledText>
        <SearchIcon height={30} width={30} />
      </View>
      <View style={styles.body}>{children}</View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    paddingBottom: 5,
    flexDirection: 'row',
  },
  body: {
    flexDirection: 'column',
  },
})
