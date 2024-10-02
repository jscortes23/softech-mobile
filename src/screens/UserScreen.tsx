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
import { ClientType } from '../models/Client'
import { StackParamList } from '../navigators/StackNavigation'
import { getUserData } from '../services/getUserData'

type UserScreenProps = NativeStackScreenProps<StackParamList, 'UserData'>

export const UserScreen: React.FC<UserScreenProps> = (props) => {
  const [userData, setUserData] = useState<ClientType>()
  const { token } = useContext(AuthContext)

  useEffect(() => {
    if (token) {
      getUserData(token).then((data) => setUserData(data))
    }
  }, [])

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
            Nombre: {`${userData?.nombre_cliente} ${userData?.apellido_cliente}`}
          </StyledText>
          <StyledText body1 black>
            Email: {`${userData?.email}`}
          </StyledText>
          <StyledText body1 black>
            Ciudad: Bogotá
          </StyledText>
          <StyledText body1 black>
            Teléfono: {`${userData?.telefono_cliente}`}
          </StyledText>
          <StyledText body1 black>
            Dirección: {`${userData?.direccion_entrega_cliente}`}
          </StyledText>

          <View style={styles.buttonContainer}>
            <ButtonPrimary
              text="Logout"
              variant="primary"
              onPress={() => console.log('Logout pressed')}
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
