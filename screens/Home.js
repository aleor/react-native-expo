import React, { useEffect, useState, useCallback } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import useFetch from '../hooks/useFetch';
import useFetch_withReducer from '../hooks/useFetch_withReducer';

const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : undefined;

  const [palettes, setPalettes] = useState([]);
  const [data, isLoading, error, refresh] = useFetch('/api/palettes');
  // alternative: or via custom hook with reducer
  // const [palettes, isLoading, error, refresh] = useFetch_withReducer('/api/palettes');

  useEffect(() => {
    setPalettes(data);
  }, [data]);

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
          <View style={{ paddingBottom: 15 }}>
            <Button
              onPress={() => navigation.navigate('ColorPaletteModal')}
              color="teal"
              title="Add new color scheme"
            />
          </View>
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
});

export default Home;
