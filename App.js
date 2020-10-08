import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';
import { COLORS } from './const/colors';

const App = () => {
  return (
    <SafeAreaView style={[styles.safeArea]}>
      <FlatList
        style={styles.pt10}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
        ListHeaderComponent={<Text>Solarized</Text>}
      />
      {/* <View style={[styles.container]}>
        <Text style={styles.text}>Here are some text goes</Text>
      </View>
      <ColorBox colorName="Cyan" colorHex="#2aa198" />
      <ColorBox colorName="Blue" colorHex="#268bd2" />
      <ColorBox colorName="Magenta" colorHex="#d33682" />
      <ColorBox colorName="Orange" colorHex="#cb4b16" /> */}
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
  pt10: {
    paddingTop: 10,
  },
});

export default App;
