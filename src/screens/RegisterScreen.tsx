import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'
import { Alert, Pressable, StyleSheet, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { ContainerMain } from '../components/ContainerMain'
import { InputText } from '../components/InputText'
import { StyledText } from '../components/StyledText'
import { BgTwoColor } from '../components/backgrounds/BgTwoColor'
import { BellIcon } from '../components/icons/Icons'
import { colors } from '../config/themes/appThemes'
import { getCities } from '../services/cities'

export const RegisterScreen: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)
  const [city, setCity] = useState<number | null>(null)
  const [cities, setCities] = useState<{ key: number; value: string }[]>([])

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
    setShow(false)
    if (selectedDate) {
      setDate(selectedDate)
    }
  }

  const showDatePicker = () => {
    setShow(true)
  }

  useEffect(() => {
    getCities().then((data) => setCities(data))
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
        <View style={[styles.formContainer, styles.shadowProp]}>
          <StyledText title2 center>
            Welcome to <StyledText blueBase>X Firm</StyledText>
          </StyledText>
          <StyledText title1 neutralBase center>
            Sign up
          </StyledText>
          <View style={styles.input}>
            <InputText label="Enter your first name" inputMode="text" placeholder="First name" />
            <InputText label="Enter your last name" inputMode="text" placeholder="Last name" />
            <InputText
              label="Enter your email"
              inputMode="email"
              placeholder="example@example.com"
            />
            <InputText
              label="Enter your phone number"
              inputMode="text"
              placeholder="Phone number"
            />
            <View>
              <Pressable onPress={showDatePicker}>
                <View pointerEvents="none">
                  <InputText
                    label="Enter your date of birth"
                    placeholder="Date of Birth"
                    value={date.toLocaleDateString()}
                  />
                </View>
              </Pressable>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChange}
                  maximumDate={new Date()}
                  onTouchCancel={() => setShow(false)}
                />
              )}
            </View>
            <View style={styles.dropdownStyle}>
              <StyledText body1 neutralBase>
                Select your city
              </StyledText>
              <SelectList
                setSelected={(val: number) => setCity(val)}
                data={cities}
                save="key"
                searchPlaceholder="Search"
                placeholder="Select a city"
                boxStyles={styles.boxStyle}
                dropdownStyles={styles.boxStyle}
                inputStyles={styles.inputStyle}
                dropdownTextStyles={styles.inputStyle}
              />
            </View>
            <InputText label="Enter your address" inputMode="text" placeholder="Address" />
            <InputText label="Enter your password" placeholder="Password" secureTextEntry />
            <InputText
              label="Confirm your password"
              placeholder="Confirm Password"
              secureTextEntry
            />
          </View>
          <View style={styles.optionsContainer}>
            <Checkbox value="Terms?" />
          </View>
          <ButtonPrimary variant="primary" text="Sign up" onPress={() => Alert.alert('a')} />
        </View>
      </ContainerMain>
    </BgTwoColor>
  )
}

const styles = StyleSheet.create({
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
    marginBottom: 42,
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
  shadowProp: {
    shadowColor: "rgba('51','102','204','0.2')",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  dropdownStyle: {
    rowGap: 12,
  },
  boxStyle: {
    borderColor: colors.neutral40,
  },
  inputStyle: {
    color: colors.neutralBase,
  },
})
