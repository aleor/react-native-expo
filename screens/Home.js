import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : undefined;

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

  useEffect(() => {
    if (newPalette) {
      setPalettes((palletes) => [newPalette, ...palletes]);
    }
  }, [newPalette]);

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
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text style={styles.buttonText}>Add new color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 15,
  },
});

export default Home;
