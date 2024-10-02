import { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { ContainerMain } from '../components/ContainerMain'
import { StyledText } from '../components/StyledText'
import { BgTwoColor } from '../components/backgrounds/BgTwoColor'
import { BellIcon } from '../components/icons/Icons'
import { colors } from '../config/themes/appThemes'
import { AuthContext } from '../context/useAuth'
import { StackParamList } from '../navigators/StackNavigation'
import { getLogout } from '../services/getLogout'
import { getUserData } from '../services/getUserData'

type UserScreenProps = NativeStackScreenProps<StackParamList, 'UserData'>

interface Client {
  data: {
    email: string
    tipo_identificacion_id: number
    numero_identificacion_cliente: string
    nombre_cliente: string
    apellido_cliente: string
    password: string
    telefono_cliente: string
    direccion_entrega_cliente: string
    fecha_nacimiento_cliente: string
    ciudad_id: number
  }
}

export const UserScreen: React.FC<UserScreenProps> = (props) => {
  const [userData, setUserData] = useState<Client>()
  const { token, setToken } = useContext(AuthContext)
  const [isLogout, setIsLogout] = useState(false)
  const { navigation } = props

  useEffect(() => {
    if (token) {
      getUserData(token).then((data) => setUserData(data))
    }
  }, [])

  const handleLogout = async () => {
    if (token) {
      const res = await getLogout(token)

      setIsLogout(true)

      setToken && setToken('')

      navigation.navigate('Home')
    }
  }

  return (
    <BgTwoColor colors={[colors.blueBase, colors.blue10]}>
      <ContainerMain>
        <View style={styles.header}>
          <StyledText subtitle1 white bold>
            Logo Here
          </StyledText>
          <BellIcon width={19} height={22} color={colors.white} />
        </View>

        <View style={[styles.userInfoContainer, styles.shadowProp]}>
          <StyledText title1 center>
            Mi perfil
          </StyledText>
          <StyledText body1 black>
            Nombre: {`${userData?.data.nombre_cliente} ${userData?.data.apellido_cliente}`}
          </StyledText>
          <StyledText body1 black>
            Email: {`${userData?.data.email}`}
          </StyledText>
          <StyledText body1 black>
            Ciudad: Cali
          </StyledText>
          <StyledText body1 black>
            Teléfono: {`${userData?.data.telefono_cliente}`}
          </StyledText>
          <StyledText body1 black>
            Dirección: {`${userData?.data.direccion_entrega_cliente}`}
          </StyledText>

          <View style={styles.buttonContainer}>
            <ButtonPrimary
              text="Logout"
              variant="primary"
              onPress={() => {
                handleLogout()
              }}
            />
          </View>
        </View>
      </ContainerMain>
    </BgTwoColor>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 49,
    marginBottom: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    backgroundColor: colors.white,
    borderRadius: 40,
    padding: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  shadowProp: {
    shadowColor: 'rgba(51, 102, 204, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    rowGap: 20,
    marginTop: 41,
  },
})
