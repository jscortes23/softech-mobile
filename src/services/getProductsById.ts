export const getProductById = async (idProduct: number) => {
  try {
    const res = await fetch(`https://adso8.com/api/productos/${idProduct}`)

    if (!res.ok) {
      throw new Error(`Error fetching product details: ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching product details:', error)
    throw error
  }
}
