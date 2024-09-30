import { TypesIdType } from '../types/TypesId'

export const getIdTypes = async (): Promise<{ key: number; value: string; error: string }[]> => {
  const res = await fetch(`${process.env.API_URL}/api/identificaciones`)
  const data = await res.json()

  return data.map((idType: TypesIdType) => ({
    key: idType.id_tipo_identificacion,
    value: idType.descripcion_tipo_identificacion,
  }))
}
