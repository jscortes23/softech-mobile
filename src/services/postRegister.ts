import { ClientType } from '../models/Client'

export const postRegister = async (client: ClientType) => {
  await fetch('http://192.168.1.3:8000/api/registro', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(client),
  })
}
