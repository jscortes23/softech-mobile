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
    <View>
      <StyledText style={styles.title} title2 neutral100>
        Overview
      </StyledText>

      <StyledText style={styles.icono} body2 neutral80>
        <RefreshIcon height={13} width={16} color={colors.neutral80}></RefreshIcon>
        {updateTime}
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  icono: {
    justifyContent: 'flex-start',
  },
  title: {
    padding: 10,
  },
})
