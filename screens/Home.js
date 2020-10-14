import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';
import useFetch from '../hooks/useFetch';
import useFetch_withReducer from '../hooks/useFetch_withReducer';

const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : undefined;

  const [palettes, isLoading, error, refresh] = useFetch('/api/palettes');
  // alternative: or via custom hook with reducer
  // const [palettes, isLoading, error, refresh] = useFetch_withReducer('/api/palettes');

  useEffect(() => {
    if (newPalette) {
      setPalettes((palletes) => [newPalette, ...palletes]);
    }
  }, [newPalette]);

  return error ? (
    <Text>An error on fetching data: {error}</Text>
  ) : (
    <FlatList
      style={styles.list}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isLoading}
      onRefresh={() => refresh()}
      ListHeaderComponent={
        isLoading ? (
          <></>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('ColorPaletteModal')}
          >
            <Text style={styles.buttonText}>Add new color scheme</Text>
          </TouchableOpacity>
        )
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
