import { StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { ContainerMain } from '../components/ContainerMain'
import { InputText } from '../components/InputText'
import { Link } from '../components/Link'
import { StyledText } from '../components/StyledText'
import { BgTwoColor } from '../components/backgrounds/BgTwoColor'
import { BellIcon } from '../components/icons/Icons'
import { colors, fontSize } from '../config/themes/appThemes'
import { StackParamList } from '../navigators/StackNavigation'

type ForgotProps = NativeStackScreenProps<StackParamList, 'Login'>

export const ForgotPasswordScreen: React.FC<ForgotProps> = (props) => {
  const { navigation } = props

  const handleSubmit = async () => {}

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
          <StyledText title1 neutralBase center>
            Forgot your password?
          </StyledText>

          <View style={styles.input}>
            <InputText
              label="Please enter the email you use to sign in to Softech."
              placeholder="xxx@vav.com"
              keyboardType="email-address"
              inputMode="email"
            />
          </View>

          <ButtonPrimary variant="primary" text="Request password reset" onPress={handleSubmit} />

          <View style={styles.registerContainer}>
            <StyledText neutralBase center subtitle2>
              Back to
            </StyledText>
            <Link
              value="Sing in"
              onPress={() => navigation.navigate('Login')}
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
    width: 347,
    height: 570,
  },
  input: {
    rowGap: 20,
    marginTop: 41,
    marginBottom: 30,
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
