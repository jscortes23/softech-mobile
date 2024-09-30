import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { ContainerMain } from '../components/ContainerMain'
import { Dropdown } from '../components/Dropdown'
import { RangeSlider } from '../components/RangeSlider'
import { Search } from '../components/Search'
import { StyledText } from '../components/StyledText'
import { colors } from '../config/themes/appThemes'
import { StackParamList } from '../navigators/StackNavigation'
import { getAllBrands } from '../services/getAllBrands'
import { Brand } from '../types/Brand'

type FiltersProps = NativeStackScreenProps<StackParamList, 'Filters'>

export const FiltersScreen: React.FC<FiltersProps> = (props) => {
  const { navigation } = props
  const [minPrice, setMinPrice] = useState<number>()
  const [maxPrice, setMaxPrice] = useState<number>()
  const [brands, setBrands] = useState<Brand[]>()
  const [selectedBrand, setSelectedBrand] = useState<any[]>([])

  useEffect(() => {
    getAllBrands().then((data) => {
      setBrands(data)
    })
  }, [])

  const handleRemove = (index: string) => {
    const isExists = selectedBrand.find((item) => item === index)

    if (isExists) {
      // Elimina el elemento con el ID dado
      const updatedDataTable = selectedBrand.filter((item) => item !== index)
      console.log(index)
      setSelectedBrand(updatedDataTable)
    } else {
      setSelectedBrand((value: any) => {
        return [...value, index]
      })
    }
  }

  return (
    <ContainerMain flex={1} backgroundColor={colors.white}>
      <StyledText>
        Minimo: {minPrice} - Maximo: {maxPrice} - Marca: {selectedBrand?.join(' , ')}
      </StyledText>
      <View style={styles.container}>
        <Dropdown title="Price">
          <RangeSlider
            min={0}
            max={10000}
            onValueChange={([min, max]) => [setMinPrice(min), setMaxPrice(max)]}
          />
        </Dropdown>
        <Dropdown title="Brand">
          <View style={styles.containerSearch}>
            <Search value="Search" />
          </View>
          <FlatList
            contentContainerStyle={{ rowGap: 8 }}
            style={styles.containerOptions}
            persistentScrollbar={true}
            data={brands}
            renderItem={({ item }) => (
              <Checkbox
                key={item.id_marca}
                value={item.nombre_marca}
                onChange={(e) => {
                  if (e !== '') {
                    handleRemove(e)
                  }
                }}
              />
            )}
          />
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
