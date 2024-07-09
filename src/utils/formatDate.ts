export const formatDate = (date: Date, format: string): string => {
  const map: { [key: string]: number } = {
    dd: date.getDate(),
    mm: date.getMonth() + 1,
    yyyy: date.getFullYear(),
  }
  return format.replace(/yyyy|mm|dd/gi, (matched) => map[matched].toString())
}
