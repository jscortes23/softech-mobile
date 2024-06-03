import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import { CardHighlight } from '../components/CardHighlight'
import { ContainerMain } from '../components/ContainerMain'
import { Overview } from '../components/Overview'
import { colors } from '../config/themes/appThemes'

// Datos de ejemplo para las tarjetas
const data = {
  subscribers: {
    title: 'Subscribers',
    quantity: 12000,
    color: [colors.brandBase, colors.brand10],
    trend: 100,
    trendDirection: 'up',
  },
  orders: {
    title: 'Orders',
    quantity: 50000,
    color: [colors.blueBase, colors.blue10],
    trend: 10000,
    trendDirection: 'up',
  },
  inquiries: {
    title: 'Inquiries',
    quantity: 10,
    color: [colors.redBase, colors.red10],
    trend: -5,
    trendDirection: 'down',
  },
  revenue: {
    title: 'Revenue',
    quantity: 108000,
    color: [colors.pinkBase, colors.pink10],
    trend: 50000,
    trendDirection: 'up',
  },
}

export const Home = () => {
  return (
    <>
      <ScrollView>
        <ContainerMain>
          <Overview updateTime="Last updated 1 hour ago" />
          <View style={styles.cardContainer}>
            <CardHighlight
              title={data.subscribers.title}
              quantity={data.subscribers.quantity}
              color={data.subscribers.color}
            />
            <CardHighlight
              title={data.orders.title}
              quantity={data.orders.quantity}
              color={data.orders.color}
            />
            <CardHighlight
              title={data.inquiries.title}
              quantity={data.inquiries.quantity}
              color={data.inquiries.color}
            />
            <CardHighlight
              title={data.revenue.title}
              quantity={data.revenue.quantity}
              color={data.revenue.color}
            />
          </View>
        </ContainerMain>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  cardContainer: {
    marginTop: 20,
    rowGap: 16,
  },
})
