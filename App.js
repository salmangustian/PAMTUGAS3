import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Formulir from './laman/Formulir';
import Hasil from './laman/Hasil';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulir">
        <Stack.Screen name="Formulir" component={Formulir} options={{ headerShown: false }}/>
        <Stack.Screen name="Hasil" component={Hasil} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;