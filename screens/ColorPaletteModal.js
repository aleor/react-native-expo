import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Switch,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WEB_COLORS } from '../const/webColors';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSubmit = () => {
    if (!name || !name.trim().length) {
      Alert.alert('Please provide palette name');
      return;
    }

    if (selectedColors.length < 3) {
      Alert.alert('Please select at least 3 colors');
      return;
    }

    const newPalette = {
      paletteName: name,
      colors: selectedColors,
    };

    navigation.navigate('Home', { newPalette });
  };

  const handleSelectionChange = (value, color) => {
    if (value) {
      setSelectedColors((colors) => [...colors, color]);
    } else {
      setSelectedColors((colors) => [
        colors.filter((c) => c.colorName !== color.colorName),
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Palette name"
        clearButtonMode="while-editing"
        onChangeText={setName}
      />
      <FlatList
        data={WEB_COLORS}
        keyExtractor={(i) => i.colorName}
        renderItem={({ item }) => (
          <View style={styles.switch}>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!selectedColors.find((c) => c.colorName === item.colorName)
              }
              onValueChange={(selected) => {
                handleSelectionChange(selected, item);
              }}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 25,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 10,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default ColorPaletteModal;
