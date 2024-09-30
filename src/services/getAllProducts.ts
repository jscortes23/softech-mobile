export const getAllProducts = async () => {
  try {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/productos`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}
