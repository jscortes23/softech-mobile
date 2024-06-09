import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
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

export const Register: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)
  const [city, setCity] = useState<number>(0)

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false)
    if (selectedDate) {
      setDate(selectedDate)
    }
  }

  const showDatePicker = () => {
    setShow(true)
  }

  const cities = [
    { key: 1, value: 'Cali' },
    { key: 2, value: 'Bogotá' },
    { key: 3, value: 'Medellin' },
    { key: 4, value: 'Cartagena' },
  ]

  return (
    <BgTwoColor colors={[colors.blueBase, colors.brand10]}>
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
                onSelect={() => alert(city)}
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
