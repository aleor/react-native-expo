import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import ColorPalette from './ColorPalette';

const MainStack = createStackNavigator();

const MainStackLayer = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

export default MainStackLayer;
