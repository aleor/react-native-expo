import React from 'react';
import ColorBox from '../components/ColorBox';
import { COLORS } from '../const/colors';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const ColorPalette = () => {
  return (
    <SafeAreaView style={[styles.safeArea]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.pt10}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
        ListHeaderComponent={<Text>Solarized</Text>}
      />
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

export default ColorPalette;
