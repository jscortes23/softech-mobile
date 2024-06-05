export const formatPrice = (amount: number, currency: string = '$'): string => {
  return `${currency} ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}
