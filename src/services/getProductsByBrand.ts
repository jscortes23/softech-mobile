export const getProductsByBrands = async (idBrand: number) => {
  try {
    const res = await fetch(`https://adso8.com/api/productos/marca/${idBrand}`)

    // Verificamos si la respuesta es exitosa (código HTTP 2xx)
    if (!res.ok) {
      // Si no es exitosa, arrojamos un error con el estado de la respuesta
      throw new Error(`Error fetching products: ${res.statusText}`)
    }

    const data = await res.json() // Parseamos el JSON solo si la respuesta es exitosa
    return data
  } catch (error) {
    // Manejamos errores aquí y los mostramos en la consola
    console.error('Error fetching products by brand:', error)
    throw error // Si queremos propagar el error
  }
}
