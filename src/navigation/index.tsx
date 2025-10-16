import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetailsScreen from 'src/screens/details'
import SearchScreen from 'src/screens/search'

import { MainStackParamList } from './routes'

const Stack = createNativeStackNavigator<MainStackParamList>()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
