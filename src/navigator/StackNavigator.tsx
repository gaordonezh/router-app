import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Page3Screen from '../screens/Page3Screen';
import Page2Screen from '../screens/Page2Screen';
import Page1Screen from '../screens/Page1Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  first: undefined;
  second: undefined;
  third: undefined;
  fourth: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="first"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="first"
        options={{title: 'Página 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="second"
        options={{title: 'Página 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="third"
        options={{title: 'Página 3'}}
        component={Page3Screen}
      />
      <Stack.Screen name="fourth" component={PersonaScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
