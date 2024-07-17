import { CityType } from '../models/City'

// const getErrorMessage = (error: unknown) => {
//   let message: string

//   if (error instanceof Error) {
//     message = error.message
//   } else if (error && typeof error === 'object' && 'message' in error) {
//     message = String(error.message)
//   } else if (typeof error === 'string') {
//     message = error
//   } else {
//     message = 'Algo ha salido mal'
//   }

//   return message
// }

export const getCities = async (): Promise<{ key: number; value: string; error: string }[]> => {
  // try {
  const res = await fetch('http://192.168.71.221:8000/api/ciudades')
  const data = await res.json()

  return data.map((city: CityType) => ({
    key: city.id_ciudad,
    value: city.nombre_ciudad,
  }))
  // } catch (error: unknown) {
  //   return {
  //     error: getErrorMessage(error),
  //   }
  // }
}
