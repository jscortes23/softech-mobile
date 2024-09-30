export const getAllBrands = async () => {
  const res = await fetch(`${process.env.API_URL}/api/marcas`)
  const data = await res.json()

  return data
}
