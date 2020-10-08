import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={[styles.safeArea]}>
      <View style={[styles.container]}>
        <Text style={styles.text}>Here are some text goes</Text>
      </View>
      <ColorBox colorName="Cyan" colorHex="#2aa198" />
      <ColorBox colorName="Blue" colorHex="#268bd2" />
      <ColorBox colorName="Magenta" colorHex="#d33682" />
      <ColorBox colorName="Orange" colorHex="#cb4b16" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 20,
  },
  container: {
    flex: 0.07,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
