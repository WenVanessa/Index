import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Hoja from './HojaDeVida';
import LoginScreen from './Login';
import RegisterScreen from './Registro';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Hoja de Vida" component={Hoja} />
      <Stack.Screen name="Inicio Sesión" component={LoginScreen} />
      <Stack.Screen name="Registro Usuario" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default App;