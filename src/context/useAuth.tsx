import { createContext, Dispatch, SetStateAction, useState } from 'react'

import { ClientType } from '../models/Client'

interface AuthContextProps extends Partial<ClientType> {
  token?: string
  setToken?: Dispatch<SetStateAction<string>>
  children?: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({ token: '' })

export const AuthProvider: React.FC<AuthContextProps> = (props) => {
  const [token, setToken] = useState('')
  const {
    apellido_cliente,
    ciudad_id,
    direccion_entrega_cliente,
    email,
    fecha_nacimiento_cliente,
    nombre_cliente,
    numero_identificacion_cliente,
    password,
    telefono_cliente,
    tipo_identificacion_id,
    children,
  } = props

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        apellido_cliente,
        ciudad_id,
        direccion_entrega_cliente,
        email,
        fecha_nacimiento_cliente,
        nombre_cliente,
        numero_identificacion_cliente,
        password,
        telefono_cliente,
        tipo_identificacion_id,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
