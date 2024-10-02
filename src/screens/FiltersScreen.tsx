import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { ContainerMain } from '../components/ContainerMain'
import { Dropdown } from '../components/Dropdown'
import { RangeSlider } from '../components/RangeSlider'
import { Search } from '../components/Search'
import { colors } from '../config/themes/appThemes'
import { BrandType } from '../models/Brand'
import { StackParamList } from '../navigators/StackNavigation'
import { getAllBrands } from '../services/getAllBrands'

type FiltersProps = NativeStackScreenProps<StackParamList, 'Filters'>

export const FiltersScreen: React.FC<FiltersProps> = (props) => {
  const { navigation } = props
  const [brands, setBrands] = useState<BrandType[]>([])

  useEffect(() => {
    getAllBrands().then((data) => setBrands(data))
  }, [])

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
            {brands.map((brand) => (
              <Checkbox key={brand.id_marca} value={brand.nombre_marca} />
            ))}
          </ScrollView>
        </Dropdown>
      </View>
      <View style={styles.button}>
        <ButtonPrimary
          text="Apply"
          variant="primary"
          onPress={() => navigation.navigate('Products')}
        />
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
