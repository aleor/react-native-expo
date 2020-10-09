import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name || !name.trim().length) {
      Alert.alert('Please provide palette name');
      return;
    }

    const newPalette = {
      paletteName: name,
      colors: [],
    };

    navigation.navigate('Home', { newPalette });
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
    marginBottom: 50,
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
});

export default ColorPaletteModal;
