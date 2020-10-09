import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createLocalServer } from './server/server';
import MainStackLayer from './screens/MainStack';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();

const startLocalServer = () => {
  if (window.server) {
    window.server.shutdown();
  }
  window.server = createLocalServer();
};

startLocalServer();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackLayer}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
