import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { CategoryCard } from '../components/CategoryCard'
import { ContainerMain } from '../components/ContainerMain'
import { GridView } from '../components/GridView'
import { SearchIcon } from '../components/icons/Icons'
import { StackParamList } from '../navigators/StackNavigation'

type CategoriesProps = NativeStackScreenProps<StackParamList, 'Categories'>

const categories = [
  { name: 'Memoria RAM', icon: <SearchIcon height={30} width={30} /> },
  { name: 'Memoria RAM', icon: <SearchIcon height={30} width={30} /> },
  { name: 'Memoria RAM', icon: <SearchIcon height={30} width={30} /> },
  { name: 'Memoria RAM', icon: <SearchIcon height={30} width={30} /> },
]

export const CategoriesScreen: React.FC<CategoriesProps> = (props) => {
  const { navigation } = props

  return (
    <ContainerMain>
      <GridView
        data={categories}
        RenderItem={({ name, icon }) => (
          <CategoryCard
            name={name}
            icon={icon}
            onPress={() => navigation.navigate('FilteredCategory')}
          />
        )}
      />
    </ContainerMain>
  )
}
