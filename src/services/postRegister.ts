import { ClientType } from '../models/Client'

export const postRegister = async (client: ClientType) => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/registro`, {
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
