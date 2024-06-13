import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface OrderSummaryProps {
  subtotal: number
  iva: number
  discountPercentage: number
  prices: number[]
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  iva,
  discountPercentage,
  prices,
}) => {
  const discount = (subtotal * discountPercentage) / 100
  const total = subtotal - discount + iva

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Porcentaje de descuento</Text>
        <Text style={styles.value}>{discountPercentage}%</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Descuento</Text>
        <Text style={styles.value}>${discount.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>IVA</Text>
        <Text style={styles.value}>${iva.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.boldText, styles.label]}>Subtotal</Text>
        <Text style={[styles.boldText, styles.value]}>${subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.boldText, styles.label]}>Total</Text>
        <Text style={[styles.boldText, styles.value]}>${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Checkout pressed')}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    borderColor: '#ddd',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: '#555',
  },
  value: {
    color: '#111',
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
