export const getAllProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/api/productos`)
  const data = await res.json()

  return data
}
