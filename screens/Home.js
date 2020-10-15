import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { flowActions } from '../actions/flowActions';
import { paletteActions } from '../actions/paletteActions';
import PalettePreview from '../components/PalettePreview';
import useFetch from '../hooks/useFetch';
import useFetch_withReducer from '../hooks/useFetch_withReducer';
import useUndoReducer from '../hooks/useUndoReducer';
import paletteReducer from '../reducers/paletteReducer';

const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : undefined;

  const [palettes, dispatch, canGoPast, canGoFuture] = useUndoReducer(
    paletteReducer,
    [],
  );
  const [data, isLoading, error, refresh] = useFetch('/api/palettes');
  // alternatively: via custom hook with reducer
  // const [data, isLoading, error, refresh] = useFetch_withReducer('/api/palettes');

  useEffect(() => {
    dispatch({ type: paletteActions.ADD, payload: { data } });
  }, [data]);

  useEffect(() => {
    if (newPalette) {
      dispatch({ type: paletteActions.ADD, payload: { data: [newPalette] } });
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
      ListFooterComponent={
        isLoading ? (
          <></>
        ) : (
          <View style={styles.listFooter}>
            {canGoPast() ? (
              <Button
                title="Undo"
                onPress={() => dispatch({ type: flowActions.UNDO })}
              />
            ) : (
              <></>
            )}
            {canGoFuture() ? (
              <Button
                title="Redo"
                onPress={() => dispatch({ type: flowActions.REDO })}
              />
            ) : (
              <></>
            )}
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
  listFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
});

export default Home;
