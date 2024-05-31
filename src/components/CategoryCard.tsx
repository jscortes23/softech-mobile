import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'

interface CategoryCardProps {
  onPress: () => void
  icon?: React.ReactNode
  name: string
}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const { onPress, icon, name } = props
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 100, // Ajusta según sea necesario
    height: 120, // Ajusta según sea necesario
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#f7f7f7', // Color de fondo para que se vea similar
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 8,
  },
  name: {
    fontSize: 14, // Tamaño del texto más pequeño
    fontWeight: '500', // Peso del texto
    color: '#333', // Color del texto
  },
})
