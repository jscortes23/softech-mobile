export const getAllBrands = async () => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/marcas`)
  const data = await res.json()
  return data
}
