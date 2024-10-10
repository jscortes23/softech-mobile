export interface ProductType {
  id_producto: number
  descripcion_producto: string
  descripcion_larga_producto: string
  categoria_id: number
  valor_unitario: string
  stock: number
  unidad_medida_id: number
  embalaje_id: number
  altura_producto: number
  anchura_producto: number
  peso_producto: string
  imagen_miniatura_producto: string
  galeria_imagenes_producto: string
  images?: { id: number; src: string }[]
  descuento_producto: string
  marca_id: number
  estado: number
  created_at: string
  updated_at: any
  categoria: {
    id_categoria: number
    nombre_categoria: string
  }
  unidad_medida: {
    id_unidad_medida: number
    descripcion_unidad_de_medida: string
  }
  embalaje: {
    id_embalaje: number
    descripcion_embalaje: string
  }
  marca: {
    id_marca: number
    nombre_marca: string
  }
}
