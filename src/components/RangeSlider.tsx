import { Slider } from '@miblanchard/react-native-slider'
import React, { useCallback, useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { StyledText } from './StyledText'
import { colors, fontSize } from '../config/themes/appThemes'

interface RangeSliderProps {
  min: number
  max: number
  onValueChange: (values: [number, number]) => void
}

export const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const { min, max, onValueChange } = props
  const [range, setRange] = useState<[number, number]>([min, max])

  const validateInput = (value: string, min: number, max: number): number => {
    let numValue = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(numValue)) numValue = min
    if (numValue < min) numValue = min
    if (numValue > max) numValue = max
    return numValue
  }

  const handleValueChange = useCallback(
    (values: number | number[]) => {
      const newRange = Array.isArray(values)
        ? (values as [number, number])
        : ([values, values] as [number, number])
      setRange(newRange)
      onValueChange(newRange)
    },
    [onValueChange],
  )

  const handleInputChange = useCallback(
    (value: string, index: number) => {
      const numValue = validateInput(value, min, max)
      const newRange = [...range] as [number, number]
      newRange[index] = numValue
      setRange(newRange)
      onValueChange(newRange)
    },
    [min, max, range, onValueChange],
  )

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <StyledText body1 neutral40>
          From
        </StyledText>
        <StyledText body1 neutral40>
          To
        </StyledText>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={range[0].toString()}
          onChangeText={(value) => handleInputChange(value, 0)}
          keyboardType="numeric"
        />
        <View style={styles.separator}></View>
        <TextInput
          style={styles.input}
          value={range[1].toString()}
          onChangeText={(value) => handleInputChange(value, 1)}
          keyboardType="numeric"
        />
      </View>
      <Slider
        value={range}
        onValueChange={handleValueChange}
        minimumValue={min}
        maximumValue={max}
        step={1}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        minimumTrackTintColor={colors.blueBase}
        maximumTrackTintColor={colors.neutral40}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 53,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.neutral40,
    borderRadius: 4,
    padding: 8,
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.body2,
  },
  separator: {
    width: 20,
    height: 1,
    backgroundColor: colors.neutral40,
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: colors.blueBase,
  },
})
