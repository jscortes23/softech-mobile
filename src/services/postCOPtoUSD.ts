export const postCOPtoUSD = async (totalCOP: number) => {
	const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/convertir`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			'totalCOP': totalCOP,
		}),
	})

	const data = await res.json()

	return data
}