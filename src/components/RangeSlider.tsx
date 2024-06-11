import { Slider } from '@miblanchard/react-native-slider'
import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

interface RangeSliderProps {
  min: number
  max: number
  onValueChange: (values: [number, number]) => void
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, onValueChange }) => {
  const [range, setRange] = useState<[number, number]>([min, max])

  const handleValueChange = (values: number | number[]) => {
    const newRange = Array.isArray(values)
      ? (values as [number, number])
      : ([values, values] as [number, number])
    setRange(newRange)
    onValueChange(newRange)
  }

  const handleInputChange = (value: string, index: number) => {
    let numValue = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(numValue)) numValue = min
    if (numValue < min) numValue = min
    if (numValue > max) numValue = max

    const newRange = [...range] as [number, number]
    newRange[index] = numValue
    setRange(newRange)
    onValueChange(newRange)
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.label}>To</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={range[0].toString()}
            onChangeText={(value) => handleInputChange(value, 0)}
            keyboardType="numeric"
          />
          <Text style={styles.separator}>-</Text>
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
          minimumTrackTintColor="#0085FF"
          maximumTrackTintColor="#d3d3d3"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 4,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    width: '40%',
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  separator: {
    fontSize: 18,
    color: '#a3a3a3',
    marginHorizontal: 10,
  },
  label: {
    fontSize: 14,
    color: '#a3a3a3',
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0085FF',
  },
})

export default RangeSlider
