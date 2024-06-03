import { createDrawerNavigator } from '@react-navigation/drawer'

import { Header } from '../components/Header'
import {
  ActivityIcon,
  GridIcon,
  MailIcon,
  ProductIcon,
  SiteIcon,
  TagIcon,
} from '../components/icons/Icons'
import { Analytics } from '../screens/Analytics'
import { Home } from '../screens/Home'
import { Inquiries } from '../screens/Inquiries'
import { Products } from '../screens/Products'
import { Tags } from '../screens/Tags'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        header: () => <Header navigation={navigation} />,
        drawerPosition: 'right',
      })}>
      <Drawer.Screen
        name="View Live Site"
        component={Home}
        options={{
          drawerIcon: ({ color }) => <SiteIcon width={20} height={20} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Overview "
        component={Home}
        options={{
          drawerIcon: ({ color }) => <GridIcon width={20} height={20} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Analytics"
        component={Analytics}
        options={{
          drawerIcon: ({ color }) => <ActivityIcon width={20} height={20} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          drawerIcon: ({ color }) => <ProductIcon width={20} height={20} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Tags"
        component={Tags}
        options={{
          drawerIcon: ({ color }) => <TagIcon width={20} height={20} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Inquiries"
        component={Inquiries}
        options={{
          drawerIcon: ({ color }) => <MailIcon width={20} height={20} color={color} />,
        }}
      />
    </Drawer.Navigator>
  )
}
