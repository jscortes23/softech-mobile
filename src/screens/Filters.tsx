import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { Dropdown } from '../components/Dropdown'
import { RangeSlider } from '../components/RangeSlider'
import { Search } from '../components/Search'

export const Filters = () => {
  return (
    <View style={styles.container}>
      <Dropdown title="Price">
        <RangeSlider min={0} max={10000} onValueChange={() => [0, 1000]} />
      </Dropdown>
      <Dropdown title="Brand">
        <Search value="Search" />
        <Checkbox value="Apple" />
        <Checkbox value="Samsung" />
        <Checkbox value="Xiaomi" />
        <Checkbox value="Poco" />
        <Checkbox value="OPPO" />
        <Checkbox value="Honor" />
        <Checkbox value="Motorola" />
        <Checkbox value="Nokia" />
        <Checkbox value="Realme" />
      </Dropdown>
      <ButtonPrimary text="Apply" onPress={() => {}} variant="primary" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    textShadowColor: '#000000',
  },
})

export default Filters
