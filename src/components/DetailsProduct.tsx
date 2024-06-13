import React from 'react'
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

export const DetailsProduct: React.FC<DetailsProductProps> = ({
  description,
  category,
  dimensions,
  weight,
  brand,
}) => {
  return (
    <View style={styles.container}>
      <StyledText black title2 style={styles.title}>
        Description
      </StyledText>
      <StyledText neutral80 body2 style={styles.description}>
        {description}
      </StyledText>
      <StyledText black title2 style={styles.detailsTitle}>
        Details
      </StyledText>
      <View style={styles.detailRow}>
        <StyledText neutral80 body2 style={styles.detailLabel}>
          Category
        </StyledText>
        <StyledText neutral80 body2 style={styles.detailValue}>
          {category}
        </StyledText>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <StyledText neutral80 body2 style={styles.detailLabel}>
            Dimensions
          </StyledText>
          <StyledText neutral80 body2 style={styles.detailValue}>
            {dimensions}
          </StyledText>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <StyledText neutral80 body2 style={styles.detailLabel}>
              Weight
            </StyledText>
            <StyledText neutral80 body2 style={styles.detailValue}>
              {weight}
            </StyledText>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <StyledText neutral80 body2 style={styles.detailLabel}>
                Brand
              </StyledText>
              <StyledText neutral80 body2 style={styles.detailValue}>
                {brand}
              </StyledText>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral40,
  },
  title: {
    marginBottom: 24,
  },
  description: {
    marginBottom: 24,
    lineHeight: 20,
  },
  detailsTitle: {
    marginBottom: 8,
  },
  detailsContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.neutral40,
    paddingTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    fontWeight: '600',
  },
  detailValue: {
    fontWeight: '400',
  },
})
