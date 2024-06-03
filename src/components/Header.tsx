import Constants from 'expo-constants'
import { View, StyleSheet, Image, Pressable } from 'react-native'

import { MenuIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

export const Header: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.conatinerImages}>
        <Image
          style={styles.imageRounded}
          width={48}
          height={48}
          source={{
            uri: 'https://img.freepik.com/vector-premium/fondo-negro-logo-m-blanco_853558-1833.jpg',
          }}
        />
        <Image
          style={styles.imageRounded}
          width={40}
          height={40}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/010/933/903/non_2x/employee-worker-avatar-profile-icon-isolated-on-gray-background-vector.jpg',
          }}
        />
      </View>

      <Pressable onPress={() => navigation.toggleDrawer()} style={styles.icon}>
        <MenuIcon width={24} height={24} color={colors.neutral100} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  imageRounded: {
    borderRadius: 25,
  },
  conatinerImages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginStart: 20,
  },
})
