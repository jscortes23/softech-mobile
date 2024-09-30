export const postLogin = async (email: string, password: string) => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const data = await res.json()

  return data
}
