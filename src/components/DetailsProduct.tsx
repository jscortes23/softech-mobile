import { View, StyleSheet } from 'react-native'

import { StyledText } from './StyledText'
import { colors } from '../config/themes/appThemes'

interface DetailsProductProps {
  description: string
  category: string
  dimensions: string
  weight: string
  brand: string
}

export const DetailsProduct: React.FC<DetailsProductProps> = (props) => {
  const { description, category, dimensions, weight, brand } = props
  return (
    <View style={styles.container}>
      <StyledText black title2>
        Description
      </StyledText>
      <StyledText neutral80 body2 style={styles.description}>
        {description}
      </StyledText>

      <View style={styles.detailsContainer}>
        <StyledText black title2>
          Details
        </StyledText>
        <View style={styles.detailRow}>
          <StyledText neutral80 body2>
            Category
          </StyledText>
          <StyledText neutral80 body2>
            {category}
          </StyledText>
        </View>
        <View style={styles.detailRow}>
          <StyledText neutral80 body2>
            Dimensions
          </StyledText>
          <StyledText neutral80 body2>
            {dimensions}
          </StyledText>
        </View>
        <View style={styles.detailRow}>
          <StyledText neutral80 body2>
            Weight
          </StyledText>
          <StyledText neutral80 body2>
            {weight}
          </StyledText>
        </View>
        <View style={styles.detailRow}>
          <StyledText neutral80 body2>
            Brand
          </StyledText>
          <StyledText neutral80 body2>
            {brand}
          </StyledText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderRadius: 8,
    rowGap: 32,
  },
  description: {
    lineHeight: 20,
  },
  detailsContainer: {
    rowGap: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral40,
  },
})
