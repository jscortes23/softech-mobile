import { TypesIdType } from '../models/TypesId'

export const getIdTypes = async (): Promise<{ key: number; value: string; error: string }[]> => {
  const res = await fetch('http://192.168.0.120:8000/api/identificaciones')
  const data = await res.json()

  return data.map((idType: TypesIdType) => ({
    key: idType.id_tipo_identificacion,
    value: idType.descripcion_tipo_identificacion,
  }))
}
