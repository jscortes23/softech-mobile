export const getAllCategories = async () => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/categorias`)
  const data = await res.json()

  return data
}
