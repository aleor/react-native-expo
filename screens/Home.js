import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  async function fetchPalettes() {
    console.log('here');
    const response = await fetch('/api/palettes');
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setPalettes(data);
    }
  }

  useEffect(() => {
    fetchPalettes();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          palette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
