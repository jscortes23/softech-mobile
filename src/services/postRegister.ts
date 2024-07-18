import { ClientType } from '../models/Client'

export const postRegister = async (client: ClientType) => {
  const res = await fetch('http://192.168.0.120:8000/api/registro', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(client),
  })

  const data = await res.json()

  return data
}
