import { Brand } from './Brand'
import { Category } from './Category'
import { MeasuringUnit } from './MeasuringUnit'
import { Packaging } from './packaging'

export interface Product {
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
  descuento_producto: string
  marca_id: number
  estado: number
  created_at: string
  updated_at: any
  categoria: Category
  unidad_medida: MeasuringUnit
  embalaje: Packaging
  marca: Brand
}
