export const getProductsByCategory = async (id_categoria: number) => {
  try {
    const res = await fetch(`http://192.168.1.60:8000/api/productos/categoria/${id_categoria}`)
    if (!res.ok) {
      throw new Error('Error fetching products')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching products by category', error)
    throw error
  }
}
