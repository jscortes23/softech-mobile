import { ClientType } from '../types/Client'
// Darle tipo
export const postRegister = async (client: ClientType) => {
  const res = await fetch(`${process.env.API_URL}/api/registro`, {
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
