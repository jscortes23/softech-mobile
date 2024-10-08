export const getUserData = async (userToken?: string) => {
  try {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/perfil`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.warn(e)
  }
}
