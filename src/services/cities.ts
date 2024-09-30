import { CityType } from '../models/City'

export const getCities = async (): Promise<{ key: number; value: string; error: string }[]> => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/ciudades`)
  const data = await res.json()

  return data.map((city: CityType) => ({
    key: city.id_ciudad,
    value: city.nombre_ciudad,
  }))
}
