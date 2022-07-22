import { createNativeStackNavigator } from '@react-navigation/native-stack'

const {Navigator, Screen} = createNativeStackNavigator()

import { Dashboard } from '../screen/Dashboard';
import { Register } from '../screen/Register';
import { Details } from '../screen/Details';


export function DefaultRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Dashboard}/>
      <Screen name="new" component={Register}/>
      <Screen name="details" component={Details}/>
    </Navigator>
  )
}