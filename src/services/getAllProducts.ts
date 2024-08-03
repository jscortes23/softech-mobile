export const getAllProducts = async () => {
  const res = await fetch('http://192.168.220.221:8000/api/productos')
  const data = await res.json()

  return data
}
