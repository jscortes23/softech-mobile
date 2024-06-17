import React from 'react'
import { ScrollView } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { Banner } from '../components/Banner'
import { StackParamList } from '../navigators/StackNavigation'

type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigation } = props

  return (
    <ScrollView>
      <Banner
        description="aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        imageUrl="https://clipart-library.com/data_images/6103.png"
        subtitle="aaaaaaaaaaaaaaaaaaaaaaaaa"
        title="aaaaaaaaaaaaaaaaaaaaa"
        onPress={() => navigation.navigate('ProductDetails')}
      />
    </ScrollView>
  )
}
