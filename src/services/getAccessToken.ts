import axios from 'axios'
import base64 from 'react-native-base64'

export const getAccessToken = async () => {
  try {
    const auth = base64.encode(`${process.env.EXPO_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.EXPO_PUBLIC_PAYPAL_CLIENT_SECRET}`);
    const response = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/oauth2/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (response.status === 200 && response.data.access_token) {
      return response.data.access_token;
    } else {
      throw new Error('Failed to obtain PayPal access token');
    }
  } catch (error) {
    console.error('Error obtaining PayPal access token:', error);
    throw new Error('Failed to obtain PayPal access token');
  }
};