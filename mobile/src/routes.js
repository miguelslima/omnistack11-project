import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from 'styled-components/native'
import light from './theme/light';
import dark from './theme/dark';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <NavigationContainer>
        <AppStack.Navigator
          mode="card"
          screenOptions={{
            headerShown: false,
          }}
        >
          <AppStack.Screen
            name="Incidents"
            component={(props) => (
              <Incidents
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
                {...props}
              />
            )}
          />
          <AppStack.Screen name="Detail" component={Detail} />
        </AppStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}