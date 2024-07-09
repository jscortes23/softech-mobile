import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { Checkbox } from '../components/Checkbox'
import { ContainerMain } from '../components/ContainerMain'
import { InputText } from '../components/InputText'
import { StyledText } from '../components/StyledText'
import { BgTwoColor } from '../components/backgrounds/BgTwoColor'
import { BellIcon } from '../components/icons/Icons'
import { colors } from '../config/themes/appThemes'
import { ClientType } from '../models/Client'
import { getCities } from '../services/cities'
import { postRegister } from '../services/postRegister'
import { getIdTypes } from '../services/typesId'
import { formatDate } from '../utils/formatDate'

export const RegisterScreen: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)
  const [idTypes, setIdTypes] = useState<{ key: number; value: string }[]>([])
  const [cities, setCities] = useState<{ key: number; value: string }[]>([])
  const [client, setClient] = useState<ClientType>()

  // useState para capturar valores del formulario
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [idType, setIdType] = useState<number>(0)
  const [idNumber, setIdNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [dateOfBirth, setDateOfBirth] = useState<string>('')
  const [city, setCity] = useState<number>(0)
  const [address, setAddress] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
    setShow(false)
    if (selectedDate) {
      setDate(selectedDate)
      setDateOfBirth(formatDate(selectedDate, 'yyyy-mm-dd'))
    }
  }

  const showDatePicker = () => {
    setShow(true)
  }

  const handleSubmit = () => {
    setClient({
      email,
      tipo_identificacion_id: idType,
      numero_identificacion_cliente: idNumber,
      nombre_cliente: firstName,
      apellido_cliente: lastName,
      password,
      telefono_cliente: phone,
      direccion_entrega_cliente: address,
      fecha_nacimiento_cliente: dateOfBirth,
      ciudad_id: city,
    })
    if (!client) return
    postRegister(client)
  }

  useEffect(() => {
    getCities().then((data) => setCities(data))
    getIdTypes().then((data) => setIdTypes(data))
  }, [])

  useEffect(() => { }, [client])

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
            <InputText
              label="Enter your first name"
              inputMode="text"
              placeholder="First name"
              onChangeText={(text) => setFirstName(text)}
            />
            <InputText
              label="Enter your last name"
              inputMode="text"
              placeholder="Last name"
              onChangeText={(text) => setLastName(text)}
            />
            <View style={styles.dropdownStyle}>
              <StyledText body1 neutralBase>
                Select your id
              </StyledText>
              <SelectList
                setSelected={(val: number) => setIdType(val)}
                data={idTypes}
                save="key"
                searchPlaceholder="Search"
                placeholder="Select a Id Type"
                boxStyles={styles.boxStyle}
                dropdownStyles={styles.boxStyle}
                inputStyles={styles.inputStyle}
                dropdownTextStyles={styles.inputStyle}
              />
            </View>
            <InputText
              label="Enter your number id type"
              inputMode="numeric"
              keyboardType="numeric"
              placeholder="xxxxxxxxx"
              onChangeText={(text) => setIdNumber(text)}
            />
            <InputText
              label="Enter your email"
              inputMode="email"
              placeholder="example@example.com"
              onChangeText={(text) => setEmail(text)}
            />
            <InputText
              label="Enter your phone number"
              inputMode="text"
              placeholder="Phone number"
              onChangeText={(text) => setPhone(text)}
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
            <InputText
              label="Enter your address"
              inputMode="text"
              placeholder="Address"
              onChangeText={(text) => setAddress(text)}
            />
            <InputText
              label="Enter your password"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <InputText
              label="Confirm your password"
              placeholder="Confirm Password"
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
            />
          </View>
          <View style={styles.optionsContainer}>
            <Checkbox value="Terms?" />
          </View>
          <ButtonPrimary variant="primary" text="Sign up" onPress={() => handleSubmit()} />

          <ButtonPrimary variant="alternative" text="test" onPress={() => console.warn(client)} />
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
