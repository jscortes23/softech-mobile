import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { ContainerMain } from '../components/ContainerMain'
import { InputText } from '../components/InputText'
import { Link } from '../components/Link'
import { StyledText } from '../components/StyledText'
import { BgTwoColor } from '../components/backgrounds/BgTwoColor'
import { BellIcon } from '../components/icons/Icons'
import { colors, fontSize } from '../config/themes/appThemes'

export const Login = () => {
  return (
    <BgTwoColor colors={[colors.blueBase, colors.brand10]}>
      <ContainerMain>
        <View style={styles.header}>
          <StyledText subtitle1 white bold>
            Logo Here
          </StyledText>
          <BellIcon width={19} height={22} color={colors.white} />
        </View>

        <View style={styles.head}>
          <StyledText title1 center white>
            The fastest most & convenient way
          </StyledText>
          <StyledText body2 center white>
            Dedicated virtual-consultation platform for doctors & patients to help them consult
            across various channels
          </StyledText>
        </View>

        <View style={[styles.formContainer, styles.shadowProp]}>
          <StyledText title2 center>
            Welcome to <StyledText blueBase>X Firm</StyledText>
          </StyledText>

          <StyledText title1 neutralBase center>
            Sign in
          </StyledText>

          <View style={styles.input}>
            <InputText
              label="Enter your username or email address"
              placeholder="Username or email address"
            />
            <InputText label="Enter your password" placeholder="Password" secureTextEntry />
          </View>

          <View style={styles.optionsContainer}>
            <Checkbox value="Remember Me" />
            <Link sizeText={fontSize.caption1} value="Forgot Password" />
          </View>

          <ButtonPrimary variant="primary" text="Sing in" onPress={() => Alert.alert('a')} />

          <View style={styles.registerContainer}>
            <StyledText neutralBase center subtitle2>
              No Account?
            </StyledText>
            <Link value="Register Here" sizeText={fontSize.subtitle2} />
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
