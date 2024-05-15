import { View, StyleSheet } from 'react-native'

import { StyledText } from './StyledText'
import { RefreshIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

interface OverviewProps {
  updateTime: string
}

export const Overview: React.FC<OverviewProps> = (props) => {
  const { updateTime } = props

  return (
    <View style={styles.container}>
      <StyledText title2 neutral100>
        Overview
      </StyledText>
      <View style={styles.content}>
        <RefreshIcon height={13} width={16} color={colors.neutral80} />
        <StyledText body2 neutral80>
          {updateTime}
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
    alignItems: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
})
