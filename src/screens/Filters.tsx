import { ScrollView, StyleSheet, View } from 'react-native'

import { Filters } from './Filters'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { ContainerMain } from '../components/ContainerMain'
import { Dropdown } from '../components/Dropdown'
import { RangeSlider } from '../components/RangeSlider'
import { Search } from '../components/Search'
import { colors } from '../config/themes/appThemes'

export const Filters = () => {
  return (
    <ContainerMain flex={1} backgroundColor={colors.white}>
      <View style={styles.container}>
        <Dropdown title="Price">
          <RangeSlider min={0} max={10000} onValueChange={() => [0, 1000]} />
        </Dropdown>
        <Dropdown title="Brand">
          <View style={styles.containerSearch}>
            <Search value="Search" />
          </View>
          <ScrollView
            style={styles.containerOptions}
            contentContainerStyle={{ rowGap: 8 }}
            persistentScrollbar={true}>
            <Checkbox value="Apple" />
            <Checkbox value="Samsung" />
            <Checkbox value="Xiaomi" />
            <Checkbox value="Poco" />
            <Checkbox value="OPPO" />
            <Checkbox value="Honor" />
            <Checkbox value="Motorola" />
            <Checkbox value="Nokia" />
            <Checkbox value="Realme" />
            <Checkbox value="Apple" />
            <Checkbox value="Samsung" />
            <Checkbox value="Xiaomi" />
            <Checkbox value="Poco" />
            <Checkbox value="OPPO" />
            <Checkbox value="Honor" />
            <Checkbox value="Motorola" />
            <Checkbox value="Nokia" />
            <Checkbox value="Realme" />
          </ScrollView>
        </Dropdown>
      </View>
      <View style={styles.button}>
        <ButtonPrimary text="Apply" variant="primary" />
      </View>
    </ContainerMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 24,
  },
  containerSearch: {
    marginBottom: 16,
  },
  containerOptions: {
    maxHeight: 210,
  },
  button: {
    marginBottom: 30,
  },
})
