import { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { ContainerMain } from '../components/ContainerMain'
import { InputText } from '../components/InputText'
import { Link } from '../components/Link'
import { StyledText } from '../components/StyledText'
import { BgTwoColor } from '../components/backgrounds/BgTwoColor'
import { BellIcon } from '../components/icons/Icons'
import { colors, fontSize } from '../config/themes/appThemes'
import { AuthContext } from '../context/useAuth'
import { StackParamList } from '../navigators/StackNavigation'
import { postLogin } from '../services/postLogin'

type LoginScreenProps = NativeStackScreenProps<StackParamList, 'Login'>

export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const { token, setToken } = useContext(AuthContext)
  const { navigation } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email) return setError('Solo para probar los errores del input Email')
    if (!password) return setError('Solo para probar los errores del input Password')

    const res = await postLogin(email, password)

    if (res.status) {
      navigation.navigate('Home')
      setEmail('')
      setPassword('')
      setToken && setToken(res.token)
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
        <View style={[styles.formContainer, styles.shadowProp]}>
          <StyledText title2 center>
            Welcome to <StyledText blueBase>Softech</StyledText>
          </StyledText>

          <StyledText title1 neutralBase center>
            Sign in
          </StyledText>

          <View style={styles.input}>
            <InputText
              label="Enter your username or email address"
              placeholder="Username or email address"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              inputMode="email"
              error={error}
            />
            <InputText
              label="Enter your password"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              error={error}
              secureTextEntry
            />
          </View>

          <View style={styles.optionsContainer}>
            <Checkbox value="Remember Me" />
            <Link
              sizeText={fontSize.caption1}
              value="Forgot Password"
              onPress={() => navigation.navigate('ForgotPassword')}
            />
          </View>

          <ButtonPrimary variant="primary" text="Sing in" onPress={handleSubmit} />

          <View style={styles.registerContainer}>
            <StyledText neutralBase center subtitle2>
              No Account?
            </StyledText>
            <Link
              value="Register Here"
              onPress={() => navigation.navigate('Register')}
              sizeText={fontSize.subtitle2}
            />
          </View>
        </View>
      </ContainerMain>
    </BgTwoColor>
  )
}

const styles = StyleSheet.create({
  head: {
    marginVertical: 28,
    rowGap: 20,
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 40,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    rowGap: 20,
    marginTop: 41,
  },
  header: {
    marginTop: 49,
    marginBottom: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionsContainer: {
    paddingTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  registerContainer: {
    paddingTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 5,
  },
  shadowProp: {
    shadowColor: "rgba('51','102','204','0.2')",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
})
