import { useState } from 'react'

export const useRegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idType: 0,
    idNumber: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    idCity: 0,
    address: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (name: keyof typeof formData, value: string | number) => {
    setFormData({ ...formData, [name]: value })
  }

  return { formData, handleChange }
}
