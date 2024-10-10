import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackParamList } from '../navigators/StackNavigation';
import { getAccessToken } from '../services/getAccessToken';

type PaymentScreenProps = NativeStackScreenProps<StackParamList, 'Payment'>;

export const PaymentScreen: React.FC<PaymentScreenProps> = (props) => {
	const { navigation, route } = props
  const { totalUSD } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const handlePayPalPayment = async () => {
    setIsLoading(true);
    try {
      const authToken = await getAccessToken()
			console.warn(authToken)
			const res = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${authToken}`
				},
				body: JSON.stringify({
					"intent": "CAPTURE",
					"purchase_units": [
						{
							"reference_id": "default",
							"amount": {
								"currency_code": "USD",
								"value": `${totalUSD}`
							},
						}
					]
				}),
			})

			Alert.alert('Confirmación', 'Su pago se realizo correctamente')
			navigation.navigate('Home')
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al crear la orden de PayPal');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Softech</Text>

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Haz tu Pago</Text>

        <TouchableOpacity 
          style={styles.paypalButton} 
          onPress={handlePayPalPayment}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#003087" />
          ) : (
            <Image
              source={{
                uri: 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg',
              }}
              style={styles.logo}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.totalText}>Total a pagar: ${totalUSD?.toFixed(2)} USD</Text>
        <Text style={styles.footerText}>Powered by PayPal</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerCopyright}>© 2024 Softech. All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0070ba',
    marginBottom: 40,
  },
  paymentContainer: {
    backgroundColor: '#dbeafe',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  paymentText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  paypalButton: {
    backgroundColor: '#ffb100',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 69, // Altura mínima para mantener consistencia cuando se muestra el ActivityIndicator
  },
  logo: {
    width: 111,
    height: 69,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  footerText: {
    marginTop: 16,
    fontSize: 14,
    color: '#666',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerCopyright: {
    fontSize: 12,
    color: '#666',
  },
});