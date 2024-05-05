import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { MenuIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

export const Header: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagen}>
        <Image
          width={48} height={48} borderRadius={25}
          source={{
            uri: 'https://img.freepik.com/vector-premium/fondo-negro-logo-m-blanco_853558-1833.jpg',
          }}
        />
      </View>
      
      <View style={styles.imagen2}>
      <Image
          width={40} height={40} borderRadius={25}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/010/933/903/non_2x/employee-worker-avatar-profile-icon-isolated-on-gray-background-vector.jpg',
          }}
        />
      </View>


      <MenuIcon width={24} height={24} color={colors.neutral100} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50, // Ajusta este valor para el espaciado superior deseado
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'white', // Cambia el color de fondo según tus necesidades
  },
  
  imagen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  imagen2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:200,
    
  }

})
