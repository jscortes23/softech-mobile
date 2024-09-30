export const getProductsByCategory = async (id: number) => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/productos/categoria/${id}`)
  const data = await res.json()
  console.warn(data)
  return data
}
