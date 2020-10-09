import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SOLARIZED_COLORS } from '../const/colors';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Solarized',
            colors: SOLARIZED_COLORS,
          });
        }}
      >
        <Text>Show solarized palette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
