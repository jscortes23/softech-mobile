import React from 'react'
import { ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { Banner } from '../components/Banner'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { Hero } from '../components/Hero'
import { StackParamList } from '../navigators/StackNavigation'

type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigation } = props

  return (
    <ScrollView>
      <Banner
        description="Con diseño esbeltos y refinado, materiales de primera calidad."
        imageUrl="https://dlcdnwebimgs.asus.com/gain/9E8B3BDF-4BB7-45CC-B7BE-F38810969B9A/w1000/h732"
        subtitle="Rendimiento y Precisión."
        title="ROG Zephyrus"
        onPress={() => navigation.navigate('ProductDetails')}
      />
      <Hero
        description="Diseñado para un desempeño avanzado en los juegos."
        image="https://symcomputadores.com/wp-content/uploads/2023/03/LOGITECH-G502-HERO-1-1.png"
        title="MOUSE LOGITECH G502 HERO"
        variant="secondary"
      />
      <Hero
        description="Una forma envolvente de disfrutar del entretenimiento."
        image="https://techcart.com.au/wp-content/uploads/2023/11/75699-Meta-Quest-3-VR-Headset-1286GB.png"
        title="Meta Quest 3 VR"
        variant="primary"
      />
      <Hero
        description="Ofrece eficiencia energetica con certificacion 80 Plus, garantizando un rendimiento estable y confiable."
        image="https://http2.mlstatic.com/D_NQ_NP_782424-MPE46081621979_052021-O.webp"
        title="Evga 500w 80 Plus"
        variant="secondary"
      />
      <Hero
        description="Lenovo LOQ nació de la idea de que los gamers son más fuertes juntos. Nuestro nombre, LOQ, evoca un vínculo, una conexión que, una vez forjada, es irrompible."
        image="https://p3-ofp.static.pub/fes/cms/2023/04/10/mjfgo6t9we2x4ue4pz0rffozsflzm0337989.png"
        title="Lenovo LOQ"
        variant="primary">
        <View>
          <ButtonPrimary variant="primary" text="Compra Ahora"></ButtonPrimary>
        </View>
      </Hero>
    </ScrollView>
  )
}
