import React from 'react';
import ColorBox from '../components/ColorBox';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
});

export default ColorPalette;
