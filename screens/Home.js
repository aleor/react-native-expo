import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPalettes = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/palettes');
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setPalettes(data);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
      refreshing={isLoading}
      onRefresh={fetchPalettes}
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
